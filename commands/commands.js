const Discord = require("discord.js")

module.exports = {
    name: "commands",
    description: "lista dei comandi del bot Wild",
    execute(message, args) {

        var embed = new Discord.MessageEmbed()
            .setTitle("Commands WildBot!")
            .setColor("RANDOM")
            .addField('w!aperto', 'comando utilizzabile solo dallo staff')
            message.channel.send({ embeds: [embed] })

    }}