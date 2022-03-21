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
// TODO: You better put back the index.html here, else people see nothing when they go to your app
app.get("/register", (request, response) => {
  response.sendFile(__dirname + "/views/register.html");
});

//TODO: To make /login sering the login.html, you need to add a new app.get here
app.get("/login", (request, response) => {
  response.sendFile(__dirname + "/views/login.html");
});

//TODO: then do another one for register, you want want to learn a bit about GET and POST
app.get("/connection", (request, response) => {
  response.sendFile(__dirname + "/views/connection.html");
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
