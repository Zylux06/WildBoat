const Discord = require("discord.js")

module.exports = {
    name: "poll",
    description: "fare un sondaggio",
    execute(message, args) {

            var args = message.content.split(/\s+/);
            var testo;
            testo = args.slice(1).join(" ");
            if (!testo) {
                return message.channel.send("**Inserisci un messaggio!**");
            }
            if (message.content.includes("@everyone") || message.content.includes("@here")) {
                return message.channel.send("**Non taggare everyone o here!**");
            }
            message.delete()
            
            var embed = new Discord.MessageEmbed()
            .setColor("RANDOM")
                .setTitle("Sondaggio!")
                .setThumbnail("https://cdn.discordapp.com/attachments/935655567526068264/935881520596533258/template-sticker-600x600.png")
                .setDescription(`**${message.author.toString()} Ha scritto il messaggio:\n${testo}**`)
                .setFooter({text: "Sondaggio Server"})
                .setTimestamp()
    
            message.channel.send({embeds: [embed]})
            .then(msg => {
                msg.react("👍🏻")
                msg.react("👎🏻")
              })
        }
    }