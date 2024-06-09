import { Request, Response, Router } from "express";

const router = Router();

// Basic route
router.get("/", (req: Request, res: Response) => {
  res.send("Hello, World!");
});

router.get("/secure/data", (req: Request, res: Response) => {
  res.send("Secure data");
});

export default router;
