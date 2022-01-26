const Discord = require("discord.js")

module.exports = {
    name: "blacklist",
    description: "per far vedere chi ha copiato il L.A.",
    execute(message, args) {
        message.channel.send("<@&925379991263395920>");

    const embed = new Discord.MessageEmbed()
        .setTitle("BlackList Utenti!") 
        .setColor("#2403fc") 
        .setDescription("__**Ecco qui tutta la lista degli utenti che hanno copiato gran parte del server!**__") 
        .addField('**Leonardo™#6322**', '**729058878615978094**')
        .addField('**sonic493maiorano#5361**', '**920435232757387344**')
        .addField('**Giulia Speranza#1410**', '**932060853732266035**')
        .addField('**gabriele#1861**', '**566336926420959247**')
        .setThumbnail("https://cdn.discordapp.com/emojis/891315683231674378.webp?size=96&quality=lossless") 
        .setFooter("BlackList Utenti Discord") 
        .setTimestamp() 
        
        message.channel.send({ embeds: [embed] })
    
   }}