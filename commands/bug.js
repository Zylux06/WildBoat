const Discord = require("discord.js")

module.exports = {
    name: "bug",
    description: "per inviare un bug all'interno del bot",
    execute(message, args) {

    var testo;
    const embed = new Discord.MessageEmbed()
        .setTitle("Bug Rilevato!") 
        .setColor("RANDOM") 
        .setDescription(`**${message.author.toString()} ha rilevato questo bug:\n${testo}**`)
        .setThumbnail("https://cdn.discordapp.com/attachments/935655567526068264/935881520596533258/template-sticker-600x600.png")
        .setImage("https://cdn.discordapp.com/attachments/935843042391371827/936315614425907281/88-512.png")
        .setFooter("Bug")
        .setTimestamp()

        message.channels.send("936316266904436806").send({embeds: [embed]})
    
   }}