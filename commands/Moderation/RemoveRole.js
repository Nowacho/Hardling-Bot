const Discord = require('discord.js');


module.exports = {
  name: "removerole",
  alias: ["deleterole","quitarrol","removerrol","removerank","deleterank"],

async execute (client, message, args){

let NoPerm = new Discord.MessageEmbed()

            .setTitle("**Error de permiso de usuario!**")
            .setDescription("[❌] **Lo siento, ¡no tienes permisos para usar esto!**")
            .setThumbnail("https://www.pngall.com/wp-content/uploads/2/Staff-Only-Sign-PNG-File.png")
            .setColor("RANDOM")
            .setFooter("Comando Sugerido por " + message.member.displayName, message.author.displayAvatarURL())
            .setTimestamp()
            
            var perms = message.member.hasPermission("MANAGE_ROLES")
            if(!perms) return message.channel.send(NoPerm);
  
let target = message.mentions.members.first();
  
    if(!target) return message.reply(`[❌] **No pude encontrar al usuario**`)
    
    let rrole = message.mentions.roles.first();
    
    if(!rrole) return message.reply(`[❌] **No encontre el rol**`)
    
    let ticon = target.user.avatarURL({ dynamic: true, size: 2048 });
    let aicon = message.author.avatarURL({ dynamic: true, size: 2048 });
    
      const embed = new Discord.MessageEmbed()

      .setThumbnail(target.user.displayAvatarURL({ dynamic: true }))
      .addField("[✅] **Rol removido correctamente**",`\`Moderador:\`<@${message.author.id}>\n \`Usuario:\` ${target}\n \`Rol Removido:\` ${rrole}`)
      .setColor("GREEN")
      .setFooter("Comando Sugerido por " + message.member.displayName, message.author.displayAvatarURL())
      .setTimestamp()
      
      await message.channel.send(embed)
      
      target.roles.remove(rrole)

 }
}