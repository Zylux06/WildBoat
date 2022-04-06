const Discord = require("discord.js")

module.exports = {
    name: "afk",
    description: "mettersi afk",
    execute(message, args) {

        var embed = new Discord.MessageEmbed()
            .setColor("#DBFF33")
            .setTitle("😴__Utente AFK__😴")
            .setDescription(`**${message.author.toString()} è andato AFK!**`)
            .setFooter({text: "Utente Andato AFK"})
            .setTimestamp()

            message.channel.send({embeds: [embed]})
    }}            
