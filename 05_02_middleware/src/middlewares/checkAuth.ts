import { NextFunction, Request, Response } from "express";

// Auth middleware
const checkAuth = (req: Request, res: Response, next: NextFunction): void => {
  const authHeader = req.headers.authorization;

  if (authHeader && authHeader.startsWith("Devitworld ")) {
    const token = authHeader.split(" ")[1];

    // Logic to validate token
    if (token === "your_valid_token") {
      return next();
    }
  }

  res.status(401).json({ message: "Unauthorized" });
};

export default checkAuth;
