const Discord = require("discord.js")
global.client = new Discord.Client(
    { intents:["GUILDS", "GUILD_MEMBERS", "GUILD_MESSAGES"] }
)

client.login(process.env.token)

client.on("ready", () => {
    console.log("BOT ONLINE!")
})

//BENVENUTO
client.on("guildMemberAdd", member => {
    if (member.user.bot) return

    var embed = new Discord.MessageEmbed()
        .setTitle("👋__Benvenuto/a!__👋")
        .setColor("RANDOM")
        .setDescription(`**Hey ${member.toString()} sei il ${member.guild.memberCount} membro! Noi Siamo il ${member.guild.name}, abbiamo uno Staff Altamente Collaborativo con tutti i Membri del Nostro Server! Beh, detto questo ti Consiglio di Andare a Vedere il canale di i format dei moduli per scegliere che tipo di ruolo interpretare e dopodichè compilare il modulo in compilazione moduli. Se non capisci qualcosa non esitare a chiedere!
        Divertiti, ma Presta Attenzione a Non fare Cavolate!**`)
        .setThumbnail("https://cdn.discordapp.com/attachments/935655567526068264/935881520596533258/template-sticker-600x600.png")
        .setImage("https://cdn.discordapp.com/attachments/934495640807932025/937413556184432690/Los-Angeles.png")
        .setTimestamp()
    

    client.channels.cache.get("921808183977197668").send({embeds: [embed]}); 
})

//ADDIO
client.on("guildMemberRemove", member => {
    if (member.user.bot) return
    var embed = new Discord.MessageEmbed()
        .setTitle("GOODBEY")
        .setColor("RANDOM")
        .setDescription(`**Ciao ${member.toString()}, ci rivediamo presto qua in ${member.guild.name}...**`)
        .setThumbnail("https://cdn.discordapp.com/attachments/935655567526068264/935881520596533258/template-sticker-600x600.png")
        .setImage("https://cdn.discordapp.com/attachments/935843412056350730/937416556139393084/maxresdefault.png")
        .setTimestamp()

    client.channels.cache.get("921808183977197668").send({embeds: [embed]}); 
})

// STATS MEMBRI DISCORD
setInterval(function () {
    var canale = client.channels.cache.get("935916375636058152");
    canale.setName(`😜 Membri Totali: ${canale.guild.memberCount}`);
}, 1000 * 60 * 5)

const fs = require("fs");

client.commands = new Discord.Collection();

const commandsFiles = fs.readdirSync("./commands").filter(file => file.endsWith(".js"));
for(const file of commandsFiles) {
    var command = require(`./commands/${file}`);
    client.commands.set(command.name, command);
}

client.on("messageCreate", message => {
    const prefix = "w!";

    if (!message.content.startsWith(prefix) || message.author.bot) return

    const args = message.content.slice(prefix.length).trim().split(/ +/);
    const command = args.shift().toLocaleLowerCase();

    if (!client.commands.has(command)) return

    client.commands.get(command).execute(message, args);
})