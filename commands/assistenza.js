const Discord = require("discord.js")

module.exports = {
    name: "assistenza",
    description: "comando per l'assistenza",
    execute(message, args) {
        message.channel.send("we");
    }
}