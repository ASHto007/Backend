const axios = require("axios");
const server = axios.get("https://api.codingninjas.com/api/v3/event_tags");

server.then((res) => {
  console.log(res.data);
});


