import "reflect-metadata";
import express from 'express';
import { createServer } from 'http';
import { WebSocketServer } from 'ws';
import { connectDatabase } from './database';
import patientRoute from "./routes/patientRoutes";
import studyRoutes from './routes/studyRoutes';
import path from 'path';

const app = express();
const server = createServer(app);
const wss = new WebSocketServer({ server });

app.use(express.json());
app.use('/api/patients', patientRoute);
app.use('/api/studies', studyRoutes);

// 정적 파일 제공을 위한 미들웨어 추가
app.use('/docs', express.static(path.join(__dirname, '../public/asyncapi-docs')));

wss.on('connection', (ws) => {
  console.log('New client connected');

  ws.on('message', (message) => {
    console.log('Received message:', message);
  });

  ws.on('close', () => {
    console.log('Client disconnected');
  });
});

connectDatabase().then(() => {
  server.listen(3000, () => {
    console.log('Server is running on http://localhost:3000');
  });
});

export { wss };
