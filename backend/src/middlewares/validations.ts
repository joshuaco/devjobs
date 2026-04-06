import type { Request, Response, NextFunction } from 'express';
import { UUID_REGEX } from '../utils/constants.ts';
import { validateNewJob, validatePartialJob } from '../schemas/job.ts';

export const validateUUID = (req: Request, res: Response, next: NextFunction) => {
  const { id } = req.params;

  if (!UUID_REGEX.test(id as string)) {
    return res.status(400).json({ message: 'Invalid job ID' });
  }

  next();
};

export const validateNewJobBody = (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  const result = validateNewJob(req.body);

  if (!result.success) {
    const errors = result.error.issues.map((issue) => ({
      field: issue.path.join('.'),
      message: issue.message,
    }));

    return res.status(400).json({ message: 'Invalid job data', errors });
  }

  req.body = result.data;
  next();
};

export const validatePartialJobBody = (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  const result = validatePartialJob(req.body);

  if (!result.success) {
    const errors = result.error.issues.map((issue) => ({
      field: issue.path.join('.'),
      message: issue.message,
    }));

    return res.status(400).json({ message: 'Invalid job data', errors });
  }

  req.body = result.data;
  next();
};
