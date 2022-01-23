const Discord = require("discord.js")

module.exports = {
    name: "test",
    description: "comando di test",
    execute(message, args) {
        message.channel.send("Ciaooo");
    }
}