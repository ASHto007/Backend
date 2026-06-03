// Problem statement
// Let's create a basic Node.js HTTP server on port 8080,
// a foundational step in web service development for handling interactions between clients and servers.

// Objectives:
// Create a server using the HTTP module and store the server instance in
//  a variable named "server" within "index.js" file.
// Configure the server to listen on port 8080.
// The server should respond with the message, "Response received at port 8080."

// Notes:
// Please review the 'Guide to Upload Coding Problems' section for efficient instructions
// on submitting your uploads.
// The default code module.exports = server; provided in "index.js" is for evaluation purposes.
// Ignore this line and put your code above it

// 1. Import the library/module
// const http = require("http");
import http from "http";
const port = 8080;

//  2. creating  server
const server = http.createServer((req, res) => {
  console.log(req.url);
  res.write("Welcome to my server ");
  if (req.url == "/products") {
    return res.end("This is the products page");
  } else if (req.url == "/users") {
    return res.end("This is the users page");
  }
  res.end("Response received at port 8080");
});

//  3. listen the server
server.listen(port, () => {
  console.log(`Response received at port ${port}`);
  console.log(`http://localhost:${port}`);
});
