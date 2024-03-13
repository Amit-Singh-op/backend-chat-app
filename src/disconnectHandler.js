// disconnectHandler.js

// Function to handle user disconnections
function handleDisconnect(socket, users) {
  // Listen for disconnect events
  socket.on("disconnect", () => {
    // Broadcast to all clients that a user has disconnected
    socket.broadcast.emit("user-disconnected", users[socket.id]);
    // Remove the disconnected user from the users object
    delete users[socket.id];
  });
}

module.exports = handleDisconnect;
