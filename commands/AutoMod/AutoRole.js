const Discord = require('discord.js');
const db = require("quick.db");

module.exports = {
  name: "autorole",
  alias: ["ar", "auto-role"],

async execute (client, message, args){

      let noperms = new Discord.MessageEmbed()

            .setTitle("**Error de permiso de usuario!**")
            .setDescription("[❌] **Lo siento, ¡no tienes permisos para usar esto!**")
            .setThumbnail("https://www.pngall.com/wp-content/uploads/2/Staff-Only-Sign-PNG-File.png")
            .setColor("RANDOM")
            .setFooter("Comando Sugerido por " + message.member.displayName, message.author.displayAvatarURL())
            .setTimestamp()

            var perms = message.member.hasPermission("MANAGE_ROLES")
            if(!perms) return message.channel.send(noperms);
  
      if (message.content.includes("@everyone")) {
        return message.reply("[⚙️] **Todos ya estan dados automaticamente por discord**");
      }
    
if(!args[0])
{
  return message.reply("[❌] **Dame el ID del ROL para agregar cuando un miembro se une al servidor**. \n Para desactivarlo escribe **off**");
}
  var role1 = message.mentions.roles.first();
    if(!role1)
    {
      var role1 = args[0];
    }
if(args[0] == "disable" || args[0] == "off")
{
  db.delete(`autorole_${message.guild.id}`);
  return message.reply("[✅] **Se desactivo el autorole en su servidor, habilítelo agregando cualquier rol**");
}
else {
message.reply(`[✅] **Ahora daré este rol cuando alguien se una al servidor:** <@&${role1}>`)
db.set(`autorole_${message.guild.id}`, role1);
}
  
     }
 }