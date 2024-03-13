// chatMessageHandler.js

// Function to handle incoming chat messages
function handleChatMessage(socket, users) {
  // Listen for send-chat-message events
  socket.on("send-chat-message", (message) => {
    // Broadcast the received message along with the sender's name to all clients
    socket.broadcast.emit("chat-message", {
      message: message,
      name: users[socket.id],
    });
  });
}

module.exports = handleChatMessage;
