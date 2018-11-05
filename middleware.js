// const bodyParser = require('body-parser');
const express = require('express');
const cookieParser = require('cookie-parser');
// const { JWT_PRIVATE_KEY } = require('./refs/tokenKeys');

const isDevelopment = process.env.NODE_ENV === 'development';

module.exports = (server) => {
  // server.use(bodyParser.json());
  server.use(express.json());
  server.use(cookieParser());
  server.use((req, res, next) => {
    if (req.url.indexOf('/api/') > -1) {
      // eslint-disable-next-line no-console
      if (isDevelopment) console.log('[ + ] Next.js server API:', req.url);

      res.header('Access-Control-Allow-Origin', '*'); // TODO: specify CORS domains
      res.header('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content-Type, Accept, Authorization');
      res.header('Access-Control-Allow-Methods', 'GET,PUT,POST,OPTIONS,DELETE');
    }
    return next();
  });
};
