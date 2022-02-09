const Discord = require("discord.js")

module.exports = {
    name: "ping",
    description: "per vedere la latenza del bot",
    execute(message, args) {

        var embed = new Discord.MessageEmbed()
        .setTitle("⭐__Ping Del Bot!__⭐")
        .setColor("RANDOM")
        .setDescription("**Ecco la latenza del bot!**")
        .addField('__Info:__', '***La latenza, indica in un sistema di elaborazione dati e o di telecomunicazioni, l intervallo di tempo che intercorre fra il momento in cui viene inviato l input - segnale al sistema e il momento in cui è disponibile il suo output. In altre parole, la latenza non è altro che una misura della velocità di risposta di un sistema.***')
        .addField("__Ping:__", `**${client.ws.ping} Ms**`)
        .setThumbnail("https://cdn.discordapp.com/attachments/935655567526068264/935881520596533258/template-sticker-600x600.png")
        .setFooter({text: "Ping Bot"})
        .setTimestamp()

    message.channel.send({embeds: [embed]})
}}