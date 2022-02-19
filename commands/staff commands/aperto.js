const Discord = require("discord.js")

module.exports = {
    name: "aperto",
    description: "comunicare l'apertura dei bandi Staff!",
    execute(message, args) {

        if (!message.member.roles.cache.has("925379991263395920")) {
            return message.channel.send("**Non puoi eseguire questo comando perchè non hai il permesso!**");
        } 

       message.delete()
        
        var embed = new Discord.MessageEmbed()
        .setTitle("‼️ Bandi Staff Aperti ‼️") 
        .setColor("RANDOM") 
        .setDescription("__**Hey Ragazzi, i bandi staff sono aperti! Affrettatevi a compilare e inviare il modulo, inoltre vi consigliamo di compilarlo con più informazioni possibili!**__") 
        .setImage("https://cdn.discordapp.com/attachments/935843412056350730/944648012649619507/closing-20200214112654660.png") 
        .setFooter("Bandi Staff") 
        .setTimestamp() 
        message.channel.send({content: "@everyone", embeds: [embed]})
    
   }}