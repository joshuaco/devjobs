import jobs from '../data/jobs.json' with { type: 'json' };
import type { Request, Response } from 'express';

const getJobs = (_req: Request, res: Response) => {
  return res.json({ jobs });
};

const getJobById = (req: Request, res: Response) => {
  const { id } = req.params;

  // Invalid id format using RegExp
  if (
    !/^[0-9a-fA-F]{8}-[0-9a-fA-F]{4}-[0-9a-fA-F]{4}-[0-9a-fA-F]{4}-[0-9a-fA-F]{12}$/.test(
      id as string,
    )
  ) {
    return res.status(400).json({
      message: 'Invalid job ID',
    });
  }

  const job = jobs.find((job) => job.id === (id as string));
  if (!job) {
    return res.status(404).json({
      message: 'Job not found',
    });
  }
  return res.json(job);
};

export default { getJobs, getJobById };
