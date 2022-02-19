const Discord = require("discord.js")

module.exports = {
    name: "chiuso",
    description: "comunicare la chiusura dei bandi Staff!",
    execute(message, args) {

        if (!message.member.roles.cache.has("925379991263395920")) {
            return message.channel.send("**Non puoi eseguire questo comando perchè non hai il permesso!**");
        } 

        message.delete()

        var embed = new Discord.MessageEmbed()
        .setTitle("‼️ Bandi Staff Chiusi ‼️") 
        .setColor("RANDOM") 
        .setDescription("__**Mi dispiace annunciarvi che i bandi per entrare nello Staff sono attualmente chiusi.**__") 
        .setThumbnail("https://cdn.discordapp.com/attachments/935843412056350730/944648012649619507/closing-20200214112654660.png") 
        .setFooter("Bandi Staff") 
        .setTimestamp() 
        message.channel.send({content: "@everyone", embeds: [embed]})
    
   }}