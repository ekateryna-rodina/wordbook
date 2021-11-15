import mongoose from 'mongoose';
import request from 'supertest';
import { signJwt } from '../utils/jwt';
import createServer from '../utils/server';
const app = createServer();
const userId = new mongoose.Types.ObjectId().toString();
const userPayload = {
  _id: userId,
  email: 'test@g.com',
  name: 'New User',
};
describe('fetch words info', () => {
  describe('given user is not logged in', () => {
    it('should return 403', async () => {
      await request(app).get(`/api/words/hello-api`).expect(403);
    });
  });
  describe('given the user is logged in', () => {
    it('should return 200 and result', async () => {
      const jwt = signJwt(userPayload);
      const { statusCode, body } = await request(app)
        .get('/api/words/hello')
        .set('Authorization', `Bearer ${jwt}`)
        .expect(200);
      expect(body.word).toBe('hello');
      expect(body.results.length).toBeDefined();
    });
  });
});
