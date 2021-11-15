import { MongoMemoryServer } from 'mongodb-memory-server';
import mongoose from 'mongoose';
import supertest from 'supertest';
import { createRecord } from '../service/record.service';
import { createTag } from '../service/tag.service';
import { signJwt } from '../utils/jwt';
import createServer from '../utils/server';

const app = createServer();
const userId = new mongoose.Types.ObjectId().toString();
const userPayload = {
  _id: userId,
  email: 'test@g.com',
  name: 'New User',
};
const tagPayload = {
  name: 'witty',
  user: userId,
  records: [],
};
beforeAll(async () => {
  const mongoServer = await MongoMemoryServer.create();
  await mongoose.connect(mongoServer.getUri());
});
afterAll(async () => {
  await mongoose.disconnect();
  await mongoose.connection.close();
});
describe('record', () => {
  describe('get record', () => {
    describe('given the record does not exist', () => {
      it('should return 404', async () => {
        const recordId = '50';
        const jwt = signJwt(userPayload);
        await supertest(app)
          .get(`/api/records/${recordId}`)
          .set('Authorization', `Bearer ${jwt}`)
          .expect(404);
      });
    });
    describe('given the record does exist', () => {
      it('should return 200 and the record', async () => {
        const jwt = signJwt(userPayload);
        const { _id: tagId } = await createTag(tagPayload);
        const recordPayload = {
          record: 'this is a clever word',
          tags: [tagId],
          user: userId,
        };
        const record = await createRecord(recordPayload);
        const recordId = record._id;
        const { body, statusCode } = await supertest(app)
          .get(`/api/records/${recordId}`)
          .set('Authorization', `Bearer ${jwt}`);
        expect(statusCode).toBe(200);
        expect(body.record).toBe('this is a clever word');
        expect(body.tags.length).toBe(1);
        expect(body.tags[0]).toBe(String(tagId));
      });
    });
  });
  describe('create a record', () => {
    describe('given a user is not logged in', () => {
      it('should return 403', async () => {
        const { statusCode } = await supertest(app).post('/api/records/');
        expect(statusCode).toBe(403);
      });
    });
    describe('given a user is logged in', () => {
      it('should return 200 and create a record', async () => {
        const jwt = signJwt(userPayload);
        const {
          body: { _id: tagId },
        } = await supertest(app)
          .post('/api/tags')
          .set('Authorization', `Bearer ${jwt}`)
          .send({ ...tagPayload, name: 'wise' })
          .expect(200);
        const recordPayload = {
          record: 'this is an awesome word I want to memorize!',
          tags: [tagId],
          user: userId,
        };
        const { statusCode, body } = await supertest(app)
          .post('/api/records')
          .set('Authorization', `Bearer ${jwt}`)
          .send(recordPayload);
        expect(statusCode).toBe(200);
        expect(body.record).toBe(recordPayload.record);
      });
    });
  });
});
