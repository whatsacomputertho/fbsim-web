import { describe, it, expect } from 'vitest';
import request from 'supertest';
import { app } from '../app.js';

describe('Express Server', () => {
  it('should respond with 200 on GET /', async () => {
    const res = await request(app).get('/');
    expect(res.status).toBe(200);
  });

  it('should serve static CSS files', async () => {
    const res = await request(app).get('/css/index.css');
    expect(res.status).toBe(200);
    expect(res.headers['content-type']).toContain('text/css');
  });
});
