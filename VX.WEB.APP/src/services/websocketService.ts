import { WebSocketServer, WebSocket } from 'ws';
import { Patient } from '../entity/Patient';
import { VXvueWebSocket, VXvueWsMessage, WsCommands, WsParticipantTypes } from '../types/websocketTypes';

export function handleWebSocketConnection(ws: VXvueWebSocket, wss: WebSocketServer) {
  console.log('New client connected');

  ws.type = WsParticipantTypes.unknown;

  ws.on('message', (message) => {
    console.log('Received message:', message.toString());

    try {
      const parsedMessage = JSON.parse(message.toString()) as VXvueWsMessage;

      if (ws.type != parsedMessage.sender) {
        ws.type = parsedMessage.sender; // 예: 'device' 또는 'VSS'
        console.log('Client type set to:', ws.type);
      }

      switch (parsedMessage.command) {
        case WsCommands.ping:
          ws.send(JSON.stringify({ command: 'pong' }));
          break;
        case WsCommands.registerClient:
          ws.type = parsedMessage.sender;
          break;
        case WsCommands.setPatientInfo:
          // Deserialize into a Patient entity
          const patient = Patient.fromJSON(parsedMessage.data);

          // Example of using the entity with TypeORM
          // await patientRepository.save(patient); // If you want to save it to the DB

          // Serialize and send the patient data to other clients
          const serializedData = JSON.stringify({
            sender: parsedMessage.sender,
            command: parsedMessage.command,
            data: patient.toJSON(),
          });

          wss.clients.forEach((client) => {

            const vxClient = client as VXvueWebSocket;

            if (client !== ws && vxClient.readyState === WebSocket.OPEN) {
              if (vxClient.type === WsParticipantTypes.display) {
                client.send(serializedData);
              }
            }
          });
          break;
        default:
          break;
      }
    } catch (error) {
      console.error('Error parsing JSON:', error);
    }
  });

  ws.on('close', () => {
    console.log('Client disconnected');
  });

  ws.on('error', (error) => {
    console.error('WebSocket error:', error);
  });
}
