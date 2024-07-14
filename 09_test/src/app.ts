import express, { Request, Response } from "express";

const app = express();
app.use(express.json());

app.get("/hello", (req: Request, res: Response) => {
  res.json({ message: "Hello, World!" });
});

app.post("/echo", (req: Request, res: Response) => {
  res.json({ message: req.body.message });
});

export default app;
