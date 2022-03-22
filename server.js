// server.js
// where your node app starts

// we've started you off with Express (https://expressjs.com/)
// but feel free to use whatever libraries or frameworks you'd like through `package.json`.
const express = require("express");

const { ExpressPeerServer } = require("peer");

const app = express();

// make all the files in 'public' available
// https://expressjs.com/en/starter/static-files.html
app.use(express.static("public"));

// https://expressjs.com/en/starter/basic-routing.html
app.get("/", (request, response) => {
  response.sendFile(__dirname + "/views/register.html");
});

app.get("/login", (request, response) => {
  response.sendFile(__dirname + "/views/login.html");
});

app.get("/register", (request, response) => {
  response.sendFile(__dirname + "/views/register.html");
});

app.get("/connection", (request, response) => {
  response.sendFile(__dirname + "/views/connection.html");
});

app.get("/changepin", (request, response) => {
  response.sendFile(__dirname + "/views/changepin.html");
});

app.get("/video-connected", (request, response) => {
  response.sendFile(__dirname + "/views/video-connected.html");
});

// listen for requests :)
const listener = app.listen(process.env.PORT, () => {
  console.log("Your app is listening on port " + listener.address().port);
});

// peerjs server
const peerServer = ExpressPeerServer(listener, {
  debug: true,
  path: "/myapp",
});

app.use("/peerjs", peerServer);
