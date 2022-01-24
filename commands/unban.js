const Discord = require("discord.js")

module.exports = {
    name: "un-ban",
    description: "sbannare un utente dal discord",
    execute(message, args) {
        var utente = message.mentions.members.first();
        if (!message.member.permissions.has('KICK_MEMBER')) {
            return message.channel.send('Hey, non hai il permesso per espellere, assicurati di avere il permesso!');
        }
        if (!utente) {
            return message.channel.send('Non hai menzionato nessun utente, assicurati di menzionarlo correttamente!');
        }
        if (!utente.bannable) {
            return message.channel.send('Hey, non ho i poteri per espellere!');
        }
        utente.ban()
            .then(() => {
                var embed = new Discord.MessageEmbed()
                .setColor('RANDOM')
                .setFooter(`Utente esplulso`)
                .setTitle(`${utente.user.username} E' stato esplulso dal server correttamente.`)
                .setDescription(`L'utente è stato esplulso da ${message,author.toString()}`)

                message.channel.send({ embeds: [embed] })
            })
    }
}