import { WebSocketServer, WebSocket } from 'ws';
import { Patient } from '../entity/Patient';
import * as myType from '../types/websocket';
//import { VXvueWebSocket, VXvueWsMessage, WsCommands, WsParticipantTypes } from '../types/websocket/common';

export function handleWebSocketConnection(ws: myType.VXvueWebSocket, wss: WebSocketServer) {
  console.log('New client connected');

  ws.type = myType.WsParticipantTypes.unknown;

  ws.on('message', (message) => {
    console.log('Received message:', message.toString());

    try {
      const parsedMessage = JSON.parse(message.toString()) as myType.VXvueWsMessage;

      if (ws.type != parsedMessage.sender) {
        ws.type = parsedMessage.sender; // 예: 'device' 또는 'VSS'
        console.log('Client type set to:', ws.type);
      }

      switch (parsedMessage.command) {
        case myType.RequestCommmands.reqPing:
          ws.send(JSON.stringify({ command: 'pong' }));
          break;
        case myType.RequestCommmands.reqRegisterClient:
          ws.type = parsedMessage.sender;
          break;
        case myType.SetCommmands.setPatientInfo:
          // Deserialize into a Patient entity
          const patient = Patient.fromJSON(parsedMessage.data);

          // Example of using the entity with TypeORM
          // await patientRepository.save(patient); // If you want to save it to the DB

          // Serialize and send the patient data to other clients
          const serializedData = JSON.stringify({
            sender: parsedMessage.sender,
            command: parsedMessage.command,
            data: patient.toJson(),
          });

          wss.clients.forEach((client) => {

            const vxClient = client as myType.VXvueWebSocket;

            if (client !== ws && vxClient.readyState === WebSocket.OPEN) {
              if (vxClient.type === myType.WsParticipantTypes.display) {
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
