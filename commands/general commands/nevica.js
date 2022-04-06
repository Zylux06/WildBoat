const Discord = require("discord.js")

module.exports = {
    name: "nevica",
    description: "nevica",
    execute(message, args) {

        var args = message.content.split(/\s+/);
        var testo;
        testo = args.slice(1).join(" ");
        if (!testo) {
            return message.channel.send("*Inserire un Messaggio*");
        }
        if (message.content.includes("@everyone") || message.content.includes("@here")) {
            return message.channel.send("Non taggare everyone o here");
        }
        message.delete()

        var embed = new Discord.MessageEmbed()
            .setTitle("__Oggi Nevica!__")
            .setColor("RANDOM")
            .setDescription(`**${message.author.toString()} ha scritto il messaggio\n${testo}**`)
            .setThumbnail("https://cdn.discordapp.com/attachments/935843412056350730/944646273665994792/2744.png")
            .setImage("https://cdn.discordapp.com/attachments/935655567526068264/935880968793915443/neve.png")
            .setFooter("Previsioni del Meteo")
            .setTimestamp()
            message.channel.send({content: "@everyone", embeds: [embed]})

    }}