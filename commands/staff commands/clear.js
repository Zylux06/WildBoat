const Discord = require("discord.js")

module.exports = {
    name: "clear",
    description: "cancellazione dei messaggi con delete",
    execute(message, args) {
            if (!message.member.permissions.has("MANAGE_MESSAGES")) {
                return message.channel.send('**Non hai il permesso per eliminare i messaggi!**');
            }
            if (!message.guild.me.permissions.has("MANAGE_MESSAGES")) {
                return message.channel.send('**Non ho i permessi per eliminare i messaggi.**');
            }
            var count = parseInt(message.content.split(/\s+/)[1]); 
            if (!count) {
                return message.channel.send("**Inserisce un nuovo valido, info: Il numero deve essere da 0 - 100.**")
            }
            if (count > 100) {
                return message.channel.send("**Non puoi cancellare più di 100 messaggi per volta.**")
            }
            message.delete()

            message.channel.bulkDelete(count, true)
            message.channel.send(count + "**Messaggi Eliminati con Successo!**").then(msg => {
                setTimeout(() => msg.delete(), 10000)
        })
    }
}   