const Discord = require("discord.js")

module.exports = {
    name: "afk",
    description: "mettersi afk",
    execute(message, args) {

        message.delete()

        var embed = new Discord.MessageEmbed()
            .setColor("RANDOM")
            .setTitle("😴__Utente AFK__😴")
            .addField('Utente AFK:', `${message.author.toString()}`)
            .setFooter({text: "Utente Andato AFK"})
            .setImage(utente.user.displayAvatarURL({
                dynamic: true,
                format: "png",
                size: 512
            }))
            .setTimestamp()

            message.channel.send({embeds: [embed]})
    }}            
