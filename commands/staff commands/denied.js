const Discord = require("discord.js")

module.exports = {
    name: "denied",
    description: "per accettare un bando staff",
    execute(message, args) {

        if (!message.member.roles.cache.has("925379991263395920")) {
            return message.channel.send("**Non puoi eseguire questo comando perchè non hai il permesso!**");
        } 

        var args = message.content.split(/\s+/);
        var testo;
        testo = args.slice(1).join(" ");
        if (!testo) {
            return message.channel.send("Inserire un Messaggio!");
        }
        if (message.content.includes("@everyone") || message.content.includes("@here")) {
            return message.channel.send("Non taggare everyone o here");
        }

        var embed = new Discord.MessageEmbed()
            .setTitle("🚫__Bando Staff Rifiutato__🚫")
            .setColor("RANDOM")
            .setDescription(`**✪ ${message.author.toString()} Ha scritto questo commento sulla negazione del bando: \n${testo}**`)
            .setThumbnail("https://cdn.discordapp.com/attachments/935655567526068264/935881520596533258/template-sticker-600x600.png")
            .setImage("https://cdn.discordapp.com/attachments/941408762550419466/941409912943181834/png_denied_52828.png")
            .setFooter({text: "Negazione Bando Staff"})
            .setTimestamp()

            message.channel.send({embeds: [embed] })

    }
} 