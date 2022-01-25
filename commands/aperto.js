const Discord = require("discord.js")

module.exports = {
    name: "aperto",
    description: "comunicare l'apertura dei bandi Staff!",
    execute(message, args) {
        if (!message.member.permissions.has('MANAGE_MESSAGES')) {
            return message.channel.send('Non hai il permesso');
        }
        var embed = new Discord.MessageEmbed()
        .setTitle("Bandi Staff Aperti!") 
        .setColor("RANDOM") 
        .setAuthor("Los Angeles RP") 
        .setDescription("Hey, i bandi staff sono aperti! Ti consigliamo di compilare il modulo con più informazioni possibili.") 
        .setThumbnail("https://cdn.discordapp.com/icons/726687973176770560/a_04647115fc01336c6390dc1c63051b96.png?size=128") 
        .setFooter("Bandi Staff Aperti") 
        .setTimestamp() 
        message.channel.send({content: "@everyone", embeds: [embed]})
    
   }}