import * as fs from 'fs';
import * as https from 'https';
import express from 'express';
import { WebSocketServer } from 'ws';
import userRoutes from './routes/userRoutes';

const app = express();

// SSL 인증서 로드
const privateKey = fs.readFileSync('server.key', 'utf8');
const certificate = fs.readFileSync('server.cert', 'utf8');
const credentials = { key: privateKey, cert: certificate };

// 미들웨어 및 라우터 설정
app.use(express.json());
app.use('/api/v1/users', userRoutes);

// 간단한 라우팅
app.get('/', (req, res) => {
  res.send('Hello, SSL and WebSocket with TypeScript!');
});

// HTTPS 서버 생성
const httpsServer = https.createServer(credentials, app);

// WebSocket 서버 설정
const wss = new WebSocketServer({ server: httpsServer });

wss.on('connection', (ws) => {
  console.log('New client connected');
  ws.on('message', (message) => {
    console.log('received: %s', message);
  });
  ws.send('Hello from WebSocket server');
});

// 서버 실행
httpsServer.listen(3000, () => {
  console.log('HTTPS Server is running on https://localhost:3000');
});
