const Discord = require('discord.js');

module.exports = {
  name: "ghostping",
  alias: ["gping","gp"],

execute (client, message, args){

  let noperms = new Discord.MessageEmbed()

            .setTitle("**Error de permiso de usuario!**")
            .setDescription("[❌] **Lo siento, ¡no tienes permisos para usar esto!**")
            .setThumbnail("https://www.pngall.com/wp-content/uploads/2/Staff-Only-Sign-PNG-File.png")
            .setColor("RANDOM")
            .setFooter("Comando Sugerido por " + message.member.displayName, message.author.displayAvatarURL())
            .setTimestamp()

            var perms = message.member.hasPermission("MANAGE_MESSAGES")
  
            if(!perms) return message.channel.send(noperms);

const botperms = message.guild.me.hasPermission("MANAGE_MESSAGES")
        if(!botperms) return message.channel.send("[:x:] **No tengo permisos para ejecutar el comando**")

  const canal = message.mentions.channels.first() 
if (!canal) return message.channel.send('[:gear:] **Especifica El Canal**')
  
  let gping = args[1];
  if(!gping) return message.channel.send(`[:gear:] **Mensioname que tipo quieres <everyone|here>**`)

canal.send("@"+gping).then(msg => msg.delete({ timeout: 0 }));
  message.channel.send("[✅] **El GhostPing se lanzo correctamente**")
 }
}