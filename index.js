global.Discord = require("discord.js")
global.client = new Discord.Client(
    { intents:["GUILDS", "GUILD_MEMBERS", "GUILD_MESSAGES", "GUILD_INTEGRATIONS"] }
)

client.login(process.env.token)

client.on("ready", () => {
    console.log("BOT ONLINE!");

    client.guilds.cache.forEach(guild => {
        guild.commands.create({
            name: "ciao",
            description: "Comando di test"
        })
    })
})

client.on("InteractionCreate", interaction => {
    if (!interaction.isCommand()) return

    if (!interaction.commandName == "ciao") {
        interaction.reply("Hey ciao!")
    }
})

client.on('ready', () => {
    client.user.setActivity('w!commands', { type: 'WATCHING' }); 
    
    client.user.setStatus('idle')
})

// TAG BOT + MESSAGGIO
client.on("messageCreate", message => {
    if(message.content == "<@934115799877161010>" || message.content == "<@!934115799877161010>") message.channel.send(`***__Hey ${message.author.toString()}, il mio prefisso in questo server è w!__***`)
})

// STATS MEMBRI DISCORD
setInterval(function () {
    var canale = client.channels.cache.get("935916375636058152");
    canale.setName(`🦅┃Membri Totali: ${canale.guild.memberCount}`);
}, 1000 * 60 * 5)
const { Interaction } = require("discord.js")
// FINE STATS

// MANTENERE I FILES ORDINATI
const fs = require("fs");

client.commands = new Discord.Collection();

const commandsFiles = fs.readdirSync("./commands").filter(file => file.endsWith(".js"));
for(const file of commandsFiles) {
    var command = require(`./commands/${file}`);
    client.commands.set(command.name, command);
}

const commandsFolder = fs.readdirSync("./commands");
for (const folder of commandsFolder) {
    const commandsFiles = fs.readdirSync(`./commands/${folder}`).filter(file => file.endsWith(".js"));
    for (const file of commandsFiles) {
        const commands = require(`./commands/${folder}/${file}`);
        client.commands.set(commands.name, commands);
    }
}

client.on("messageCreate", message => {
    const prefix = "w!";

    if (!message.content.startsWith(prefix) || message.author.bot) return

    const args = message.content.slice(prefix.length).trim().split(/ +/);
    const command = args.shift().toLocaleLowerCase();

    if (!client.commands.has(command)) return

    client.commands.get(command).execute(message, args);
})