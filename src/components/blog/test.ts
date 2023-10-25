import { describe, it } from 'node:test';
import request from 'supertest';
import app from '../../app';

describe('GET /', () => {
  it('should response status 200', (_, done) => {
    request(app)
      .get('/')
      .send()
      .expect(200, () => {
        done();
      });
  });
});