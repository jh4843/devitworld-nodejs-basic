import { WebSocket, WebSocketServer } from "ws";

// WebSocket 서버 생성
const wss = new WebSocketServer({ port: 8080 });

wss.on("connection", (ws: WebSocket) => {
  console.log("클라이언트가 연결되었습니다.");

  ws.on("message", (message: string) => {
    console.log("클라이언트로부터 메시지를 받았습니다:", message.toString());
    ws.send("Hello Client!");
  });

  ws.on("close", () => {
    console.log("클라이언트 연결이 닫혔습니다.");
  });

  ws.on("error", (error) => {
    console.error("WebSocket 오류:", error);
  });
});

console.log("WebSocket 서버가 포트 8080에서 실행 중입니다.");
