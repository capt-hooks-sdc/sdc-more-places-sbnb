const app = require("../server");
const supertest = require("supertest");
const { internet } = require("faker");
const request = supertest(app);

it('Gets the API endpoint', async done => {
  const res = await request.get('/api/places');
  expect(response.status).toBe(200);
  done();
});