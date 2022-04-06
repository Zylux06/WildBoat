const Discord = require("discord.js")

module.exports = {
    name: "commands",
    description: "lista dei comandi del bot Wild",
    execute(message, args) {

        message.delete()

        var embed = new Discord.MessageEmbed()
            .setTitle("📄__Commands Wild RP Bot!__📄")
            .setColor("RANDOM")
            .setDescription("**I comandi contrassegnati con il simbolo `★` sono solo utilizzabili dallo Staff del Server.**")
            .setThumbnail("https://cdn.discordapp.com/attachments/935843412056350730/944645915459866725/check_list_visto_di_conformita.png")
            .addField('**w!sup**', '*Per richiedere assistenza allo Staff del Server;*')
            .addField('**w!anon**', '*Per scrivere un messaggio anonimo in chat;*')
            .addField('**w!role**', '*Per vedere le informazioni su un determinato ruolo;*')
            .addField('**w!info-bot**', '*Per vedere delle informazioni sul bot;*')
            .addField('**w!server-info**', '*Per ottenere le informazioni sul Server;*')
            .addField('**w!user-info**', '*Per ottenere le informazioni su qualsiasi ruolo;*')
            .addField('**w!afk**', '*Per andare a AFK;*')
            .addField('**w!poll**', '*Per fare un sondaggio;*')
            .addField('**w!news**', '*★ Per mandare una notizia/news;*')
            .addField('**w!annuncio**', '*Per poter inviare un annuncio su qualsiasi chat testuale;*')
            .addField('**w!gmail**', '*Per inviare una email a un utente!;*')
            .addField('**w!sole**', '*Per annunciare che a Los Angeles ce il sole;*')
            .addField('**w!piove**', '*Per annunciare che a Los Angeles sta per piovere;*')
            .addField('**w!nevica**', '*Per annunciare a Los Angeles inizierà a nevicare;*')
            .addField('**w!nuvoloso**', '*Per annunciare che a Los Angeles il tempo inizia a scurirsi di nuvole;*')
            .addField('**w!commands**', '*Per vedere tutta la lista completa dei comandi del bot;*')
            .addField('**w!infraction**', '*★ Per warnare un utente;*')
            .addField('**w!aperto**', '*★ Per aprire i bandi Staff;*')
            .addField('**w!chiuso**', '*★ Per chiudere i bandi Staff;*')
            .addField('**w!ann**', '*★ Per annullare un Azione RP;*')
            .addField('**w!ban**', '*★ Per bannare una persona dal Server Discord;*')
            .addField('**w!kick**', '*★ Per espellere una persona sul Server Discord;*')
            .addField('**w!un-ban**', '*★ Per sbannare una persona dal Server Discord;*')
            .addField('**w!clear**', '*★ Per cancellare dei messaggi all interno di una chat.*')
            .setFooter({text: "Commands List"})
            .setTimestamp()

            message.channel.send({ embeds: [embed] })

    }}
