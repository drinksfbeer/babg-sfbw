import fetch from 'isomorphic-unfetch';

const isDevelopment = process.env.NODE_ENV === 'development';
const hostname = isDevelopment ? 'http://localhost:3001' : 'https://sfbeer-portal.herokuapp.com';
const selfHostname = isDevelopment ? 'http://127.0.0.1:3000' : ''; // TODO: update with prod domain

const storeType = {
  AUTH: 'auth',
  GET: 'list',
  POST: 'form',
  PUT: 'update',
  DELETE: 'delete',
};

const url = (path, isSelf = false) => (isSelf ? selfHostname : hostname) + path;
const status = (type, section) => (stat, bool) => ({
  type,
  section,
  status: stat,
  bool,
});
const success = type => pkg => ({ type, pkg });
const error = (type, form) => pkg => ({
  type,
  meta: { form },
  payload: { syncErrors: pkg.err },
});
const options = method => pkg => ({
  method,
  headers: {
    'Content-Type': 'application/json',
    Accept: 'application/json',
  },
  body: method === 'GET' || !pkg ? null : JSON.stringify(pkg),
});

const actions = {
  authorize: {
    url: url('/api/auth', true),
    status: status('USER_STATUS', storeType.AUTH),
    success: success('AUTHORIZE_USER'),
    error: error('@@redux-form/UPDATE_SYNC_ERRORS', 'login'),
    options: options('POST'),
  },
  token: {
    url: url('/api/token', true),
    status: status('USER_STATUS', storeType.AUTH),
    success: success('AUTHORIZE_USER'),
    options: options('POST'),
  },
  logout: {
    url: url('/api/logout', true),
    status: status('USER_STATUS', storeType.AUTH),
    success: success('LOGOUT_USER'),
    options: options('POST'),
  },
  register: {
    url: url('/api/register', true),
    status: status('USER_STATUS', storeType.AUTH),
    success: success('AUTHORIZE_USER'),
    options: options('POST'),
  },
  getPages: {
    url: url('/api/v1/SFBWpages'),
    status: status('PAGES_STATUS', storeType.GET),
    success: success('GET_PAGES_SUCCESS'),
    options: options('GET'),
  },
  getSponsors: {
    url: url('/api/v1/SFBWsponsors'),
    status: status('SPONSORS_STATUS', storeType.GET),
    success: success('GET_SPONSORS_SUCCESS'),
    options: options('GET'),
  },
};

const asyncAction = (key, pkg, query = null, cb) => dispatch => new Promise(async (resolve, reject) => {
  const newAction = actions[key];
  if (!newAction) {
    const err = {
      err: 'action_key_not_found',
      message: `The following action key was not found: ${key}`,
    };
    if (cb) cb(err);
    return reject(err);
  }

  dispatch(newAction.status('loading', true));
  dispatch(newAction.status('error', false));

  try {
    const response = await fetch(`${newAction.url}${query ? `?${query}` : ''}`, newAction.options(pkg));
    const data = await response.json();
    dispatch(newAction.status('loading', false));

    if (response.ok) {
      dispatch(newAction.success(data));
      if (cb) cb(null, data);
      resolve(data);
    } else {
      if (newAction.error) {
        dispatch(newAction.error(data));
      }
      if (cb) cb(data || { err: 'async_action_unhandleable' });
      reject(data);
    }
  } catch (error) {
    if (cb) cb({ err: error });
    reject(error);
  }
});

export default asyncAction;
