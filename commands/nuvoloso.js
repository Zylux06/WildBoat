const Discord = require("discord.js")

module.exports = {
    name: "nuvoloso",
    description: "nuvole",
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
            .setTitle("Nuvoloso...")
            .setColor("RANDOM")
            .setDescription(`${message.author.toString()} ha scritto il messaggio\n${testo}`)
            .setImage("https://cdn.discordapp.com/attachments/935655567526068264/935881520596533258/template-sticker-600x600.png")
            .setImage("https://cdn.discordapp.com/attachments/935655567526068264/935881616562208838/Cielo-nuvoloso.png")
            .setFooter("Previsioni del Meteo a Los Angeles")
            .setTimestamp()
            message.channel.send({content: "@everyone", embeds: [embed]})

    }}