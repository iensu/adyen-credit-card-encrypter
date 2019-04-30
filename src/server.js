const express = require('express');
const config = require('./util/config.js');

const createServer = () => {
  const app = express();

  if (config.API_KEY) {
    // eslint-disable-next-line global-require
    app.use(require('./middleware/api-key-auth.js')(config.API_KEY));
  }

  app.get('/liveness', (req, res) => {
    res.status(200).send('alive\n');
  });

  return app;
};

module.exports = { createServer };
