const request = require('supertest');
const app = require('../src/app');
const userModel = require('../src/models/userModel');

describe('User API', () => {
  beforeEach(() => {
    userModel.clearUsers();
  });

  it('should create a new user', async () => {
    const res = await request(app)
      .post('/users')
      .send({ name: 'João', email: 'joao@email.com' });

    expect(res.statusCode).toBe(201);
    expect(res.body).toHaveProperty('id');
  });

  it('should get all users', async () => {
    await request(app).post('/users').send({ name: 'A', email: 'a@a.com' });
    const res = await request(app).get('/users');
    expect(res.statusCode).toBe(200);
    expect(res.body.length).toBe(1);
  });

  it('should update a user', async () => {
    const { body } = await request(app).post('/users').send({ name: 'A', email: 'a@a.com' });
    const res = await request(app).put(`/users/${body.id}`).send({ name: 'B' });
    expect(res.statusCode).toBe(200);
    expect(res.body.name).toBe('B');
  });

  it('should delete a user', async () => {
    const { body } = await request(app).post('/users').send({ name: 'C', email: 'c@c.com' });
    const res = await request(app).delete(`/users/${body.id}`);
    expect(res.statusCode).toBe(204);
  });

  it('should return 404 for non-existing user', async () => {
    const res = await request(app).get('/users/non-existing-id');
    expect(res.statusCode).toBe(404);
  });
});
