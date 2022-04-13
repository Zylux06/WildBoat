const Discord = require("discord.js")

module.exports = {
    name: "infraction",
    description: "per warnare un utente",
    execute(message, args) {

        if (!message.member.permissions.has('MANAGE_MESSAGE')) {
            return message.channel.send('**Hey, non hai il permesso per fare questo comando! Ti serve il `MANAGE_MESSAGE` (Gestire i messaggi).**');
        }
        
        var testo;
        testo = testo = args.slice(2, -2).join(" ");
        if (!testo) {
            return message.channel.send("Inserire un Messaggio");
        }
        
        message.delete()
        
        const UtenteWarnato = message.mentions.members.first()
        const NumeroWarn = args[1]
        const ScadenzaWarn = args.slice(args.length - 2).join(" ")

        var embed = new Discord.MessageEmbed()
            .setTitle("⚠__Infrazione!__⚠")
            .setColor("RED")
            .addField('Moderatore:', `${message.author.toString()}`)
            .addField('Warnato:', `${UtenteWarnato}`)
            .addField('Warn/Ban', `${NumeroWarn}`)
            .addField('Motivazione:', `${testo}`)
            .addField('Scadenza', `${ScadenzaWarn}`)
            .setFooter({text: "Utente Warnato"})
            .setTimestamp()

            message.channel.send({ embeds: [embed] })

    }
}                

