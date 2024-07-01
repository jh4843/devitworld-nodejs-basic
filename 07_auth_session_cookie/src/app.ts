import bodyParser from "body-parser";
import cookieParser from "cookie-parser";
import express, { Request, Response } from "express";
import session from "express-session";

const app = express();
const PORT = 50001;

// 미들웨어 설정
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
app.use(cookieParser());
app.use(
  session({
    secret: "your_secret_key",
    resave: false,
    saveUninitialized: true,
    cookie: { secure: false }, // HTTPS를 사용하는 경우 true로 설정
  })
);

interface User {
  id: number;
  name: string;
}

const fakeUser: User = { id: 1, name: "John Doe" };

// 로그인 엔드포인트
app.post("/login", (req: Request, res: Response) => {
  const { username, password } = req.body;

  // 실제로는 데이터베이스에서 사용자 인증을 수행해야 합니다.
  if (username === "admin" && password === "password") {
    req.session.user = fakeUser;
    res.send("Login Success");
  } else {
    res.status(401).send("로그인 실패");
  }
});

// 프로필 엔드포인트
app.get("/profile", (req: Request, res: Response) => {
  if (req.session.user) {
    res.send(`Hi, ${req.session.user.name}`);
  } else {
    res.status(401).send("Need to login");
  }
});

// 로그아웃 엔드포인트
app.post("/logout", (req: Request, res: Response) => {
  req.session.destroy((err) => {
    if (err) {
      return res.status(500).send("Failed to logout");
    }
    res.send("Successfully logged out");
  });
});

app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
