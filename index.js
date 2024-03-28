const config = require('./config.json');
const Discord = require('discord.js')
const client = new Discord.Client();
const db = require('quick.db')

let prefix = (config["Bot_Info"].prefix)

//---------------------------------[Anti Crash MD]---------------------------------\\

client.on("message", function(message) {
  if (message.author.bot) return;
});

//---------------------------------[Anti Crash MD]---------------------------------\\

//---------------------------------[Anti Crash Error Console]---------------------------------\\

process.on('unhandledRejection', error => {
    console.error(error);
});

client.on('shardError', error => {
    console.error(error);
});
console.log("AntiCrash: ON")
//---------------------------------[Anti Crash Error Console]---------------------------------\\

//---------------------------------[Presence Bot]---------------------------------\\

client.config = config;
client.on('ready',() =>{
    function presence(){
        client.user.setPresence({
            status: (config["Bot_Info"].status), //  idle, dnd, offline, online
            activity: {
                name: (config["Bot_Info"].name),
                type: (config["Bot_Info"].type),  //  STREAMING, LISTENING, WATCHING, COMPETING
                  url: (config["Bot_Info"].url)
            }
        })
      console.log("Presence: ON")
    }
  presence();
 
//---------------------------------[Presence Bot]---------------------------------\\

//---------------------------------[Embed Log]---------------------------------\\

  const channelid = config["Logs"].NotificationOnlineBot;
  const channel = client.channels.cache.get(channelid)

console.log(`
-=-=-=-=-=-=-=-=-=-= BOT STAST -=-=-=-=-=-=-=-=-=
Bot ${client.user.tag}
Channels: ${client.channels.cache.size}
Servers: ${client.guilds.cache.size}
Users: ${client.users.cache.size}
-=-=-=-=-=-=-=-=-=-= BOT STAST -=-=-=-=-=-=-=-=-=`)

 const onlinebot = new Discord.MessageEmbed() 

  .addField("[:bar_chart:] Console Stats",
`\`\`\`-=-=-=-=-=-=-=-=-=-= BOT STAST -=-=-=-=-=-=-=-=-=
Bot ${client.user.tag}
Channels: ${client.channels.cache.size}
Servers: ${client.guilds.cache.size}
Users: ${client.users.cache.size}
-=-=-=-=-=-=-=-=-=-= BOT STAST -=-=-=-=-=-=-=-=-=\`\`\``)
  .setThumbnail("https://cdn6.aptoide.com/imgs/a/d/f/adf7b1be6524699b1f5d9032bb76f345_icon.png")
  .setColor('GREEN')
  .setTimestamp()
  
  channel.send(onlinebot)
})

//---------------------------------[Embed Log]---------------------------------\\

//---------------------------------[Tag Prefix Bot]---------------------------------\\
  
  let invitediscord = config["Bot_Info"].Invite
  let dcsupport = config["Bot_Info"].DiscordInvite

client.on("message", message => {
    
  const mentionRegex = RegExp(`^<@!?${client.user.id}>$`);
    if (message.content.match(mentionRegex)) {

const helptag = new Discord.MessageEmbed()

            .setTitle(`Mi Prefix \`${prefix}\` `)
            .addField("Commandos por los que puedes empezar ","[📖] **Help** - `Comandos para los usuarios`\n [👮] **StaffHelp** - `Comandos para los staff`")
            .addField("[⚙️] **Soporte**",`**[Clickea Aqui](${dcsupport})**`)
            .addField("[⭐] **Invite**",`**[Clickea Aqui](${invitediscord})**`)
            .setFooter("Power By Hardling Development")
            .setThumbnail("https://cdn-icons-png.flaticon.com/512/682/682055.png")
            .setColor("RANDOM")
            .setTimestamp()
  
  message.channel.send(helptag)
}
});
            
//---------------------------------[Tag Prefix Bot]---------------------------------\\

//-----------------------------------------------[MD Log]-----------------------------------------------//

client.on("message", message => {
              
              if (message.channel.type === "dm") {

            const channelId = config["Logs"].MdNotification;
            const channel = client.channels.cache.get(channelId);
        
            const embed = new Discord.MessageEmbed()
              
              .setTimestamp()
              .setTitle("Mensaje directo")
              .addField("Enviado por:", `<@${message.author.id}>`)
              .setColor("RANDOM")
              .addField("Mensaje: ", message.content)
              .setFooter("Mensaje al MD");
        
            channel.send(embed)
          }
        });
  
//-----------------------------------------------[MD Log]-----------------------------------------------//
  
//-----------------------------------------------[Join Log]-----------------------------------------------//

client.on('guildCreate', guild => {
  const channelidjoin = config["Logs"].JoinServer;
   const channelmessage = client.channels.cache.get(channelidjoin)
    const joinembed = new Discord.MessageEmbed()
    .setTitle(`✅ Joined a New Server`)
    .setDescription(`👥 **${guild.name}** | (\`${guild.id}\`)`)
    .setThumbnail(guild.iconURL({ dynamic: true }) || null)
    .addField("👑 Server Owner", `> ${guild.owner}`)
    .addField("👥 Membercount", `> ${guild.memberCount}`)
    .addField("🤖 Server Bot Is In", `> ${client.guilds.cache.size}`)
    .setFooter("Hora ala que fui agregado")
    .setColor("GREEN")
    .setTimestamp()
  channelmessage.send(joinembed).then(emoji =>
      emoji.react('1️⃣')+
      emoji.react('➕'))
})
//-----------------------------------------------[Join Log]-----------------------------------------------//

//-----------------------------------------------[Leave Log]-----------------------------------------------//

client.on('guildDelete', guild => {
  const channelidleave = config["Logs"].LeaverServer;
  const serverleavech = client.channels.cache.get(channelidleave)
  const leaveembed = new Discord.MessageEmbed()
    .setTitle(`⚠️ Left a Guild`)
    .setDescription(`👥 **${guild.name}** | (\`${guild.id}\`)`)
    .setThumbnail(guild.iconURL({ dynamic: true }) || null)
    .addField("👑 Server Owner", `> ${guild.owner}`)
    .addField("👥 Membercount", `> ${guild.memberCount}`)
    .addField("🤖 Server Bot Is In", `> ${client.guilds.cache.size}`)
    .setFooter("Hora ala que fui expulsado")
    .setColor("RED")
    .setTimestamp()
serverleavech.send(leaveembed).then(emoji =>
      emoji.react('➖')+
      emoji.react('1️⃣'))
});

//-----------------------------------------------[Leave Log]-----------------------------------------------//

//---------------------------------[Auto Role]---------------------------------\\

client.on("guildMemberAdd", async (member) => {
let autor = db.fetch(`autorole_${member.guild.id}`);
if(!autor)
{
  return;
}
var role = member.guild.roles.cache.get(`${autor}`);
member.roles.add(role);

});

//---------------------------------[Auto Role]---------------------------------\\

//---------------------------------[Anti Alt]---------------------------------\\

const alt = require("discord-anti-alt");
const account = new alt.config({
    days: 3,
    options: "kick"
});
client.on("guildMemberAdd", async (member) => {
let antialt = db.fetch(`antialt_${member.guild.id}`);
if(antialt == "disable" || !antialt || antialt == null)
{
  return;
}
 let play = account.run(member);
});

//---------------------------------[Anti Alt]---------------------------------\\


//---------------------------------[Commands Handler]---------------------------------\\

const fs = require("fs");
const path = require("path")

client.commands = new Discord.Collection(); 

const commands = fs.readdirSync(path.join(__dirname,'commands'));

for (const folders of commands ){
  const folder = fs.readdirSync(path.join(__dirname,'commands', folders ));
  
  for (const file of folder){
    const cmd = require(path.join (__dirname, 'commands', folders, file));
    client.commands.set(cmd.name, cmd );
  }
}

client.on('message', async (message) => {

 if (message.author.bot) return;
  
    if(!message.content.startsWith(prefix)) return;

    let usuario = message.mentions.members.first() || message.author

    const args = message.content.slice(prefix.length).trim().split(/ +/g)
    const command = args.shift().toLowerCase();
  
    let cmd = client.commands.find((c) => c.name === command || c.alias && c.alias.includes(command));
    if(cmd){
        cmd.execute(client, message, args)
    }
})

//---------------------------------[Commands Handler]---------------------------------\\

//---------------------------------[Giveaways]---------------------------------\\

const { GiveawaysManager } = require("discord-giveaways");

client.giveawaysManager = new GiveawaysManager(client, {
    storage: "../giveaways.json",
    updateCountdownEvery: 10000,
    default: {
        botsCanWin: false,
        embedColor: 'RANDOM',
        embedColorEnd: 'GREEN',
        reaction: '🎉'
    }
});

//---------------------------------[Giveaways]---------------------------------\\

//---------------------------------[Login Bot]-------------1--------------------\\
client.login(config["Bot_Info"].token)
//---------------------------------[Login Bot]---------------------------------\\