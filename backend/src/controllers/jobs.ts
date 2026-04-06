import jobModel from '../models/job.ts';
import type { Request, Response } from 'express';
import type { JobQueryParams } from '../types/jobs.ts';

const getJobs = (req: Request, res: Response) => {
  const params = req.query as JobQueryParams;
  const result = jobModel.getJobs(params);

  return res.json(result);
};

const getJobById = (req: Request, res: Response) => {
  const { id } = req.params;
  const job = jobModel.getJobById(id as string);

  if (!job) {
    return res.status(404).json({ message: 'Job not found' });
  }

  return res.json(job);
};

const createJob = (req: Request, res: Response) => {
  const newJob = jobModel.createJob(req.body);
  return res.status(201).json(newJob);
};

const updateJob = (req: Request, res: Response) => {
  const { id } = req.params;
  const updatedJob = jobModel.updateJob(id as string, req.body);

  if (!updatedJob) {
    return res.status(404).json({ message: 'Job not found' });
  }

  return res.status(200).json(updatedJob);
};

const deleteJob = (req: Request, res: Response) => {
  const { id } = req.params;
  const deletedJob = jobModel.deleteJob(id as string);

  if (!deletedJob) {
    return res.status(404).json({ message: 'Job not found' });
  }

  return res.status(204).end();
};

export default { getJobs, getJobById, createJob, updateJob, deleteJob };
