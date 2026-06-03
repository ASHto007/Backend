// Problem statement
// Create a Node.js HTTP server to serve 'index.html' upon client requests, enabling organized web content distribution for various use cases, such as website hosting or building an HTML content API.

// Objectives

// i) Create a server using the HTTP module and store the server instance in a variable named 'server'.
// ii) Configure the server to listen on port 8080.
// iii) Serve the 'index.html' file to clients when they send requests to the server.

// Note:
// Please review the 'Guide to Upload Coding Problems' section for efficient instructions on submitting your uploads.
// The fs module can be used to read files from the file system.

const http = require("http");
const fs = require("fs");
const port = 8080;

const server = http.createServer((req, res) => {
  const data = fs.readFileSync("index.html").toString();

  res.end(data);
});

server.listen(port, () => {
  console.log(`Response received at port ${port}`);
  console.log(`http://localhost:${port}`);
});
