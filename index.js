// index.js
const dotenv = require("dotenv");
const Server = require("./src/Server");

// Load environment variables from .env file
dotenv.config();

// Set the port for the server to listen on (default to 3000 if not specified)
const port = process.env.PORT || 3000;

// Create a new instance of the Server class
const server = new Server(port);

// Start the server
server.start();
