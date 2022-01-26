const Discord = require("discord.js")

module.exports = {
    name: "commands",
    description: "lista dei comandi del bot Wild",
    execute(message, args) {

        var embed = new Discord.MessageEmbed()
            .setTitle("Commands WildBot!")
            .setColor("RANDOM")
            .addField('w!aperto', 'comando utilizzabile solo dallo staff')
            .addField('w!avatar', 'Per vedere un avatar di un utente')
            .addField('w!sup', 'Per richiedere assistenza allo Staff del Server')
            .addField('w!role', 'Per vedere le informazioni su un ruolo')
            .addField('w!poll', 'Per fare un sondaggio')
            .addField('w!sole', 'Per annunciare che a Los Angeles ce il sole')
            .addField('w!piove', 'Per annunciare che a Los Angeles sta per piovere')
            .addField('w!nevica', 'Per annunciare a Los Angeles inizierà a nevicare')
            .addField('w!nuvoloso', 'Per annunciare che a Los Angeles il tempo inizia a scurirsi di nuvole')
            .addField('w!ban', 'Per bannare una persona dal Server Discord')
            .addField('w!kick', 'Per espellere una persona sul Server Discord')
            .addField('w!unban', 'Per sbannare una persona dal Server Discord')
            .addField('w!clear', 'Per cancellare i messaggi prima del comando')
            .addField('w!commands', 'Per vedere tutta la lista completa dei comandi del bot')
            message.channel.send({ embeds: [embed] })

    }}