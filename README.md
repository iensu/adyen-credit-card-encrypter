# Adyen Credit Card Encrypter

The purpose of this project is to provide a way of getting encrypted credit card details for Adyen's test cards.

When creating backend integration tests to Adyen we could not find a way of generating encrypted credit card details on the fly needed to test the purchase flow. As far as we could see the only way of acquiring encrypted details was to enter the card details into Adyen's iframe solution. The encrypted details also expire, so we also needed to update them before running tests.

## Getting started

1. Clone the project
1. Inside the project directory run `npm install`
1. Setup the required environment variables (see [.env.sample](.env.sample))
1. Then run `npm run start:dev`

## How it works

The API consists of three main parts:
* A page with an Adyen Web integration (`/adyen`)
* A recurring scraping process which generates encrypted card details and writes them to a file using [Puppeteer](https://pptr.dev/)
* A route which returns the latest encrypted card details (`/card-details`)
