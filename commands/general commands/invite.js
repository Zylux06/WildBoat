const Discord = require("discord.js")

module.exports = {
    name: "invite",
    description: "per mandare il link del bot pubblico",
    execute(message, args) {

        message.delete()

        var embed = new Discord.MessageEmbed()
            .setTitle("🌏__Invito del Bot!__🌏")
            .setColor("RANDOM")
            .setDescription(`***${message.author.toString()} Ecco a te il Link per invitare il bot nel tuo bellissimo Server!😜 \n https://discord.com/api/oauth2/authorize?client_id=934115799877161010&permissions=8&scope=bot***`)
            .setURL("https://discord.com/api/oauth2/authorize?client_id=934115799877161010&permissions=8&scope=bot")
            .setFooter({text: "Invito al Bot"})
            .setTimestamp()

            message.channel.send({ embeds: [embed] })

    }}            