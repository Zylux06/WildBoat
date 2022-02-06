const Discord = require("discord.js")

module.exports = {
    name: "roles",
    description: "per richiedere/rimuovere dei determinati ruoli",
    execute(message, args) {

        message.channel.send(`*${message.author.toString()} Grazie per aver fatto richiesta, a breve uno staffer ti darà/rimuoverà il ruolo.*`)

        var args = message.content.split(/\s+/);
        var testo;
        testo = args.slice(1).join(" ");
        if (!testo) {
            return message.channel.send("Inserire un messaggio");
        }
        if (message.content.includes("@everyone") || message.content.includes("@here")) {
            return message.channel.send("Non taggare everyone o here");
        }
        message.delete()

        const embed = new Discord.MessageEmbed()
            .setTimestamp("👮‍♂️__Richiesta Ruoli__👮‍♂️")
            .setColor("RANDOM")
            .setDescription(`***${message.author.toString()} ➛ Ha richiesto questo/i ruolo/i:*** **\n${testo}**`)
            .setThumbnail("https://cdn.discordapp.com/attachments/935655567526068264/935881520596533258/template-sticker-600x600.png")
            .setFooter("Richiesta/Rimozione Ruoli")
            .setTimestamp()

            client.channels.cache.get("939864973302202408").send({content: "<@&925379991263395920>", embeds: [embed]})

    }}        