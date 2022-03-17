const unnamed = require("unnamed-js");

const server = unnamed({ port: 5000 });

server.GET("/", (request, response) => {
  response.send("Hello");
});
