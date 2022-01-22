const Discord = require("discord.js")
const client = new Discord.Client(
    { intents:["GUILDS", "GUILD_MEMBERS", "GUILD_MESSAGES"] }
)

client.login("OTM0MTE1Nzk5ODc3MTYxMDEw.YerZIQ.MKrj3k9AzvLG-yPQX5vZnmk61Lc")

client.on("messageCreate", message => {
    if (message.content.startsWith("!avatar")) {
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
})


client.on("messageCreate", message => {
    if (message.content == "!comando") {
        //Cancellare il canale del comando
        message.channel.delete();
        //Cancellare un canale specifico
        var canale = client.channels.cache.get("927196707257745409"); 
        canale.delete();
    }
})