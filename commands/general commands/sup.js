const Discord = require("discord.js")

module.exports = {
    name: "sup",
    description: "per richiedere assistenza tramite comando",
    execute(message, args) {

        message.delete()

    const embed = new Discord.MessageEmbed()
        .setTitle("Richiesta Assistenza!") 
        .setColor("#fc6b03") 
        .setDescription(`**Hey ${message.author.toString()}, hai appena richiesto l'assistenza dello Staff, attendi... Ti chiediamo di non pingare lo Staff, inoltre inizia già ad esporre il problema!**`) 
        .setThumbnail("https://cdn.discordapp.com/attachments/935843968665669683/943921059831377940/1200px-Circle-icons-tools.png") 
        .setFooter("Assistenza Richiesta!") 
        .setTimestamp() 
        
        message.channel.send({ embeds: [embed] })
    
   }}