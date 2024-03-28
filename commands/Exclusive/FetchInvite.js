const Discord = require('discord.js');
const rgx = /^(?:<@!?)?(\d+)>?$/;

module.exports = {
  name: "fetch",
  alias: ["invite","fi"],

async execute (client, message, args){

   let noperms = new Discord.MessageEmbed()

            .setTitle("**Error de permiso de usuario!**")
            .setDescription("[❌] **Lo siento, ¡no tienes permisos para usar esto!**")
            .setThumbnail("https://www.pngall.com/wp-content/uploads/2/Staff-Only-Sign-PNG-File.png")
            .setColor("RANDOM")
            .setFooter("Comando Sugerido por " + message.member.displayName, message.author.displayAvatarURL())
            .setTimestamp()

            var perms = message.member.roles.cache.has(client.config["Bot_Info"].RankOwner)
            if(!perms) return message.channel.send(noperms);

 const guildId = args[0];
    if (!rgx.test(guildId))
      return message.channel.send(`Provide a guild`)
    const guild = message.client.guilds.cache.get(guildId);
    if (!guild) return message.channel.send(`Invalid guild ID`)
   
    const array = []
    var textChats = guild.channels.cache
        .find(ch => ch.type === 'text' && ch.permissionsFor(guild.me).has('CREATE_INSTANT_INVITE'))

    if(!textChats) message.channel.send(`No channel`)
    
 await textChats.createInvite({
maxAge: 0, 
  maxUses: 0 
}).then(inv => {
  message.channel.send(`${guild.name} | ${inv.url}`);
})
.catch(err => {
    message.channel.send("Don't have permission");
});

 }
}