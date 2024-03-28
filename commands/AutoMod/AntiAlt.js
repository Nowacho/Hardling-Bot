const Discord = require('discord.js');
const db = require("quick.db");

module.exports = {
  name: "anti-alt",
  alias: ["antialt"],

async execute (client, message, args){

          let noperms = new Discord.MessageEmbed()

            .setTitle("**Error de permiso de usuario!**")
            .setDescription("[❌] **Lo siento, ¡no tienes permisos para usar esto!**")
            .setThumbnail("https://www.pngall.com/wp-content/uploads/2/Staff-Only-Sign-PNG-File.png")
            .setColor("RANDOM")
            .setFooter("Comando Sugerido por " + message.member.displayName, message.author.displayAvatarURL())
            .setTimestamp()

            var perms = message.member.hasPermission("MANAGE_GUILD")
            if(!perms) return message.channel.send(noperms);

 var wchannel = args[0];
 if(!wchannel)
 {
   return message.reply("[❌] **Elige una Opcion:** `on`, `off`")
 }
 if(wchannel == "on")
 {
   db.set(`antialt_${message.guild.id}`, wchannel);
   message.reply(`[✅] **Anti-Alt esta habilitado**`);
   return;
 }
 else if(wchannel == "off")
 {
   db.delete(`antialt_${message.guild.id}`);
   message.reply(`[✅] **Anti-Alt esta deshabilitado**`);
   return;
 }else {
 return message.reply("[❌] No ingresaste habilitar o deshabilitar")
 }
  
 }
}