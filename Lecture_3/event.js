const http = require("http");

const server = http.createServer((req, res) => {
  if (req.method == "POST") {
    let body = "";
    req.on("data", (chunk) => {
      body += chunk.toString();
    });
    req.on("end", () => {
      console.log("Received data:", body);
      res.end("Data received");
    });
  } else {
    res.end("Hello NodeJS");
  }
});

server.listen(3000, () => {
  console.log("Server is running on port 3000");
});
