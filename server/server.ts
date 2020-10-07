import Express from "express";
import HTTP from "http";
import SocketIO from "socket.io";

const app = Express();
const server = HTTP.createServer(app);
const io = SocketIO(server);

const chatMsgEvent = "chatMessage";

io.on("connection", (socket) => {
  console.warn("a user connected");
  socket.emit("a user connected");

  socket.on(chatMsgEvent, (msg) => {
    console.warn(chatMsgEvent, msg);
    socket.broadcast.emit(chatMsgEvent, msg);
  });

  socket.on("disconnect", () => {
    console.warn("user disconnected");
    socket.emit("user disconnected");
  });
});

server.listen(3000, () => {
  console.warn("Listening on *:3000");
});
