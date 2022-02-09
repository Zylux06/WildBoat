const Discord = require("discord.js")

module.exports = {
    name: "ann",
    description: "per annullare un'azione RP",
    execute(message, args) {

        if (!message.member.roles.cache.has("925379991263395920")) {
            return message.channel.send("**Non puoi eseguire questo comando perchè non hai il permesso!**");
        } 

        var args = message.content.split(/\s+/);
        var testo;
        testo = args.slice(1).join(" ");
        if (!testo) {
            return message.channel.send("**Inserire un messaggio!**");
        }
        if (message.content.includes("@everyone") || message.content.includes("@here")) {
            return message.channel.send("Non taggare everyone o here");
        }

        message.delete()

        var embed = new Discord.MessageEmbed()
            .setTitle("__**📢 Azione RP Annullata 📢**__")
            .setColor("WHITE")
            .setDescription(`**${message.author.toString()} Ha Annullato Questa/e Azione/i: \n${testo}**`)
            .setThumbnail("https://cdn.discordapp.com/attachments/935655567526068264/935881520596533258/template-sticker-600x600.png")
            .setFooter({text: "Annullamento Azione/i"})
            .setTimestamp()
            
            message.channel.send({ embeds: [embed] })

    }}    