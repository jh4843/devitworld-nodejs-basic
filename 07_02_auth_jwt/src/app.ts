import bodyParser from "body-parser";
import express from "express";
import authRoutes from "./routes/auth";

const app = express();
const PORT = 3000;

app.use(bodyParser.json());

app.use("/auth", authRoutes);

app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
