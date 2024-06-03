import { Request, Response, Router } from "express";

const router = Router();

router.get("/list", (req: Request, res: Response) => {
  res.send("Product list");
});

router.post("/add", (req: Request, res: Response) => {
  res.send("Create product");
});

export default router;
