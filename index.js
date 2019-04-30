const { createServer } = require('./src/server.js');
const config = require('./src/util/config.js');
const logger = require('./src/util/logger.js');

const server = createServer();

server.listen(config.PORT, () => {
  logger.info(`Server running at http://localhost:${config.PORT}`);
});
