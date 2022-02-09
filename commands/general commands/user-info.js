const Discord = require("discord.js")

module.exports = {
    name: "server-info",
    description: "per vedere le informazioni su un server",
    execute(message, args) {

        var server = message.guild;

        var embed = new Discord.MessageEmbed()
            .setTitle("__ServerInfo!__")
            .setDescription("Tutte le info su questo server")
            .setThumbnail(server.iconURL())
            .addField("Nome del server", server.name)
            .addField("Owner", client.users.cache.get(server.ownerId).username, true)
            .addField("Server id", server.id, true)
            .addField("Members", server.memberCount.toString(), false)
            .addField("Channels", server.channels.cache.size.toString(), false)
            .addField("Server created", server.createdAt.toDateString(), true)
            .addField("Boost level", "Level " + (server.premiumTier != "NONE" ? server.premiumTier : 0) + " (Boost: " + server.premiumSubscriptionCount + ")", true)
        message.channel.send({ embeds: [embed] })
    }
}