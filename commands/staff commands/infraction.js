const Discord = require("discord.js")

module.exports = {
    name: "infraction",
    description: "per warnare un utente",
    execute(message, args) {

        if (!message.member.permissions.has('')) {
            return message.channel.send('MANAGE_MESSAGE');
        }

        var testo;
        testo = args.join(" ");
        if (!testo) {
            return message.channel.send("Inserire un Messaggio");
        }

        message.delete()

        const UtenteWarnato = message.mentions.members.first()

        var embed = new Discord.MessageEmbed()
            .setTitle("⚠__Infrazione!__⚠")
            .setColor("RED")
            .addField('Moderatore:', `${message.author.toString()}`)
            .addField('Warnato:', `${UtenteWarnato}`)
            .addField('Motivazione:', `${testo}`)

            message.channel.send({ embeds: [embed] })

    }
}                

