const Discord = require("discord.js")

module.exports = {
    name: "annuncio",
    description: "per mandare qualsiasi annuncio",
    execute(message, args) {
        
        const Discord = require("discord.js")

        var args = message.content.split(/\s+/);
        var testo;
        testo = args.slice(1).join(" ");
        if (!testo) {
            return message.channel.send("Inserire un Messaggio");
        }

        message.delete()

        var embed = new Discord.MessageEmbed()
           .setTitle("🌴__**Annuncio!**__🌴")
           .setColor("RANDOM")
           .setDescription(`***${message.author.toString()} ➛ Ha Mandato Questo Annuncio: \n${testo}***`)
           .setThumbnail("https://cdn.discordapp.com/attachments/935655567526068264/935881520596533258/template-sticker-600x600.png")
           .setImage("https://cdn.discordapp.com/attachments/935843412056350730/939567617847492628/How-to-Announce-your-Engagement.png")
           .setFooter("Annuncio Pubblicato")
           .setTimestamp()

           message.channel.send({ embeds: [embed] })

    }}          