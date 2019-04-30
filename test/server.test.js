const request = require('supertest');
const { createServer } = require('../src/server.js');
const config = require('../src/util/config.js');

describe('Server tests', () => {
  describe('/liveness endpoint', () => {
    it('should respond on a GET request', () => {
      return request(createServer())
        .get('/liveness')
        .expect(200, 'alive\n');
    });
  });

  describe('API_KEY authentication', () => {
    const apiKey = 'my-very-secret-api-key';

    beforeEach(() => {
      config.API_KEY = apiKey;
    });

    afterEach(() => {
      Reflect.deleteProperty(config, 'API_KEY');
    });

    it('should allow requests with the correct X-API-KEY header', () => {
      return request(createServer())
        .get('/liveness')
        .set('X-API-KEY', apiKey)
        .expect(200, 'alive\n');
    });

    it('should not allow requests with no X-API-KEY header', () => {
      return request(createServer())
        .get('/liveness')
        .expect(401, 'Unauthorized');
    });

    it('should not allow requests with incorred X-API-KEY header', () => {
      return request(createServer())
        .get('/liveness')
        .set('X-API-KEY', 'incorrect-api-key')
        .expect(401, 'Unauthorized');
    });
  });
});
