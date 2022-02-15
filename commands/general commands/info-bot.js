const Discord = require("discord.js")

module.exports = {
    name: "info-bot",
    description: "per vedere le informazioni sul bot",
    execute(message, args) {

        var embed = new Discord.MessageEmbed()
            .setTitle("-📡__Informazioni Sul Bot__📡")
            .setColor("#1F51FF")
            .setDescription("**📌 Ecco tutte le informazioni riguardanti il bot!**")
            .addField('Nome del Bot', 'Los Angeles RP Bot')
            .addField('Tag Bot', 'Los Angeles RP Bot#9073')
            .addField('Data Creazione Bot', '21/1/2022')
            .addField('ID Bot', '934115799877161010')
            .addField('Versione Bot', '1.0.0')
            .addField('Versione Node', '16.10.x')
            .addField('Discord.js', '13.6.0')
            .addField('Editor', 'Visual Studio Code')
            .addField('Licenza', 'ISC')
            .addField('Bottoni Implementati', 'No')
            .addField('Comandi Totali', '27')

        message.channel.send({ embeds: [embed] })

    }
}            