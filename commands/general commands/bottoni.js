const { MessageActionRow, MessageButton, DiscordAPIError } = require('discord.js');

module.exports = {
    name: "bottoni",
    description: "bottoni discord",
    execute(message, args) {

        let row = new MessageActionRow()
			.addComponents(
				new MessageButton()
					.setCustomId('IdBut1')
					.setLabel('Clicca')
					.setStyle('green')
                    
            )
                var embed = new Discord.MessageEmbed()    
                    .setTitle("⭐__Buttons__⭐")
                    .setColor("RANDOM")
                    .setDescription("Ciao")


                message.channel.send({embeds: [embed], components: [row]})

            }}         