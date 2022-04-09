const Discord = require("discord.js")

module.exports = {
    name: "sole",
    description: "sole",
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
            .setTitle("Oggi c'è il Sole!")
            .setColor("RANDOM")
            .setDescription(`**${message.author.toString()} Ha scritto il messaggio\n${testo}**`)
            .setThumbnail("https://discord.com/assets/1038cee47a0a8313dc2d4006145fcee6.svg")
            .setImage("https://cdn.discordapp.com/attachments/931126999970361344/935877896378142770/sole-min-scaled-e1610018813683.png")
            .setFooter("Previsioni del Meteo")
            .setTimestamp()
            message.channel.send({content: "@everyone", embeds: [embed]})

    }}