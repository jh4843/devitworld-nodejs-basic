import "reflect-metadata";
import express from 'express';
import { createServer } from 'http';
import { WebSocketServer, WebSocket } from 'ws';
import { connectDatabase } from './database';
import patientRoute from "./routes/patientRoutes";
import studyRoutes from './routes/studyRoutes';
import path from 'path';
import appRoot from 'app-root-path';

import { VXvueWebSocket } from './types/websocket/common';

import { handleWebSocketConnection } from "./services/websocketService";

import { configManager } from './utils/configManager';  // ConfigManager 가져오기

const app = express();
const server = createServer(app);
const wss = new WebSocketServer({ server });

const { ip, port } = configManager.getConfig();

app.use(express.json());
app.use('/api/patients', patientRoute);
app.use('/api/studies', studyRoutes);
app.use('/api/settings/', studyRoutes);

// 정적 파일 제공을 위한 미들웨어 추가
app.use('/docs', express.static(path.join(appRoot.path, 'public/asyncapi-docs')));
app.use('/', express.static(path.join(appRoot.path, 'public/settings')));

app.get('/settings/*', (req, res) => {
  res.sendFile(path.join(appRoot.path, 'public/settings', 'index.html'));
});


wss.on('connection', (ws: VXvueWebSocket) => {
  handleWebSocketConnection(ws, wss)
}); 

connectDatabase().then(() => {
  server.listen(port, ip, () => {
    console.log(`Server is running on http://${ip}:${port}`);
  });
});

export { wss };