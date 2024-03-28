const Discord = require('discord.js');

module.exports = {
  name: "hide",
  alias: [],

async execute (client, message, args){

 let noperms = new Discord.MessageEmbed()

            .setTitle("**Error de permiso de usuario!**")
            .setDescription("[❌] **Lo siento, ¡no tienes permisos para usar esto!**")
            .setThumbnail("https://www.pngall.com/wp-content/uploads/2/Staff-Only-Sign-PNG-File.png")
            .setColor("RANDOM")
            .setFooter("Comando Sugerido por " + message.member.displayName, message.author.displayAvatarURL())
            .setTimestamp()

            var perms = message.member.hasPermission("MANAGE_CHANNELS")
            if(!perms) return message.channel.send(noperms);
  
  
message.channel.overwritePermissions([
  {
     id: message.guild.roles.everyone.id,
     deny: ['VIEW_CHANNEL'],
  },
], `${message.member.id} `);
message.channel.send("[✅] **El canal esta bloqueado correctamente**")

 }
}