const Discord = require("discord.js")

module.exports = {
    name: "commands",
    description: "lista dei comandi del bot Wild",
    execute(message, args) {

        message.delete()

        var embed = new Discord.MessageEmbed()
            .setTitle("📄__Commands WildBot!__<:FP_Regole:942855975566712862>")
            .setColor("RANDOM")
            .setDescription("**I comandi contrassegnati con il simbolo `★` sono solo utilizzabili dallo Staff del Server.**")
            .setThumbnail("https://cdn.discordapp.com/attachments/935655567526068264/935881520596533258/template-sticker-600x600.png")
            .addField('**w!avatar**', '*Per vedere un avatar di un utente;*')
            .addField('**w!roles**', '*Per richiedere/rimuovere determinati ruoli nel Server;*')
            .addField('**w!sup**', '*Per richiedere assistenza allo Staff del Server;*')
            .addField('**w!anon**', '*Per scrivere un messaggio anonimo in chat;*')
            .addField('**w!role**', '*Per vedere le informazioni su un determinato ruolo;*')
            .addField('**w!server-info**', '*Per ottenere le informazioni sul Server;*')
            .addField('**w!user-info**', '*Per ottenere le informazioni su qualsiasi ruolo;*')
            .addField('**w!poll**', '*Per fare un sondaggio;*')
            .addField('**w!annuncio**', '*Per poter inviare un annuncio su qualsiasi chat testuale;*')
            .addField('**w!gmail**', '*Per inviare una email a un utente!;*')
            .addField('**w!sole**', '*Per annunciare che a Los Angeles ce il sole;*')
            .addField('**w!piove**', '*Per annunciare che a Los Angeles sta per piovere;*')
            .addField('**w!nevica**', '*Per annunciare a Los Angeles inizierà a nevicare;*')
            .addField('**w!nuvoloso**', '*Per annunciare che a Los Angeles il tempo inizia a scurirsi di nuvole;*')
            .addField('**w!commands**', '*Per vedere tutta la lista completa dei comandi del bot;*')
            .addField('**w!aperto**', '*★ Per aprire i bandi Staff;*')
            .addField('**w!chiuso**', '*★ Per chiudere i bandi Staff;*')
            .addField('**w!ann**', '*★ Per annullare un Azione RP;*')
            .addField('**w!accepted**', '*★ Per accettare un bando staff;*')
            .addField('**w!denied**', '*★ Per rifiutare un bando staff;*')
            .addField('**w!ban**', '*★ Per bannare una persona dal Server Discord;*')
            .addField('**w!kick**', '*★ Per espellere una persona sul Server Discord;*')
            .addField('**w!unban**', '*★ Per sbannare una persona dal Server Discord;*')
            .addField('**w!clear**', '*★ Per cancellare dei messaggi all interno di una chat.*')
            .setFooter({text: "Commands List"})
            .setTimestamp()

            message.channel.send({ embeds: [embed] })

    }}
