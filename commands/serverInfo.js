const Discord = require("discord.js")

module.exports = {
    name: "server",
    description: "per vedere le info su il server discord",
    execute(message, args, client) {

            var server = message.member.guild;
            var embed = new Discord.MessageEmbed()
                .setTitle(server.name)
                .setDescription("Tutte le info su questo server")
                .setThumbnail(server.iconURL())
                .addField("Owner", client.users.cache.get(server.ownerId).username, true)
                .addField("Server id", server.id, true)
                .addField("Members", server.memberCount.toString(), false)
                .addField("Channels", server.channels.cache.size.toString(), false)
                .addField("Server created", server.createdAt.toDateString(), true)
                .addField("Boost level", "Level " + (server.premiumTier != "NONE" ? server.premiumTier : 0) + " (Boost: " + server.premiumSubscriptionCount + ")", true)
            message.channel.send({ embeds: [embed] })
        }
    }