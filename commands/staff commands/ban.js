const Discord = require("discord.js")

module.exports = {
    name: "ban",
    description: "comando per il ban",
    execute(message, args) {
        var utente = message.mentions.members.first();
        if (!message.member.permissions.has('BAN_MEMBERS')) {
            return message.channel.send('**Non hai il permesso per bannare, assicurati di averlo!**');
        }
        if (!utente) {
            return message.channel.send('**Hey, non hai menzionato nessun utente!**');
        }
        if (!utente.bannable) {
            return message.channel.send('**Non ho il permesso per bannare!**');
        }

        message.delete()
        utente.ban()
        
            .then(() => {
                var embed = new Discord.MessageEmbed()
                    .setTitle(`${utente.user.username} bannato`)
                    .setColor("#03fcb1")
                    .setThumbnail("https://cdn.discordapp.com/emojis/891315683231674378.webp?size=96&quality=lossless")
                    .setDescription(`**__L'utente è stato bannato da ${message.author.toString()}__ con successo!**`)

                message.channel.send({ embeds: [embed] })
            })
    }
}