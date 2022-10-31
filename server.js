var fs = require("fs");
const replaceString = require("replace-string");
const http = require("http");
const express = require("express");
const app = express();
var path = require("path");
var botversion = "0.99.e3 [BETA]";
var prefix = "r!";
const Discord = require("discord.js");
const client = new Discord.Client();
var profanities = [];
var wildCards = [];

app.get("/", function(req, res) {
  res.sendFile(path.join(__dirname + "/index.html"));
});

app.get("/", (request, response) => {
  console.log(Date.now() + " Ping Received");
  response.sendStatus(200);
});
app.listen(process.env.PORT);
setInterval(() => {
  http.get(`http://${process.env.PROJECT_DOMAIN}.glitch.me/`);
}, 280000);

client.on("message", receivedMessage => {
  console.log("TEST");
  if (receivedMessage.author == client.user) {
    // Prevent bot from responding to its own messages
    return;
  }

  if (
    receivedMessage.content.startsWith(prefix) ||
    receivedMessage.content.startsWith("R!") ||
    receivedMessage.content.startsWith("r1") ||
    receivedMessage.content.startsWith("R1")
  ) {
    console.log("responding");
    processCommand(receivedMessage);
  }
});

function processCommand(receivedMessage) {
  let fullCommand = receivedMessage.content.substr(2); // Remove the leading exclamation mark
  let splitCommand = fullCommand.split(" "); // Split the message up in to pieces for each space
  let primaryCommand = splitCommand[0]; // The first word directly after the exclamation is the command
  let firstArgument = splitCommand[1]; // All other words are arguments/parameters/options for the command
  let lastArgument = splitCommand[2];
  console.log("Command received: " + primaryCommand);
  console.log("Arguments: " + arguments); // There may not be any arguments
}

client.login(process.env.TOKEN);
