const Discord = require("discord.js")

module.exports = {
    name: "gmail",
    description: "per inviare una mail",
    execute(message, args) {

        var args = message.content.split(/\s+/);
        var testo;
        testo = args.slice(1).join(" ");
        if (!testo) {
            return message.channel.send("*Inserire un messaggio all'interno della Mail!*");
        }

        message.delete()

        var embed = new Discord.MessageEmbed()
            .setTitle("📩__**Mail Inviata!**__📩")
            .setColor("RANDOM")
            .setDescription(`*${message.author.toString()} Ha Inviato una Mail:\n${testo}*`)
            .setThumbnail("https://cdn.discordapp.com/attachments/935655567526068264/935881520596533258/template-sticker-600x600.png")
            .setFooter("Google Gmail")
            .setTimestamp()
            
            message.channel.send({ embeds: [embed] })
    }
}    