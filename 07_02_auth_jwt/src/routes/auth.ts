import bcrypt from "bcryptjs";
import express from "express";
import { authMiddleware } from "../middleware/authMiddleware";
import { generateToken } from "../utils/jwt";

const router = express.Router();
const users: { [key: string]: string } = {}; // In-memory user storage (for demo purposes)

// 기본 사용자 등록
const registerDefaultUsers = async () => {
  const defaultUsers = [
    { username: "user1", password: "password1" },
    { username: "user2", password: "password2" },
    { username: "user3", password: "password3" },
  ];

  for (const user of defaultUsers) {
    const hashedPassword = await bcrypt.hash(user.password, 10);
    users[user.username] = hashedPassword;
  }
};

// 서버 시작 시 기본 사용자 등록
registerDefaultUsers();

router.post("/register", async (req, res) => {
  const { username, password } = req.body;
  const hashedPassword = await bcrypt.hash(password, 10);
  users[username] = hashedPassword;
  res.status(201).send("User registered");

  console.log("registered user: ", username, password, hashedPassword);
});

router.post("/login", async (req, res) => {
  const { username, password } = req.body;
  const user = users[username];

  // log username and password
  console.log(req.body);

  if (!user || !(await bcrypt.compare(password, user))) {
    return res.status(401).send("Invalid credentials");
  }

  const token = generateToken({ username });
  res.json({ token });
});

router.get("/protected", authMiddleware, (req, res) => {
  res.send("This is a protected route");
});

export default router;
