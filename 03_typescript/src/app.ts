import express from "express";
import { connectDB } from "./config/dbConfig";
import userRoutes from "./routes/userRoutes";

const app = express();

app.use(express.json());
app.use("/api/users", userRoutes);

connectDB();

export default app;
