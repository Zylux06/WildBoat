const Discord = require("discord.js")

module.exports = {
    name: "infraction",
    description: "per warnare un utente",
    execute(message, args) {

        if (!message.member.permissions.has('')) {
            return message.channel.send('MANAGE_MESSAGE');
        }

        var testo;
        testo = testo = args.slice(1).join(" ");
        if (!testo) {
            return message.channel.send("Inserire un Messaggio");
        }

        message.delete()

        const UtenteWarnato = message.mentions.members.first()
        const NumeroWarn = args[1]
        const ScadenzaWarn = args[2]

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

