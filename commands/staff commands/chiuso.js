const Discord = require("discord.js")

module.exports = {
    name: "chiuso",
    description: "comunicare la chiusura dei bandi Staff!",
    execute(message, args) {
        if (!message.member.permissions.has('MANAGE_MESSAGES')) {
            return message.channel.send('**Hey, non hai il permesso per eseguire questo determinato comando! Solo lo staff del server può farlo.**');
        }
        message.delete()

        var embed = new Discord.MessageEmbed()
        .setTitle("‼️ Bandi Staff Chiusi ‼️") 
        .setColor("#ff7000") 
        .setAuthor("Los Angeles RP") 
        .setDescription("__**Mi dispiace annunciarvi che i bandi per entrare nello Staff sono attualmente chiusi.**__") 
        .setThumbnail("https://cdn.discordapp.com/attachments/935843412056350730/938513943700312144/200px-Gmail_icon_28202029.png") 
        .setFooter("Bandi Staff") 
        .setTimestamp() 
        message.channel.send({content: "@everyone", embeds: [embed]})
    
   }}