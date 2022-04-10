const Discord = require("discord.js")

module.exports = {
    name: "wz",
    description: "Per mandare un messaggio via Whatsapp",
    execute(message, args) {

        var testo;
        testo = args.join(" ");
        if (!testo) {
            return message.channel.send("Inserire un Messaggio");
        }
        message.delete()

        var embed = new Discord.MessageEmbed()
            .setTitle("__**Messaggio Whatsapp**__")
            .setColor("GREEN")
            .setThumbnail("https://cdn.discordapp.com/attachments/935843968665669683/962733117792202823/unknown.png")
            .addField('Emittente:', `${message.author.toString()}`)
            .addField('Messaggio:', `${testo}`)
            .setFooter({text: "Whatsapp"})
            .setTimestamp()

            message.channel.send({ embeds: [embed] })

    }}             