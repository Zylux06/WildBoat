const Discord = require("discord.js")

module.exports = {
    name: "aperto",
    description: "apertura bandi staff",
    execute(message, args) {
        var utente = message.mentions.members.first();
        if (!message.member.permissions.has('ADMINISTRATOR')) {
            return message.channel.send('Non hai il permesso di usare questo comando!');
        }
        if (!utente) {
            return message.channel.send('Non hai menzionato nessun utente');
        }
        utente.ban()
            .then(() => {
                var embed = new Discord.MessageEmbed()
                    .setTitle(`${utente.user.username} bannato`)
                    .setDescription(`Utente bannato da ${message.author.toString()}`)

                message.channel.send({ embeds: [embed] })
            })
