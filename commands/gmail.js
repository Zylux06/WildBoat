const Discord = require("discord.js")

module.exports = {
    name: "gmail",
    description: "inviare una mail",
    execute(message, args) {

         var embed = new Discord.MessageEmbed()
             .setTitle("Gmail!")
             .setColor("RANDOM")
             .setAuthor