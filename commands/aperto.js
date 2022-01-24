const Discord = require("discord.js")

module.exports = {
    name: "avatar",
    description: "vedere un avatar di un utente",
    execute(message, args) {
            if (message.content.trim() == "!avatar") {
                var utente = message.member;
            }
            else {
                var utente = message.mentions.members.first();
            }
            if (!utente) {
                return message.channel.send("Utente non trovato")
            }
            var embed = new Discord.MessageEmbed()
                .setTitle(utente.user.tag)
                .setDescription("L'avatar di questo utente")
                .setImage(utente.user.displayAvatarURL({
                    dynamic: true,
                    format: "png",
                    size: 512
                }))
            message.channel.send({ embeds: [embed] })
        }
    }