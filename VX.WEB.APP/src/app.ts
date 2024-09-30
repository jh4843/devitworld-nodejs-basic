import "reflect-metadata";
import express from 'express';
import { createServer } from 'http';
import { WebSocketServer, WebSocket } from 'ws';
import { connectDatabase } from './database';
import patientRoute from "./routes/patientRoutes";
import studyRoutes from './routes/studyRoutes';
import path from 'path';
import appRoot from 'app-root-path';

import { VXvueWebSocket } from './types/websocketTypes';
import { Patient } from './entity/Patient';

import { handleWebSocketConnection } from "./services/websocketService";


const app = express();
const server = createServer(app);
const wss = new WebSocketServer({ server });

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
  server.listen(3000, () => {
    console.log('Server is running on http://localhost:3000');
  });
});

export { wss };