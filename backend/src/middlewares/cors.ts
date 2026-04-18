import { type CorsOptions } from 'cors';

const ALLOWED_ORIGINS = ['http://localhost:5173', 'http://localhost:5174'];

export const corsOptions: CorsOptions = {
  origin: (origin, callback) => {
    if (ALLOWED_ORIGINS.includes(origin ?? '') || !origin) {
      callback(null, true);
    } else {
      callback(new Error('Not allowed by CORS'));
    }
  },
};
