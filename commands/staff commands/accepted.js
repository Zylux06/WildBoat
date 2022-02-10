const Discord = require("discord.js")

module.exports = {
    name: "accepted",
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
            .setTitle("🌐__Bando Staff Accettato!__🌐")
            .setColor("RANDOM")
            .setDescription(`**✪ ${message.author.toString()} Ha scritto questo commento sull'accettazione del bando: \n${testo}**`)
            .setThumbnail("https://cdn.discordapp.com/attachments/935655567526068264/941407487414919188/accept10.png")
            .setImage("https://cdn.discordapp.com/attachments/931126999970361344/935877896378142770/sole-min-scaled-e1610018813683.png")
            .setFooter({text: "Accettazione Bando Staff"})
            .setTimestamp()

            message.channel.send({embeds: [embed] })

    }
}   