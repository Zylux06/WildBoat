const Discord = require("discord.js")

module.exports = {
    name: "depex",
    description: "depexare una persona Staff",
    execute(message, args) {

        var utente = message.mentions.members.first();
        if (!message.member.permissions.has('MANAGE_MESSAGES')) {
            return message.channel.send('**Non hai i permessi per kickare!**');
        }
        if (!utente) {
            return message.channel.send('**Non hai menzionato nessun utente.**');
        }

        var testo;
        testo = testo = args.slice(2, -2).join(" ");
        if (!testo) {
            return message.channel.send("Inserire un Messaggio");
        }

        message.delete()

        const UtenteWarnato = message.mentions.members.first()

        var embed = new Discord.MessageEmbed()
            .setTitle("**__🦅Depex🦅__**")
            .setColor("RANDOM")
            .setThumbnail("https://cdn.discordapp.com/attachments/935843968665669683/962738161350480002/unknown.png")
            .setDescription("**E' appena stato depexato uno Staff.**")
            .addField('Amministratore:', `${message.author.toString()}`)
            .addField('Depexato:', `${UtenteWarnato}`)
            .addField('Motivazione Depex:', `${testo}`)
            .setFooter({text: "Depex In Corso..."})
            .setTimestamp()

            message.channel.send({ embeds: [embed] })

        }
    } 