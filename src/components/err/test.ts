import { describe, it } from 'node:test';
import request from 'supertest';
import app from '../../app';

describe('GET /err', () => {
  it('should response status 500', (_, done) => {
    request(app)
      .get('/err')
      .send()
      .expect(500, done);
  });
});