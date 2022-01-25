const Discord = require("discord.js")

module.exports = {
    name: "meteo",
    description: "Previsioni del Meteo a Los Angeles",
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
            .setTitle("Previsioni del Meteo")
            .setColor("RANDOM")
            .setDescription(`${message.author.toString()} ha scritto il messaggio\n${testo}`)
            .setThumbnail("https://cdn.discordapp.com/attachments/917843273899466822/935478593709019156/los-angeles-dodgers-kepsar.png")
            .setFooter("Previsioni del Meteo a Los Angeles")
            .setTimestamp()
            message.channel.send({content: "@everyone", embeds: [embed]})

    }