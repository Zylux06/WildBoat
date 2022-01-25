const { ms } = require('discord.js')
const Discord = require("discord.js")

module.exports = {
    name: "slowmode",
    description: "impostare lo slowmode in un canale",
    execute(message, args) {

            var time = message.content.split(/\s+/)[1];
            if (!time) {
                return message.channel.send("Inserire un tempo valido")
            }
    
            time = ms(time)
            if (!time && time != 0) {
                return message.channel.send("Inserire un tempo valido")
            }
    
            if (time > 21600000) {
                return message.channel.send("Inserire un tempo non superiore a 6 ore")
            }
    
            message.channel.setRateLimitPerUser(parseInt(time) / 1000)
            message.channel.send("Slowmode impostata")
        }
    }