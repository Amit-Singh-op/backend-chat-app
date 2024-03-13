// newUserHandler.js

// Function to handle new user connections
function handleNewUser(socket, users) {
  // Listen for new-user events
  socket.on("new-user", (name) => {
    // Store the new user's name with their socket id
    users[socket.id] = name;
    // Broadcast to all clients that a new user has connected
    socket.broadcast.emit("user-connected", name);
  });
}

module.exports = handleNewUser;
