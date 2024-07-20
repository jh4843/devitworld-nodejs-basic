import express, { Request, Response } from "express";

const app = express();
const port = 3000;

app.use(express.json());

app.get("/", (req: Request, res: Response) => {
  res.send("Hello, world!");
});

app.post("/data", (req: Request, res: Response) => {
  const data = req.body;
  res.status(201).json({ message: "Data received", data });
});

if (require.main === module) {
  app.listen(port, () => {
    console.log(`Server is running at http://localhost:${port}`);
  });
}

export default app;
