const Discord = require('discord.js')

module.exports = {
    name: "info-role",
    description: "per vedere le info su un ruolo",
    execute(message, args) {

            var ruolo = message.mentions.roles.first()
            if (!ruolo) {
                return message.channel.send("**Hey, non ho trovato questo ruolo, probabilmente l'avrai taggato male o/e non hai taggato nessun ruolo.**")
            }
            var memberCount = message.guild.members.cache.filter(member => member.roles.cache.find(role => role == ruolo)).size;
            var permessiRuolo = new Discord.Permissions(ruolo.permissions.bitfield);
            var elencoPermessi = "";
            if (permessiRuolo.has("ADMINISTRATOR")) {
                elencoPermessi = "👑ADMINISTRATOR";
            }
            else {
                var permessi = ["CREATE_INSTANT_INVITE", "KICK_MEMBERS", "BAN_MEMBERS", "MANAGE_CHANNELS", "MANAGE_GUILD", "ADD_REACTIONS", "VIEW_AUDIT_LOG", "PRIORITY_SPEAKER", "STREAM", "VIEW_CHANNEL", "SEND_MESSAGES", "SEND_TTS_MESSAGES", "MANAGE_MESSAGES", "EMBED_LINKS", "ATTACH_FILES", "READ_MESSAGE_HISTORY", "MENTION_EVERYONE", "USE_EXTERNAL_EMOJIS", "VIEW_GUILD_INSIGHTS", "CONNECT", "SPEAK", "MUTE_MEMBERS", "DEAFEN_MEMBERS", "MOVE_MEMBERS", "USE_VAD", "CHANGE_NICKNAME", "MANAGE_NICKNAMES", "MANAGE_ROLES", "MANAGE_WEBHOOKS"]
                for (var i = 0; i < permessi.length; i++) {
                    if (permessiRuolo.has(permessi[i])) {
                        elencoPermessi += `- ${permessi[i]}\r`
                    }
                }
            }
            message.delete()
            
            var embed = new Discord.MessageEmbed()
                .setTitle(ruolo.name)
                .setDescription("__**Tutte le statistiche di questo ruolo!**__")
                .addField("**Role ID:**", ruolo.id, true)
                .addField("**Members:**", memberCount.toString(), true)
                .addField("**Colore:**", ruolo.hexColor, true)
                .addField("**Role Created:**", ruolo.createdAt.toDateString(), true)
                .addField("**Permissions:**", elencoPermessi, false)
            message.channel.send({ embeds: [embed] })
        }
    }