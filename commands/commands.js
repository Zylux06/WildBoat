const Discord = require("discord.js")

module.exports = {
    name: "commands",
    description: "lista dei comandi del bot Wild",
    execute(message, args) {

        var embed = new Discord.MessageEmbed()
            .setTitle("Commands WildBot!")
            .setColor("RANDOM")
            .addFields("w!aperto = Per aprire i bandi Staff, comando utilizzabile solo dallo Staff del Server.")
            message.channel.send({ embeds: [embed] })

    }}