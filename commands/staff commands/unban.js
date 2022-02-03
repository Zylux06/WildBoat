const Discord = require("discord.js")

module.exports = {
    name: "un-ban",
    description: "comando di sban",
    execute(message, args) {
        if (!message.member.permissions.has('BAN_MEMBERS')) {
            return message.channel.send('**Non hai il permesso per bannare!**');
        }

        var args = message.content.split(/\s+/);
        var idUtente = args[1]

        if (!idUtente) {
            return message.channel.send("**Non hai scritto l'id di nessun utente!**");
        }

        message.guild.members.unban(idUtente)
            .then(() => {
                var embed = new Discord.MessageEmbed()
                .setAuthor
                    .setColor("#fc03c2")
                    .setThumbnail("https://cdn.discordapp.com/attachments/935655567526068264/935881520596533258/template-sticker-600x600.png")
                    .setTitle("Utente Sbannato Con Successo")
                    .setDescription("Questo utente è stato sbannato")

                message.channel.send({ embeds: [embed] })
            })
            .catch(() => { message.channel.send("Utente non valido o non bannato") })
    }
}