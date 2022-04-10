const { MessageActionRow, MessageButton } = require('discord.js');

module.exports = {
    name: "bottoni",
    description: "bottoni discord",
    execute(message, args) {


        let row = new MessageActionRow()
			.addComponents(
				new MessageButton()
					.setCustomId('IdBut1')
					.setLabel('Comandi Staff')
					.setStyle('SUCCESS')
                    .setEmoji('🔨')
            )        
            .addComponents(
				new MessageButton()
					.setCustomId('IdBut2')
					.setLabel('Cliccami!')
					.setStyle('DANGER')
                    .setEmoji('📌')
            )        
            
                var embed = new Discord.MessageEmbed()    
                    .setTitle("Lista dei Comandi di WildRP Bot")
                    .setColor("RANDOM")
                    .setDescription("Ecco la lista completa dei comandi del bot!")

                message.channel.send({embeds: [embed], components: [row]})

                .then(msg => {
                    const collector = msg.createMessageComponentCollector()
                    
                    collector.on("collect", i => {
                        if(i.customId == 'IdBut1') {
                            let embed = new Discord.MessageEmbed()
                            .addField("!ban", "ban")
                            .addField("!kick", "kick")
                            .setColor("YELLOW")
                            i.reply({embeds: [embed]})
                            }
                    })
                    })

            }}     
            
