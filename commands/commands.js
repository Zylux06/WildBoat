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
            .addField('w!meteo', 'Dovrete scrivere il tempo della giornata, quindi come sarà la giornata')
            .addField('w!ban', 'Per bannare una persona dal Server Discord')
            .addField('w!kick', 'Per espellere una persona sul Server Discord')
            .addField('w!unban', 'Per sbannare una persona dal Server Discord')
            .addField('w!delete', 'Per cancellare i messaggi prima del comando')
            .addField('w!commands', 'Per vedere tutta la lista completa dei comandi del bot')
            message.channel.send({ embeds: [embed] })

    }}