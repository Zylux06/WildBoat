const { MessageActionRow, MessageButton } = require('discord.js');

module.exports = {
    name: "commands",
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
					.setLabel('Comandi RP')
					.setStyle('DANGER')
                    .setEmoji('🏃🏻‍♂️')
            )        
            
                var embed = new Discord.MessageEmbed()    
                    .setTitle("__**Lista dei Comandi di WildRP Bot**__")
                    .setColor("RANDOM")
                    .setDescription(`*${message.author.toString()} Ecco a te la lista completa dei comandi del bot!*`)
                    .setFooter({text: "Lista Comandi"})
                    .setTimestamp()

                message.channel.send({embeds: [embed], components: [row]})

                .then(msg => {
                    const collector = msg.createMessageComponentCollector()
                    
                    collector.on("collect", i => {
                        if(i.customId == 'IdBut1') {
                            let embed = new Discord.MessageEmbed()
                            .setTitle("🔨__**Comandi Staff**__🔨")
                            .addField('`w!ban`', '**Per bannare un utente;**')
                            .addField('`w!un-ban`', '**Per sbannare un utente;**')
                            .addField('`w!kick`', '**Per espellere un utente;**')
                            .addField('`w!ann`', '**Per annullare un Azione RP;**')
                            .addField('`w!aperto`', "**Per comunicare l'apertura dei bandi Staff;**")
                            .addField('`w!chiuso`', "**Per comunicare la chiusura dei bandi Staff;**")
                            .addField('`w!clear`', "**Per eliminare dei messaggi in Chat;**")
                            .addField('`w!infraction`', "**Per dare un Warn a un utente.**")
                            .setColor("RANDOM")
                            .setFooter({text: "Lista Comandi Staff"})
                            .setTimestamp()
                            i.reply({embeds: [embed]})
                            }

                            if(i.customId == 'IdBut2') {
                                let embed = new Discord.MessageEmbed()
                                .setTitle("🏃🏻‍♂️__**Comandi RP**__🏃🏻‍♂️")
                                .addField('`w!afk`', "**Per andare ad AFK;**")
                                .addField('`w!annuncio`', "**Per mandare un'annuncio in Chat;**")
                                .addField('`w!anon`', "**Per mandare un messaggio in anonimo**")
                                .addField('`w!commands`', "**Per vedere le liste complete dei comandi del Bot;**")
                                .addField('`w!gmail`', "**Per mandare una Mail;**")
                                .addField('`w!info-role`', "**Per vedere tutte le informazioni su un determinato Ruolo;**")
                                .addField('`w!nevica`', "**Per annunciare che sta iniziando a Nevicare;**")
                                .addField('`w!news`', "**Per mandare una News;**")
                                .addField('`w!nuvoloso`', "**Per annunciare che il Tempo si sta Annuvolando**")
                                .addField('`w!ping`', "**Per vedere la Latenza del Bot;**")
                                .addField('`w!piove`', "**Per annunciare che sta Piovendo;**")
                                .addField('`w!poll`', "**Per mandare un sondaggio;**")
                                .addField('`w!server-info`', "**Per vedere le informazioni sul Server;**")
                                .addField('`w!sole`', "**Per annunciare che che ci sarà il Sole;**")
                                .addField('`w!sup`', "**Per richiedere supporto allo Staff del Server;**")
                                .addField('`w!wz`', "**Per mandare un messaggio tramite Whatsapp.**")  
                                .setColor("RANDOM")
                                .setFooter({text: "Lista Comandi RP"}) 
                                .setTimestamp()                        
                                i.reply({embeds: [embed]})
                                }
                    })
                    })

            }}     
            
