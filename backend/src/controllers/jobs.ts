import type { Request, Response } from 'express';
import type { JobQueryParams } from '../types/jobs.ts';
import jobModel from '../models/job.ts';

const getJobs = (req: Request, res: Response) => {
  const params = req.query as JobQueryParams;
  const result = jobModel.getJobs(params);

  return res.json(result);
};

const getJobById = (req: Request, res: Response) => {
  const { id } = req.params;

  if (
    !/^[0-9a-fA-F]{8}-[0-9a-fA-F]{4}-[0-9a-fA-F]{4}-[0-9a-fA-F]{4}-[0-9a-fA-F]{12}$/.test(
      id as string
    )
  ) {
    return res.status(400).json({ message: 'Invalid job ID' });
  }

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
  const jobData = req.body;
  const updatedJob = jobModel.updateJob(id as string, jobData);
  return res.status(200).json(updatedJob);
};

const deleteJob = (req: Request, res: Response) => {
  const { id } = req.params;
  const deletedJob = jobModel.deleteJob(id as string);

  if (!deletedJob) {
    return res.status(404).json({ message: 'Job not found' });
  }

  return res.status(204).json({ message: 'Job deleted successfully', deletedJob });
};

export default { getJobs, getJobById, createJob, updateJob, deleteJob };
