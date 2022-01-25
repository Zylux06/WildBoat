const Discord = require("discord.js")

module.exports = {
    name: "poll",
    description: "fare un sondaggio",
    execute(message, args) {

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
    
            //Messaggio classico
            message.channel.send(testo)
            
    
            //Embed
            var embed = new Discord.MessageEmbed()
                .setTitle("Say")
                .setDescription(testo)
    
            message.channel.send({embeds: [embed]})
            .then(msg => {
                msg.react("👍🏻")
                msg.react("👎🏻")
              })
        }
    }