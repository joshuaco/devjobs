import express from 'express';
import jobsRouter from './routes/jobs.ts';
import { morgan } from './middlewares/morgan.ts';

const app = express();

app.use(morgan);
app.use(express.json());

app.get('/', (_req, res) => {
  return res.send('Hello World');
});

app.get('/health', (_req, res) => {
  return res.json({
    message: 'Server is running',
    status: 'success',
    uptime: process.uptime(),
  });
});

app.use('/api/jobs', jobsRouter);

export default app;
