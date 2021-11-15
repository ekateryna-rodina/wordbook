import mongoose from 'mongoose';
import request from 'supertest';
import { createUserSessionHandler } from '../controller/session.controller';
import * as SessionService from '../service/session.service';
import * as UserService from '../service/user.service';
import createServer from '../utils/server';

const app = createServer();
const userId = new mongoose.Types.ObjectId().toString();
const userPayload = {
  _id: userId,
  email: 'test@g.com',
  name: 'Kateryna',
};
const sessionPayload = {
  _id: new mongoose.Types.ObjectId().toString(),
  user: userId,
  isValid: true,
  createdAt: new Date('2021-11-12T18:40:08.193+0000'),
  updatedAt: new Date('2021-11-12T18:40:08.193+0000'),
  __v: 0,
};
const userInput = {
  name: 'Kateryna',
  email: 'test@g.com',
  password: 'securepassword',
  passwordConfirmation: 'securepassword',
};
describe('user', () => {
  describe('register the user', () => {
    describe('given the password or email are not valid', () => {
      it('should return 400', async () => {
        const createUserServiceMock = jest
          .spyOn(UserService, 'createUser')
          //   @ts-ignore
          .mockReturnValueOnce(userPayload);
        const userInputModified = {
          ...userInput,
          email: 'email is not valid',
          password: '123',
          passwordConfirmation: '123',
        };
        const { statusCode, body } = await request(app)
          .post('/api/users')
          .send(userInputModified);
        expect(statusCode).toBe(400);
        expect(createUserServiceMock).not.toHaveBeenCalled();
      });
    });
    describe('given passwords dont match', () => {
      it('should return 400', async () => {
        const createUserServiceMock = jest
          .spyOn(UserService, 'createUser')
          //   @ts-ignore
          .mockReturnValueOnce(userPayload);
        const userInputModified = {
          ...userInput,
          password: 'anothersecurepassword',
        };
        const { statusCode, body } = await request(app)
          .post('/api/users')
          .send(userInputModified);
        expect(statusCode).toBe(400);
        expect(createUserServiceMock).not.toHaveBeenCalled();
      });
    });
    describe('given user service throws an error', () => {
      it('should return 409', async () => {
        const createUserServiceMock = jest
          .spyOn(UserService, 'createUser')
          //   @ts-ignore
          .mockRejectedValue('throws an error');
        const { statusCode, body } = await request(app)
          .post('/api/users')
          .send(userInput);
        expect(statusCode).toBe(409);
        expect(createUserServiceMock).toHaveBeenCalled();
      });
    });
    describe('given credentials are valid', () => {
      it('should return 200 and create user', async () => {
        const createUserServiceMock = jest
          .spyOn(UserService, 'createUser')
          //   @ts-ignore
          .mockReturnValueOnce(userPayload);

        const { statusCode, body } = await request(app)
          .post('/api/users')
          .send(userInput);
        expect(statusCode).toBe(200);
        expect(body).toEqual(userPayload);
        expect(createUserServiceMock).toBeCalledWith(userInput);
      });
    });
  });
  describe('create a session', () => {
    describe('given user exists and passwords match', () => {
      it('should return 200 and return signed accessToken and refreshToken', async () => {
        jest
          .spyOn(UserService, 'validateUser')
          //@ts-ignore
          .mockReturnValue(userPayload);
        jest
          .spyOn(SessionService, 'createSession')
          //@ts-ignore
          .mockReturnValue(sessionPayload);
        const req = {
          body: {
            email: 'foo@bar.com',
            password: '1234567',
          },
        };
        const send = jest.fn();
        const res = {
          send,
        };
        //   @ts-ignore
        await createUserSessionHandler(req, res);
        expect(send).toHaveBeenCalledWith({
          accessToken: expect.any(String),
          refreshToken: expect.any(String),
        });
      });
    });
  });
});
