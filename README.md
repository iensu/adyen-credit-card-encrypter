# Node.JS Express server template

A simple Express server template which comes with the following features:

* [Express](https://expressjs.com/) server
* Testing using [Mocha](https://mochajs.org/)
* Logging using [Winston](https://github.com/winstonjs/winston)
* Optional API protection using an API_KEY
* Configuration via environment variables
* `/liveness` endpoint for liveness/health check
* Code linting using [Eslint](https://eslint.org/)
* Code formatting using [Prettier](https://prettier.io/)
* NPM scripts:
  * `start` - Start the application
  * `start:dev` - Start a server watching for code changes
  * `test` - Run tests and linter
  * `test:dev` - Run tests and watch for code changes

## How to use

1. Clone the project:
   ```bash
   $ git clone https://github.com/iensu/adyen-credit-card-encrypter my-project-name
   ```
1. Remove the Git history:
   ```bash
   $ cd my-project-name
   $ rm -rf .git
   ```
1. Re-initialize git:
   ```bash
   $ git init
   ```
1. Update the project `name` field in [package.json](./package.json), [package-lock.json](./package-lock.json) and change the `author` field.
1. Make an initial commit
   ```bash
   $ git commit -am "Initial commit"
   ```

## Acknowledgements

This project is a grateful recipient of the
[Futurice Open Source sponsorship program](http://futurice.com/blog/sponsoring-free-time-open-source-activities).
