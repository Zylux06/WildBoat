const Discord = require("discord.js")

module.exports = {
    name: "chiuso",
    description: "comunicare la chiusura dei bandi Staff!",
    execute(message, args) {
        if (!message.member.permissions.has('MANAGE_MESSAGES')) {
            return message.channel.send('**Hey, non hai il permesso per eseguire questo determinato comando! Solo lo staff del server può farlo.**');
        }
        
        var embed = new Discord.MessageEmbed()
        .setTitle("‼️ Bandi Staff Chiusi ‼️") 
        .setColor("#ff7000") 
        .setAuthor("Los Angeles RP") 
        .setDescription("__**Mi dispiace annunciarvi che i bandi per entrare nello Staff sono attualmente chiusi.**__") 
        .setThumbnail("https://cdn.discordapp.com/emojis/838709960719990834.webp?size=96&quality=lossless") 
        .setFooter("Bandi Staff") 
        .setTimestamp() 
        message.channel.send({content: "@everyone", embeds: [embed]})
    
   }}