const Discord = require("discord.js")

module.exports = {
    name: "kick",
    description: "kickare un utente",
    execute(message, args) {
        var utente = message.mentions.members.first();
        if (!message.member.permissions.has('KICK_MEMBERS')) {
            return message.channel.send('**Non hai i permessi per kickare!**');
        }
        if (!utente) {
            return message.channel.send('**Non hai menzionato nessun utente.**');
        }
        if (!utente.kickable) {
            return message.channel.send('**Io non ho il permesso per kickare!**');
        }
        utente.kick()
            .then(() => {
                var embed = new Discord.MessageEmbed()
                    .setColor("#b6fc03")
                    .setThumbnail("https://cdn.discordapp.com/attachments/935655567526068264/935881520596533258/template-sticker-600x600.png")
                    .setTitle(`${utente.user.username} E' Stato Kickato!`)
                    .setDescription(`**__Utente kickato da ${message.author.toString()}__ con successo!**`)

                message.channel.send({ embeds: [embed] })
            })
    }
}