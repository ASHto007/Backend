import express from "express";

const server = express();
// how to use middleware in express type 1
// server.get("/", (req, res,next) => {
//   console.log("This is the first route");
//   res.send("This is the first route");
//   next();
// });
// server.get("/first", (req, res) => {

//   res.send("This is the first middleware");
// });

// type 2
function firstMiddleware(req, res, next) {
  console.log("This is the first middleware");
  next();
}
function secondMiddleware(req, res, next) {
  console.log("This is the second middleware");
  next();
}
// 1. GET request
server.get("/first", firstMiddleware, secondMiddleware, (req, res) => {
  console.log("This is the first GET request");
  res.send("This is the first GET request");
});

server.get("/", (req, res) => {
  res.send("This is the home page");
});

// 2. POST request
server.post("/first", (req, res) => {
  res.status(201).send("This is the first POST request");
});

// 3. PUT request
server.put("/first", (req, res) => {
  res.send("This is the first PUT request");
});

// 4. DELETE request
server.delete("/first", (req, res) => {
  res.send("This is the first DELETE request");
});

server.listen(3000, () => {
  console.log("Server is running on port 3000");
});
