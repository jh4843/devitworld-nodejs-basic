// src/routes/userRoutes.ts 파일 생성
import { Request, Response, Router } from "express";

const router = Router();

router.get("/list", (req: Request, res: Response) => {
  res.send("User list");
});

router.post("/add", (req: Request, res: Response) => {
  res.send("Create user");
});

export default router;
