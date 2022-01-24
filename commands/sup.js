const Discord = require("discord.js")

module.exports = {
    name: "sup",
    description: "per richiedere assistenza tramite comando",
    execute(message, args) {
        message.channel.send("<@925379991263395920");

    const embed = new Discord.MessageEmbed()
        .setTitle("Richiesta Assistenza") 
        .setColor("RANDOM") 
        .setAuthor("Los Angeles RP") 
        .setDescription("Hey, hai appena richiesto l'assistenza dello Staff, attendi... Ti chiediamo di non pingare lo Staff, inoltre inizia già ad esporre il problema!") 
        .setThumbnail("https://cdn.discordapp.com/icons/726687973176770560/a_04647115fc01336c6390dc1c63051b96.png?size=128") 
        .setFooter("Assistenza") 
        .setTimestamp() 
        message.channel.send({content: "everyone", embeds: [embed]})
    
   }}