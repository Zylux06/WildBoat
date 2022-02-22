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
            message.delete()
            
            var embed = new Discord.MessageEmbed()
                .setTitle(utente.user.tag)
                .setColor("RANDOM")")
                .setDescription("***➔ Ecco l'avatar ecco di questo utente!***")
                .setImage(utente.user.displayAvatarURL({
                    dynamic: true,
                    format: "png",
                    size: 512
                }))
                .setFooter({text: "Avatar })
                .setTimestamp()
            message.channel.send({ embeds: [embed] })
        }
    }