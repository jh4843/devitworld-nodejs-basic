import { WebSocketServer } from 'ws';

export const broadcast = (wss: WebSocketServer, data: any) => {
  wss.clients.forEach((client) => {
    if (client.readyState === client.OPEN) {
      let res = client.send(JSON.stringify(data));
      console.log("broadcast res: ", res);
    }
  });
};