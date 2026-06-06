const http = require("http");

const server = http.createServer((req, res) => {
  res.write("This response is coming from the server");
  console.log("Request URL:", req.url);
  if (req.url === "/first") {
    return res.end("This is the response for the first route");
  } 
    res.end("This is default response");
  
});
server.listen(3001, () => {
  console.log("Server is running on port 3001");
});
