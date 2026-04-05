import { JobSchema } from '../schemas/job.ts';
import type { z } from 'zod';

export type JobQueryParams = {
  search?: string;
  experience?: string;
  technology?: string;
  location?: string;
  limit: string;
  offset: string;
};

export type Job = z.infer<typeof JobSchema>;

export type JobsResponse = {
  data: Job[];
  total: number;
};
