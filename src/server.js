const express = require('express');
const fs = require('fs');
const config = require('./util/config.js');

const createServer = () => {
  const app = express();

  app.set('views', './src/views');
  app.set('view engine', 'ejs');

  if (config.API_KEY) {
    // eslint-disable-next-line global-require
    app.use(require('./middleware/api-key-auth.js')(config.API_KEY));
  }

  app.get('/liveness', (_req, res) => {
    res.status(200).send('alive\n');
  });

  app.get('/adyen', (_req, res) => {
    res.render('adyen', { config });
  });

  app.get('/card-details', (_req, res) => {
    const contents = fs.readFileSync(
      config.ENCRYPTED_CARD_DETAILS_JSON,
      'utf-8'
    );

    res.json(JSON.parse(contents));
  });

  return app;
};

module.exports = { createServer };
