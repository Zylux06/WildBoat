const Discord = require("discord.js")

module.exports = {
    name: "say",
    description: "per far scrivere un messaggio al bot",
    execute(message, args) {

        var args = message.content.split(/\s+/);
        var testo;
        testo = args.slice(1).join(" ");
        if (!testo) {
            return message.channel.send("Inserire un messaggio!");
        }
        if (message.content.includes("@everyone") || message.content.includes("@here")) {
            return message.channel.send("Non taggare everyone o here");
        }
        message.delete()

        // Messaggio con Embed
        var embed = new Discord.MessageEmbed()
            .setColor("RANDOM")
            .setTitle("Say")
            .setDescription(testo)
            .setThumbnail("https://cdn.discordapp.com/attachments/935655567526068264/935881520596533258/template-sticker-600x600.png")
            .setTimestamp()

        message.channel.send({embeds: [embed]})
    }
}