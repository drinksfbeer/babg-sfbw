const express = require('express');
const next = require('next');
const middleware = require('./middleware');
const routes = require('./routes');

const PORT = process.env.PORT || 3000;
const dev = process.env.NODE_ENV !== 'production';
const app = next({ dev });

app.prepare().then(() => {
  const server = express();

  middleware(server);
  routes(server, app);

  // Renders home page for wildcard routes
  server.get('*', (req, res) => {
    app.render(req, res, '/');
  });

  server.listen(PORT, (err) => {
    if (err) throw err;
    // eslint-disable-next-line no-console
    console.log('[ i ] Next.js server ready on port', PORT);
  });
}).catch((ex) => {
  console.error(ex.stack); // eslint-disable-line no-console
  process.exit(1);
});
