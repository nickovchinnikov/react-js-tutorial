import Express from "express";
import HTTP from "http";
import SocketIO from "socket.io";

const app = Express();
const server = HTTP.createServer(app);
const io = SocketIO(server);

io.on("connection", (socket) => {
  console.warn("a user connected");
  socket.on("chat message", (msg) => {
    io.emit("chat message", msg);
  });
  socket.on("disconnect", () => {
    console.warn("user disconnected");
  });
});

server.listen(3000, () => {
  console.warn("Listening on *:3000");
});
