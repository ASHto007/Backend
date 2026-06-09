// import express

import express from "express";

// create express server
const server = express();

//  define a route handler for the root URL
server.get("/", (req, res) => {
  res.send("Welcome to the Express server!");
});

server.listen(3000, () => {
  console.log("Server is running on http://localhost:3000");
});
