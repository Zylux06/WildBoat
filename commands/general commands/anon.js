const Discord = require("discord.js")

module.exports = {
    name: "anon",
    description: "messaggio anonimo",
    execute(message, args) {

        var args = message.content.split(/\s+/);
        var testo;
        testo = args.slice(1).join(" ");
        if (!testo) {
            return message.channel.send("Inserire un Messaggio");
        }
        if (message.content.includes("@everyone") || message.content.includes("@here")) {
            return message.channel.send("Non taggare everyone o here");
        }
        message.delete()

        var embed = new Discord.MessageEmbed()
            .setTitle("__Anon Message!__")
            .setColor("BLACK")
            .setDescription(`**\n${testo}**`)
            .setThumbnail("https://cdn.discordapp.com/attachments/935843412056350730/940281402816098324/anonimo.png")
            .setFooter({text: "Anon - Unencrypted Message"})
            .setTimestamp()

            message.channel.send({ embeds: [embed] })

        }
}        