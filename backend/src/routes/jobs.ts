import { Router } from 'express';
import jobs from '../data/jobs.json' with { type: 'json' };

const router = Router();

router.get('/', (_req, res) => {
  return res.json({ jobs });
});

router.get('/:id', (req, res) => {
  const { id } = req.params;

  if (typeof id !== 'string') {
    return res.status(400).json({
      message: 'Invalid job ID',
    });
  }

  const job = jobs.find((job) => job.id === id);
  if (!job) {
    return res.status(404).json({
      message: 'Job not found',
    });
  }
  return res.json(job);
});

export default router;
