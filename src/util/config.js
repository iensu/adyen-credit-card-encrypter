const REQUIRED_VARS = ['WEBSHOP_CHECKOUT_PUBKEY', 'SERVICE_URL'];

const missingRequiredVars = REQUIRED_VARS.filter((x) => !process.env[x]);

if (missingRequiredVars.length > 0) {
  throw new Error(
    `Required environment variables not set: ${missingRequiredVars.join(', ')}`
  );
}

module.exports = {
  LOG_LEVEL: process.env.LOG_LEVEL || 'info',
  PORT: process.env.PORT || 3000,
  API_KEY: process.env.API_KEY,
  WEBSHOP_CHECKOUT_PUBKEY: process.env.WEBSHOP_CHECKOUT_PUBKEY,
  ENCRYPTED_CARD_DETAILS_JSON: 'encrypted-card-details.json',
  ADYEN_SCREEMSHOT: 'adyen-screenshot.png',
  SERVICE_URL: process.env.SERVICE_URL,
  UPDATE_INTERVAL_HOURS: parseInt(process.env.UPDATE_INTERVAL_HOURS, 10) || 4,
};
