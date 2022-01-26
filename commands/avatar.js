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
                return message.channel.send("**Non ho trovato l'utente! Assicurati che nel comando ci sia anche il tag dell'utente!**")
            }
            var embed = new Discord.MessageEmbed()
                .setTitle(utente.user.tag)
                .setColor("#fccf03")
                .setDescription("**Ecco l'avatar di questo utente!**")
                .setImage(utente.user.displayAvatarURL({
                    dynamic: true,
                    format: "png",
                    size: 512
                }))
            message.channel.send({ embeds: [embed] })
        }
    }