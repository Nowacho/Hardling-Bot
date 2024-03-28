const Discord = require('discord.js');
const {MessageEmbed} = require("discord.js");

module.exports = {
  name: "unbanall",
  alias: [],

async execute (client, message, args){

        let NoPerm = new MessageEmbed()

            .setTitle("**Error de permiso de usuario!**")
            .setDescription("[❌] **Lo siento, ¡no tienes permisos para usar esto!**")
            .setThumbnail("https://www.pngall.com/wp-content/uploads/2/Staff-Only-Sign-PNG-File.png")
            .setColor("RANDOM")
            .setFooter("Comando Sugerido por " + message.member.displayName, message.author.displayAvatarURL())
            .setTimestamp()
            
            var perms = message.member.hasPermission("ADMINISTRATOR")
            if(!perms) return message.channel.send(NoPerm);
             {
                    message.guild.fetchBans().then(bans => {
                        if (bans.size == 0) {{
              const embed = new MessageEmbed()

              .setDescription(`[:gear:] **No hay usuarios prohibidos.**`)
              .setThumbnail("https://icon-library.com/images/staff-icon-png/staff-icon-png-10.jpg")
              .setColor("RANDOM")
              .setFooter("Comando Sugerido por " + message.member.displayName, message.author.displayAvatarURL())
              .setTimestamp()

                 message.reply(embed)
            }   
                            
                        } else {
                            bans.forEach(ban => {
                                message.guild.members.unban(ban.user.id);
                            })
                            const emb = new Discord.MessageEmbed()

	            .setTitle('Ubanned all')
              .setThumbnail("https://hotemoji.com/images/dl/t/heavy-check-mark-emoji-by-google.png")
	            .setDescription(`[:white_check_mark:] **Todos los usuarios han sido unbanneados por: **<@${message.author.id}>`)
              .setColor("RANDOM")
              .setFooter("Comando Sugerido por " + message.member.displayName, message.author.displayAvatarURL())
              .setTimestamp()

        message.channel.send(emb);
                            
                        }
                    }
                    )
 }
}
}