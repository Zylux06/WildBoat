const Discord = require("discord.js")

module.exports = {
    name: "carica",
    description: "per prendersi in carica un Ticket",
    execute(message, args) {

        message.delete()

    var embed = new Discord.MessageEmbed()
        .setTitle("__📩**Ticket Preso In Carica**📩__")
        .setColor("RANDOM")
        .setThumbnail("https://cdn.discordapp.com/attachments/935843968665669683/963122530833539142/unknown.png")
        .setDescription(`*Il Ticket è stato preso in carica da ${message.author.toString()}!*`)
        .setFooter({text: "Ticket"})
        .setTimestamp()
        
        message.channel.send({ embeds: [embed] })
    }}