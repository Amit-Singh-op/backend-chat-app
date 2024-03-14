// Server.js
const { Server: SocketServer } = require("socket.io");
const handleNewUser = require("./newUserHandler");
const handleDisconnect = require("./disconnectHandler");
const handleChatMessage = require("./chatMessageHandler");

//Server class responsible for initializing and managing the Socket.IO server

class Server {
  constructor(port) {
    // Initialize the server with the provided port or default to 3000
    this.port = port;

    // Object to store user data
    this.users = {};

    // Create a new Socket.IO server instance
    this.server = new SocketServer({ cors: { origin: "*" } });

    this.server.listen(3000);
  }

  start() {
    // Listen for connection events
    this.server.on("connection", (socket) => {
      // Call handlers for different events
      handleNewUser(socket, this.users);
      handleChatMessage(socket, this.users);
      handleDisconnect(socket, this.users);
    });
  }
}

module.exports = Server;
