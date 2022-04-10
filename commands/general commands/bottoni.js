const { MessageActionRow, MessageButton } = require('discord.js');

module.exports = {
    name: "command",
    description: "lista comandi bot",
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
                            .addField('w!ban', 'Per bannare un utente;')
                            .addField('w!un-ban', 'Per sbannare un utente;')
                            .addField('w!kick', 'Per espellere un utente;')
                            .addField('w!ann', 'Per annullare un Azione RP;')
                            .addField('w!aperto', "Per comunicare l'apertura dei bandi Staff;")
                            .addField('w!chiuso', "Per comunicare la chiusura dei bandi Staff;")
                            .addField('w!clear', "Per eliminare dei messaggi in Chat;")
                            .addField('w!infraction', "Per dare un Warn a un utente.")
                            .setColor("YELLOW")
                            i.reply({embeds: [embed]})
                            }
                    })
                    })

            }}     
            
