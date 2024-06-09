import { NextFunction, Request, Response } from "express";

// Request logger middleware
const requestLogger = (
  req: Request,
  res: Response,
  next: NextFunction
): void => {
  console.log(`[${new Date().toISOString()}] ${req.method} ${req.url}`);
  next();
};

export default requestLogger;
