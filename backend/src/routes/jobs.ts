import { Router } from 'express';
import {
  validateNewJobBody,
  validatePartialJobBody,
  validateUUID,
} from '../middlewares/validations.ts';
import jobsController from '../controllers/jobs.ts';

const router = Router();

router.get('/', jobsController.getJobs);
router.get('/:id', validateUUID, jobsController.getJobById);
router.post('/', validateNewJobBody, jobsController.createJob);
router.put('/:id', validateUUID, validatePartialJobBody, jobsController.updateJob);
router.delete('/:id', validateUUID, jobsController.deleteJob);

export default router;
