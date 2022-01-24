const Discord = require("discord.js")

module.exports = {
    name: "ban",
    description: "comando per il ban",
    execute(message, args) {
            var utente = message.mentions.members.first();
            if (!message.member.permissions.has('BAN_MEMBERS')) {
                return message.channel.send('Hey, non hai il permesso per bannare, assicurati di avere il permesso di bannare!');
            }
            if (!utente) {
                return message.channel.send('Non hai menzionato nessun utente, assicurati di menzionarlo correttamente!');
            }
            if (!utente.bannable) {
                return message.channel.send('Hey, non ho i poteri per bannare!');
            }
            utente.ban()
                .then(() => {
                    var embed = new Discord.MessageEmbed()
                    .setColor('RANDOM')
                    .setFooter(`Utente bannato`)
                    .setTitle(`${utente.user.username} E' stato bannato dal server correttamente!`)
                    .setDescription(`L'utente è stato bannato da ${message,author.toString()}`)
    
                    message.channel.send({ embeds: [embed] })
                })
        }
    }