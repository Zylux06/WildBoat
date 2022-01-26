const Discord = require("discord.js")

module.exports = {
    name: "aperto",
    description: "comunicare l'apertura dei bandi Staff!",
    execute(message, args) {
        if (!message.member.permissions.has('MANAGE_MESSAGES')) {
            return message.channel.send('Non hai il permesso');
        }
        
        var embed = new Discord.MessageEmbed()
        .setTitle("‼️ Bandi Staff Aperti ‼️") 
        .setColor("#ff0000") 
        .setAuthor("Los Angeles RP") 
        .setDescription("__**Ragazzi, i bandi staff sono aperti! Affrettatevi a compilare e inviare il modulo, inoltre vi consigliamo di compilarlo con più informazioni possibili!**__") 
        .setThumbnail("https://cdn.discordapp.com/emojis/838709960719990834.webp?size=96&quality=lossless") 
        .setFooter("Apertura Bandi Staff") 
        .setTimestamp() 
        message.channel.send({content: "@everyone", embeds: [embed]})
    
   }}