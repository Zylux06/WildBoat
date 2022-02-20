const Discord = require("discord.js")

module.exports = {
    name: "chiuso",
    description: "comunicare la chiusura dei bandi Staff!",
    execute(message, args) {

        if (!message.member.permissions.has('MANAGE_CHANNELS')) {
            return message.channel.send('*Hey, non puoi eseguire questo comando perchè non hai il permesso!*');
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