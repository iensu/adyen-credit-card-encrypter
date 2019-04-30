const REQUIRED_VARS = [];

const missingRequiredVars = REQUIRED_VARS.filter((x) => !process.env[x]);

if (missingRequiredVars.length > 0) {
  throw new Error(
    `Required environment variables not set: ${missingRequiredVars.join(', ')}`
  );
}

module.exports = {
  LOG_LEVEL: process.env.LOG_LEVEL || 'info',
  PORT: process.env.PORT || 4649,
  API_KEY: process.env.API_KEY,
};
