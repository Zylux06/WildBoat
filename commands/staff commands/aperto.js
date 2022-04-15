const Discord = require("discord.js")

module.exports = {
    name: "aperto",
    description: "comunicare l'apertura dei bandi Staff!",
    execute(message, args) {

        if (!message.member.permissions.has('MANAGE_MESSAGES')) {
            return message.channel.send('**Hey, non hai il permesso per fare questo comando! Ti serve il `MANAGE_MESSAGES` (Gestire i messaggi).**');
        }

       message.delete()
        
        var embed = new Discord.MessageEmbed()
        .setTitle("‼Bandi Staff Aperti") 
        .setColor("RANDOM") 
        .setDescription("__**<:Annuncio_Wild:964447174219956254> Hey Ragazzi, i bandi staff sono aperti! Affrettatevi a compilare e inviare il modulo, inoltre vi consigliamo di compilarlo con più informazioni possibili!**__") 
        .setImage("https://cdn.discordapp.com/attachments/935843412056350730/944648012649619507/closing-20200214112654660.png") 
        .setFooter("Bandi Staff") 
        .setTimestamp() 
        message.channel.send({content: "@everyone", embeds: [embed]})
    
   }}