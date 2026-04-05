import { describe, it, expect } from 'vitest';
import { sampleJob } from '../mocks/jobs.ts';
import request from 'supertest';
import app from '../../src/server.ts';

describe('GET /api/jobs', () => {
  it('returns a status 200 and a array of jobs', async () => {
    const response = await request(app).get('/api/jobs');

    expect(response.status).toBe(200);
    expect(response.body).toHaveProperty('data');
    expect(response.body.data).toBeInstanceOf(Array);
  });

  it('filters jobs by search term', async () => {
    const response = await request(app).get('/api/jobs?search=analista');

    expect(response.status).toBe(200);
    expect(response.body).toHaveProperty('data');
    expect(response.body.data.length).toBeGreaterThan(0);
  });
});

describe('GET /api/jobs/:id', () => {
  it('returns status 400 for an invalid UUID', async () => {
    const response = await request(app).get('/api/jobs/invalid-uuid');

    expect(response.status).toBe(400);
    expect(response.body).toHaveProperty('message');
    expect(response.body.message).toBe('Invalid job ID');
  });

  it('returns status 404 for a non-existent job', async () => {
    const response = await request(app).get(
      '/api/jobs/123e4567-e89b-12d3-a456-426614174000'
    );

    expect(response.status).toBe(404);
    expect(response.body).toHaveProperty('message');
    expect(response.body.message).toBe('Job not found');
  });
});

describe('POST /api/jobs', () => {
  it('creates a new job and returns 201', async () => {
    const response = await request(app).post('/api/jobs').send(sampleJob);
    expect(response.status).toBe(201);
    expect(response.body).toHaveProperty('id');
    expect(response.body.title).toBe(sampleJob.title);
  });
});
