const Discord = require("discord.js")

module.exports = {
    name: "me",
    description: "messaggio normale",
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
            .setTitle("**__๐๐ปโโ๏ธAzione RP๐๐ปโโ๏ธ__**")
            .setColor("RANDOM")
            .setDescription(`*${message.author.toString()} โช ${testo}*`)
            .setTimestamp()

            message.channel.send({ embeds: [embed] })
    
        }}