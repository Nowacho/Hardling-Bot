const Discord = require('discord.js');

module.exports = {
  name: "lock",
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
        id: message.guild.id,
        deny : ['SEND_MESSAGES'],
     },
    ],);
  
   const embed = new Discord.MessageEmbed()
     
   .setTitle("[✅] Canal Actualizado Correctamnete")
   .setDescription(`[🔒] **El Canal** ${message.channel} **ha sido bloqueado**`)
   .setColor("RANDOM")
   .setFooter("Canal bloqueado por " + message.member.displayName, message.author.displayAvatarURL())
   .setTimestamp()
  
   await message.channel.send(embed);
   message.delete();

 }
}