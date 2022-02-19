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
        
        message.delete()
        utente.kick()
            .then(() => {
                var embed = new Discord.MessageEmbed()
                    .setColor("RANDOM")
                    .setThumbnail("https://discord.com/assets/16e50cf15d1cfdc28964072544f55043.svg")
                    .setTitle(`${utente.user.username} E' Stato Kickato!`)
                    .setDescription(`**__Utente kickato da ${message.author.toString()}__ con successo!**`)

                message.channel.send({ embeds: [embed] })
            })
    }
}