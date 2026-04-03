import cors from 'cors';
import express from 'express';
import jobsRouter from './routes/jobs.ts';
import { morgan } from './middlewares/morgan.ts';
import { corsOptions } from './middlewares/cors.ts';

const app = express();

app.use(morgan);
app.use(express.json());
app.use(cors(corsOptions));

app.get('/', (_req, res) => {
  return res.send('Hello World');
});

app.use('/api/jobs', jobsRouter);

export default app;
