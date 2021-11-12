import request from 'supertest';
import app from '../index';
it('should healthcheck successfully', async () => {
  await request(app).get('/healthcheck').expect(200);
});
it('create user route exists', async () => {
  await request(app)
    .post('/api/users')
    .send({ email: 'email@e.com', name: 'name', password: 'password' })
    .expect(200);
});
