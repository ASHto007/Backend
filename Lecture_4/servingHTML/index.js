import express from "express";
import path from "path";

const server = express();

server.get("/", (req, res) => {
  return res.send("HTML Server");
});

// my static files are in the public folder which can accessed directly by the browser
server.use(express.static("./public"));

server.listen(3000, () => {
  console.log("Server is running on http://localhost:3000");
});
