import type { Request, Response, NextFunction } from 'express';

function morgan(req: Request, _res: Response, next: NextFunction) {
  const timeString = new Date().toLocaleTimeString();
  console.log(`[${timeString}] ${req.method} ${req.url}`);
  next();
}

export { morgan };
