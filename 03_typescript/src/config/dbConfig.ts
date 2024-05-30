import dotenv from "dotenv";
import mongoose from "mongoose";

dotenv.config(); // 환경 변수 로드

console.log(process.env.MONGO_URI); // 환경 변수 출력

export const connectDB = async () => {
  try {
    await mongoose.connect(process.env.MONGO_URI!);
    console.log("MongoDB connected");
  } catch (error) {
    console.error("Error connecting to MongoDB", error);
    process.exit(1);
  }
};
