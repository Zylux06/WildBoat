const Discord = require("discord.js")

module.exports = {
    name: "partner",
    description: "per mandare un messaggio che è appena stata effettuata una partnership",
    execute(message, args) {

        if (!message.member.permissions.has('MANAGE_MESSAGES')) {
            return message.channel.send('**Hey, non hai il permesso per fare questo comando! Ti serve il `MANAGE_MESSAGES` (Gestire i messaggi).**');
        }
        var testo;
        testo = args.join(" ");
        if (!testo) {
            return message.channel.send("Inserire un Messaggio");
        }

        message.delete()

        var embed = new Discord.MessageEmbed()
            .setTitle("🤝__**Nuova Partnership Effettuata!**__🤝")
            .setColor("RANDOM")
            .addField('Collaboratore:', `Grazie ${testo} per aver effettuato la Partnership con noi!`)
            .addField('Partner Manager', `${message.author.toString()} hai appena effettuato una Partner, bravo!`)
            .setThumbnail("https://cdn.discordapp.com/attachments/935843968665669683/965868943719927828/unknown.png")
            .setFooter({text: "Partnership Effettuata"})
            .setTimestamp()

            message.channel.send({embeds: [embed]})
    }
}    