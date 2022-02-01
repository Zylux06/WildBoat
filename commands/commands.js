const Discord = require("discord.js")

module.exports = {
    name: "commands",
    description: "lista dei comandi del bot Wild",
    execute(message, args) {

        var embed = new Discord.MessageEmbed()
            .setTitle("Commands WildBot!")
            .setColor("#03fc20")
            .setDescription("***I comandi contrassegnati con il simbolo __★__ sono solo utilizzabili dallo Staff del Server.***")
            .setThumbnail("https://cdn.discordapp.com/attachments/935655567526068264/935881520596533258/template-sticker-600x600.png")
            .addField('**w!aperto**', '*★ Per aprire i bandi Staff;*')
            .addField('**w!chiuso**', '*★ Per chiudere i bandi Staff;*')
            .addField('**w!avatar**', '*Per vedere un avatar di un utente;*')
            .addField('**w!sup**', '*Per richiedere assistenza allo Staff del Server;*')
            .addField('**w!role**', '*Per vedere le informazioni su un determinato ruolo;*')
            .addField('**w!poll**', '*Per fare un sondaggio;*')
            .addField('**w!gmail**', '*Per inviare una email a un utente!*')
            .addField('**w!sole**', '*Per annunciare che a Los Angeles ce il sole;*')
            .addField('**w!piove**', '*Per annunciare che a Los Angeles sta per piovere;*')
            .addField('**w!nevica**', '*Per annunciare a Los Angeles inizierà a nevicare;*')
            .addField('**w!nuvoloso**', '*Per annunciare che a Los Angeles il tempo inizia a scurirsi di nuvole;*')
            .addField('**w!ban**', '*★ Per bannare una persona dal Server Discord;*')
            .addField('**w!kick**', '*★ Per espellere una persona sul Server Discord;*')
            .addField('**w!unban**', '*★ Per sbannare una persona dal Server Discord;*')
            .addField('**w!clear**', '*★ Per cancellare dei messaggi all interno di una chat;*')
            .addField('**w!commands**', '*Per vedere tutta la lista completa dei comandi del bot.*')

            message.channel.send({ embeds: [embed] })

    }}
