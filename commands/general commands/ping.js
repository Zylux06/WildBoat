const Discord = require("discord.js")

module.exports = {
    name: "ping",
    description: "per vedere la latenza del bot",
    execute(message, args) {

        var embed = new Discord.MessageEmbed()
        .setTitle("⭐__Ping Del Bot!__⭐")
        .setColor("RANDOM")
        .setDescription("**Ecco la latenza del bot!**")
        .addField("__Ping:__", `**${client.ws.ping} Ms**`)
        .setThumbnail("https://cdn.discordapp.com/attachments/935655567526068264/935881520596533258/template-sticker-600x600.png")
        .setFooter({text: "Ping Bot"})
        .setTimestamp()

    message.channel.send({embeds: [embed]})
}}