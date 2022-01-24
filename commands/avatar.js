
const Discord = require("discord.js")

module.exports = {
    name: "avatar",
    description: "mostrare un'avatar di un utente",
    execute(message, args) {
        if (message.content.startsWith("!avatar")) {
            if (message.content.trim() == "!avatar") {
                var utente = message.member;
            }
            else {
                var utente = message.mentions.members.first();
            }
            if (!utente) {
                var embed2 = new Discord.MessageEmbed()
                .setTitle("**Utente non trovato**")
                .setDescription("L'utente che hai `scritto` potrebbe essere __sbagliato__ o __inesistente__!")
                .setColor("#ff0000") // Colore principale
    
                message.channel.send({ embeds: [embed2] })
                .then(msg => {
                    setTimeout(() => msg.delete(), 3000)
                  })
                  .catch()
    
            return
            }
            var embed = new Discord.MessageEmbed()
            .setTitle(utente.user.tag)
            .setColor("#ee00ff")
            .setDescription("`L'avatar di questo det utente:`")
            .setImage(utente.user.displayAvatarURL({
                    dynamic: true,
                    format: "png",
                    size: 512
                }))
            message.channel.send({ embeds: [embed] })
        }
    }}