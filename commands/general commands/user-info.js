const Discord = require("discord.js")

module.exports = {
    name: "server-info",
    description: "per vedere le informazioni su un server",
    execute(message, args) {

        var server = message.guild;

        var embed = new Discord.MessageEmbed()
            .setTitle("__ServerInfo!__")
            .setColor("RANDOM")
            .setDescription("***Tutte le info su questo Server:***")
            .setThumbnail(server.iconURL())
            .addField("**__➪ Nome Del Server:__**", server.name)
            .addField("**__➪ Owner:__**", client.users.cache.get(server.ownerId).username, true)
            .addField("**__➪ ID Del Server:__**", server.id, true)
            .addField("__**➪ Membri:**__", server.memberCount.toString(), false)
            .addField("__**➪ Ruoli:**__", server.roles.cache.size.toString(), true)
            .addField("__**➪ Canali Testuali:**__", server.channels.cache.size.toString(), false)
            .addField("__**➪ Creazione Del Server**__", server.createdAt.toDateString(), true)
            .addField("**__➪ Boost e Livello:**__", "Level " + (server.premiumTier != "NONE" ? server.premiumTier : 0) + " (Boost: " + server.premiumSubscriptionCount + ")", true)
        message.channel.send({ embeds: [embed] })
    }
}