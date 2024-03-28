const Discord = require('discord.js');

module.exports = {
  name: "unlock",
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


  let channel = message.channel;

   const vc1 = args.join(" ");
   channel.overwritePermissions([
  {
     id: message.guild.roles.everyone.id,
     allow: ['SEND_MESSAGES'],
  },
], 'unLockdown');
  
        message.channel.send("[✅] **El canal asido desbloqueado correctamente**")

 }
}