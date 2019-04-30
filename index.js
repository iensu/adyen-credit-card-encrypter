const { createServer } = require('./src/server.js');
const config = require('./src/util/config.js');
const logger = require('./src/util/logger.js');
const getCardDetails = require('./src/get-card-details.js');

const server = createServer();

const hour = 60 * 60 * 1000;

server.listen(config.PORT, () => {
  logger.info(`Server running at http://localhost:${config.PORT}`);

  getCardDetails();

  setInterval(getCardDetails, config.UPDATE_INTERVAL_HOURS * hour);
});
