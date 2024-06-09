import { NextFunction, Request, Response } from "express";

// error handler middleware
const errorHandler = (
  err: Error,
  req: Request,
  res: Response,
  next: NextFunction
): void => {
  console.error(err.stack);
  res.status(500).json({ message: "Something broke!", error: err.message });
};

export default errorHandler;
