const { MessageActionRow, MessageButton } = require('discord.js');

module.exports = {
    name: "bottoni",
    description: "bottoni discord",
    execute(message, args) {


        let row = new MessageActionRow()
			.addComponents(
				new MessageButton()
					.setCustomId('IdBut1')
					.setLabel('Clicca!')
					.setStyle('SUCCESS')
                    .setEmoji('😜')
            )        
            .addComponents(
				new MessageButton()
					.setCustomId('IdBut2')
					.setLabel('Cliccami!')
					.setStyle('DANGER')
                    .setEmoji('📌')
            )        
            
                var embed = new Discord.MessageEmbed()    
                    .setTitle("⭐__Buttons__⭐")
                    .setColor("RANDOM")
                    .setDescription("Ciao")

                message.channel.send({embeds: [embed], components: [row]})

                .then(msg => {
                    const collector = msg.createMessageComponentCollector()
                    
                    collector.on("collect", i => {
                        let embed = new Discord.MessageEmbed()
                        .addField("!ban", "ban")
                        .addField("!kick", "kick")
                        .setColor("YELLOW")
                        i.reply({embeds: [embed]})
                    })
                    })

            }}     
            
