const auth = require('./controllers/authController');

module.exports = (server, app) => {
  server.post('/api/auth', auth.authenticate);
  server.post('/api/token', auth.token);
  server.post('/api/logout', auth.logout);
  server.post('/api/register', auth.register);

  // Fixes error where sponsors page isnt rendered with extra forward slash
  server.get('/sponsors/', (req, res) => {
    app.render(req, res, '/sponsors');
  });

  // Renders sponsors page no matter what is after
  server.get('/sponsors/:page', (req, res) => {
    app.render(req, res, '/sponsors');
  });

  server.get('/login', (req, res) => app.render(req, res, '/login'));
  server.get('/register', (req, res) => app.render(req, res, '/register'));

  // Render pagebuilder even without subpage
  server.get('/:mainHeader', (req, res) => {
    app.render(req, res, '/pageBuilderContainer');
  });

  // Fixes error where page isnt rendered with extra forward slash
  server.get('/:mainHeader/', (req, res) => {
    app.render(req, res, '/pageBuilderContainer');
  });

  // Fixes error where page isnt rendered with extra forward slash
  server.get('/:mainHeader/:subPage/', (req, res) => {
    app.render(req, res, '/pageBuilderContainer');
  });

  // Renders pageBuilderContainer page no matter what is after
  server.get('/:mainHeader/:subPage', (req, res) => {
    const { subPage } = req.params;
    app.render(req, res, `/pageBuilderContainer/${subPage}`);
  });
};
