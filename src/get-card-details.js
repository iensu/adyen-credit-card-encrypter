const puppeteer = require('puppeteer');
const fs = require('fs');
const config = require('./util/config');
const logger = require('./util/logger');

const adyenData = [
  { selector: '#encryptedCardNumber', value: '2223000048410010' },
  { selector: '#encryptedExpiryDate', value: '03/30' },
  { selector: '#encryptedSecurityCode', value: '737' },
];

module.exports = async () => {
  try {
    logger.info(
      `Trying to generate encrypted credit card details from url ${
        config.SERVICE_URL
      }`
    );

    const browser = await puppeteer.launch({
      args: ['--no-sandbox', '--disable-setuid-sandbox'],
    });
    const page = await browser.newPage();

    await page.goto(`${config.SERVICE_URL}/adyen`);

    const iframes = await page.$$('iframe');

    await (await iframes[0].contentFrame()).type(
      adyenData[0].selector,
      adyenData[0].value
    );
    await (await iframes[1].contentFrame()).type(
      adyenData[1].selector,
      adyenData[1].value
    );
    await (await iframes[2].contentFrame()).type(
      adyenData[2].selector,
      adyenData[2].value
    );

    await page.screenshot({ path: config.ADYEN_SCREEMSHOT });

    const encryptedCardDetails = await page.$eval(
      '#adyen-output',
      (el) => el.textContent
    );

    await browser.close();

    fs.writeFileSync(
      config.ENCRYPTED_CARD_DETAILS_JSON,
      encryptedCardDetails,
      'utf-8'
    );

    logger.info('Wrote encrypted credit card details');
  } catch (err) {
    logger.error(
      `Failed to write encrypted credit card details ${err.message}`
    );
  }
};
