import WebSocket from "ws";

// WebSocket 클라이언트 생성
const socket = new WebSocket("ws://localhost:8080");

socket.on("open", () => {
  console.log("WebSocket 연결이 열렸습니다.");
  socket.send("Hello Server!");
});

socket.on("message", (data: WebSocket.Data) => {
  console.log("서버로부터 메시지를 받았습니다:", data.toString());
});

socket.on("close", () => {
  console.log("WebSocket 연결이 닫혔습니다.");
});

socket.on("error", (error) => {
  console.error("WebSocket 오류:", error);
});
