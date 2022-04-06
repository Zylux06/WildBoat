const Discord = require("discord.js")

module.exports = {
    name: "rece",
    description: "per recensire il server o lo staff",
    execute(message, args) {

        var testo;
        testo = args.join(" ");
        if (!testo) {
            return message.channel.send("Inserire un Messaggio");
        }
        message.delete()

        var embed = new Discord.MessageEmbed()
            .setTitle("🗳__Recensione__🗳")
            .setColor("#33FFBD")
            .setDescription(`${message.author.toString()} ha recensito questo server.`)