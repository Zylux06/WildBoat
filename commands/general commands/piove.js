const Discord = require("discord.js")

module.exports = {
    name: "piove",
    description: "piove",
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
            .setTitle("__Oggi Piove...__")
            .setColor("RANDOM")
            .setDescription(`**${message.author.toString()} ha scritto il messaggio\n${testo}**`)
            .setThumbnail("https://discord.com/assets/e63b6822e54d6334126831f99fbda142.svg")
            .setImage("https://cdn.discordapp.com/attachments/935655567526068264/937436657802702898/raindrops-828954_1280.png")
            .setFooter("Previsioni del Meteo")
            .setTimestamp()
            message.channel.send({content: "@everyone", embeds: [embed]})

    }}