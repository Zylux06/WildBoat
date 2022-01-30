const Discord = require("discord.js")
global.client = new Discord.Client(
    { intents:["GUILDS", "GUILD_MEMBERS", "GUILD_MESSAGES"] }
)

client.login(process.env.token)

client.on("ready", () => {
    console.log("BOT ONLINE!")
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