const Discord = require("discord.js")

module.exports = {
    name: "bug",
    description: "per inviare un bug all'interno del bot",
    execute(message, args) {

        message.channel.send(`*${message.author.toString()} Il Bug è stato inviato correttamente nel canale dei bug, grazie per averci segnalato il bug, presto provvederemo a risolverlo!*`)

        var args = message.content.split(/\s+/);
        var testo;
        testo = args.slice(1).join(" ");
        if (!testo) {
            return message.channel.send("Inserire un messaggio");
        }
        if (message.content.includes("@everyone") || message.content.includes("@here")) {
            return message.channel.send("Non taggare everyone o here");
        }

        const embed = new Discord.MessageEmbed()
            .setTimestamp("Bug Rilevato!")
            .setColor("RANDOM")
            .setDescription(`***${message.author.toString()} Ha rilevato questo bug:*** **\n${testo}**`)
            .setThumbnail("https://cdn.discordapp.com/attachments/935655567526068264/935881520596533258/template-sticker-600x600.png")
            .setImage("https://cdn.discordapp.com/attachments/935843042391371827/936315614425907281/88-512.png")
            .setFooter("Bug Rilevato!")
            .setTimestamp()

            client.channels.cache.get("936316266904436806").send({embeds: [embed]})
    }
}
