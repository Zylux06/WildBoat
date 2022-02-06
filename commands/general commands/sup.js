const Discord = require("discord.js")

module.exports = {
    name: "sup",
    description: "per richiedere assistenza tramite comando",
    execute(message, args) {
        message.channel.send("<@&925379991263395920>");

        message.delete()

    const embed = new Discord.MessageEmbed()
        .setTitle("Richiesta Assistenza!") 
        .setColor("#fc6b03") 
        .setAuthor("Los Angeles RP") 
        .setDescription("**Hey, hai appena richiesto l'assistenza dello Staff, attendi... Ti chiediamo di non pingare lo Staff, inoltre inizia già ad esporre il problema!**") 
        .setThumbnail("https://cdn.discordapp.com/attachments/935655567526068264/935881520596533258/template-sticker-600x600.png") 
        .setFooter("Assistenza") 
        .setTimestamp() 
        
        message.channel.send({ embeds: [embed] })
    
   }}