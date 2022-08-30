const express = require("express");
const app = express();
const port = 8080;
var morgan = require('morgan')
const http = require("http");
const WebSockets = require("./utils/soket.js");
const socketIo = require("socket.io");
var bodyParser = require('body-parser')
app.use(morgan('dev'))
// parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: false }))

// parse application/json
app.use(bodyParser.json())
app.get("/", (req, res) => {
  res.send("Hello World!");
});

app.get("*", (req, res) => {
  res.send("route Not Found");
});
app.use("/try", require('./router/newRoute.js'));

const server = http.createServer(app);
/** Create socket connection */
global.io = new socketIo.Server(server, {
  cors: {
    origin: "*",
  },
  upgrade: false,
  // transports: ['websocket'],
  perMessageDeflate: false,
});
 global.io.on("connection", WebSockets.connection);

server.listen(port, () => {
console.log(`Example app listening on port ${port}`);
});
