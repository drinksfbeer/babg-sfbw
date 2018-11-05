const fetch = require('isomorphic-unfetch');
const jwt = require('jsonwebtoken');
const { JWT_PRIVATE_KEY } = require('../refs/tokenKeys');

const isDevelopment = process.env.NODE_ENV === 'development';
// const hostname = isDevelopment ? 'http://localhost:3001' : 'https://sfbeer-portal.herokuapp.com';
const hostname = 'https://sfbeer-portal.herokuapp.com';
const url = route => hostname + route;

const expiry = 1000 * 60 * 60 * 24 * 30; // 30 days (in ms)
const cookieOptions = (req) => {
  // hosts here refer to locations where the API server may be located
  const authorizedHosts = [
    'floc.beer',
    'sfbeerweek.org',
  ];
  if (isDevelopment) {
    authorizedHosts.push(
      'localhost:3000',
      '127.0.0.1:3000',
    );
  }

  const hostname = req.headers.host || req.hostname;
  const isAuthorized = authorizedHosts.findIndex(h => hostname.indexOf(h) > -1) > -1;

  return {
    isAuthorized,
    options: {
      domain: isDevelopment ? '' : hostname, // apparently `localhost` isn't a valid domain!
      path: '/',
      secure: !isDevelopment,
      httpOnly: true,
      maxAge: expiry,
    },
  };
};

const authController = {};

// this basically calls the API `/api/v1/auth` on `sfbeer-portal`
// but also sends a 'Set-Cookie' header to the Next.js client with the JWT token
authController.authenticate = async (req, res) => {
  const { email, password } = req.body;

  try {
    const response = await fetch(url('/api/v1/auth'), {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        Accept: 'application/json',
      },
      body: JSON.stringify({
        email,
        password,
        restrictRole: true,
        restrictedRoles: [
          'master',
          'chapter',
          'member',
          'staff',
          'agent',
        ],
      }),
    });
    const data = await response.json();

    if (data.err) {
      return res.status(424).json({ err: data.err });
    }

    const { isAuthorized, options } = cookieOptions(req);
    // console.log('isAuthorized:', isAuthorized); // eslint-disable-line no-console
    // console.log('options:', options); // eslint-disable-line no-console

    if (isAuthorized) {
      const token = jwt.sign({
        iat: Date.now(), // issued at
        exp: Date.now() + expiry, // expiration
        pi: data.password,
      }, JWT_PRIVATE_KEY);

      res.cookie('token', token, options);
    }

    return res.json(data);
  } catch (error) {
    return res.status(500).json({ err: error });
  }
};

// this calls the API `/api/v1/token` on `sfbeer-portal`
// but also does some JWT token validation and processing before sending the
// hashed password to the API cause what is security lmao
// (this is a POST method tho, just fyi)
authController.token = async (req, res) => {
  const { token } = req.body;

  if (!token) {
    return res.status(400).json({ err: 'missing_parameters' });
  }

  try {
    // verify jwt token and extract password from payload
    // (if verification is successful, payload will be automatically decoded)
    // (an error will be thrown if verification fails)
    const decodedToken = jwt.verify(token, JWT_PRIVATE_KEY);
    const { pi: password } = decodedToken;

    // continue as normal
    const response = await fetch(url('/api/v1/token'), {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
        Accept: 'application/json',
        Authorization: password,
      },
    });
    const data = await response.json();

    if (data.err) {
      return res.status(424).json({ err: data.err });
    }

    return res.json(data);
  } catch (error) {
    return res.status(500).json({ err: error });
  }
};

authController.logout = async (req, res) => {
  const { options } = cookieOptions(req);
  res.clearCookie('token', options);

  return res.json({ status: 'ok' });
};

// this calls the API `/api/v1/users` (POST) on `sfbeer-portal`
// but also sends the JWT cookie over
// similar to logging in (i.e., authenticating), but also creates an account
authController.register = async (req, res) => {
  const { email, password } = req.body;

  // TODO: this is the user ID for 'chapter@paradeigm.com'
  // while this isn't the best solution, it works for now without having to create
  // an entirely new API on the `sfbeer-portal` side
  // (NOTE: but if this account is deleted, this API will break!)
  const adminId = '5b48eb417dbbfd21ea60f6a8';

  // this is the chapter UUID for the San Francisco chapter
  // (since this is San Francisco Beer Week)
  const chapterUuid = 'c668beb0-86eb-11e8-9db3-ef7cf1aad9f5';

  try {
    const response = await fetch(url('/api/v1/users'), {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        Accept: 'application/json',
      },
      body: JSON.stringify({
        adminId,
        pkg: {
          email,
          password,
          role: 'enthusiast',
          chapterUuid,
        },
      }),
    });
    const data = await response.json();

    if (data.err) {
      return res.status(424).json({ err: data.err });
    }

    const { isAuthorized, options } = cookieOptions(req);

    if (isAuthorized) {
      const token = jwt.sign({
        iat: Date.now(), // issued at
        exp: Date.now() + expiry, // expiration
        pi: data.password,
      }, JWT_PRIVATE_KEY);

      res.cookie('token', token, options);
    }

    return res.json(data);
  } catch (error) {
    return res.status(500).json({ err: error });
  }
};

module.exports = authController;
