const Discord = require("discord.js")

module.exports = {
    name: "news",
    description: "per mandare una news telegiornale",
    execute(message, args) {

        var testo;
        testo = args.join(" ");
        if (!testo) {
            return message.channel.send("Inserire un Messaggio");
        }
        message.delete()

        var embed = new Discord.MessageEmbed()
            .setTitle("🗓__Telegiornale__🗓")
            .setColor("RANDOM")
            .setDescription("**Nuova Edizione del TG Fox!**")
            .addField('Conduttore:', `${message.author.toString()}`)
            .addField('Notizia:', `${testo}`)
            .setFooter({text: "TG Fox"})
            .setTimestamp()

            message.channel.send({content: "@everyone", embeds: [embed]})

    }
}                