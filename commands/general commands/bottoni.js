const { MessageActionRow, MessageButton, } = require('discord.js');

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
					.setStyle('PRIMARY')
                    .setEmoji('📌')
            )        
            
                var embed = new Discord.MessageEmbed()    
                    .setTitle("⭐__Buttons__⭐")
                    .setColor("RANDOM")
                    .setDescription("Ciao")


                message.channel.send({embeds: [embed], components: [row]})

            }}     
            
    client.on("clickButton", (button) => {
        if(button.id == "ciao") {
            button.reply.defer("ciao anche a voi")
        }
    })        