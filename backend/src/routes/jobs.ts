import { Router } from 'express';
import jobsController from '../controllers/jobs.ts';

const router = Router();

router.get('/', jobsController.getJobs);
router.get('/:id', jobsController.getJobById);
router.post('/', jobsController.createJob);
router.put('/:id', jobsController.updateJob);
router.delete('/:id', jobsController.deleteJob);

export default router;
