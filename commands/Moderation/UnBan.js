const Discord = require('discord.js');
const { MessageEmbed } = require("discord.js")
const db = require('quick.db');

module.exports = {
  name: "unban",
  alias: [],

async execute (client, message, args){

  let NoPerm = new MessageEmbed()

            .setTitle("**Error de permiso de usuario!**")
            .setDescription("[❌] **Lo siento, ¡no tienes permisos para usar esto!**")
            .setThumbnail("https://www.pngall.com/wp-content/uploads/2/Staff-Only-Sign-PNG-File.png")
            .setColor("RANDOM")
            .setFooter("Comando Sugerido por " + message.member.displayName, message.author.displayAvatarURL())
            .setTimestamp()
            
            var perms = message.member.hasPermission("BAN_MEMBERS")
            if(!perms) return message.channel.send(NoPerm);

        if (!args[0]) return message.channel.send("**[:gear:] Por favor, introduzca un nombre!**")
      
        let bannedMemberInfo = await message.guild.fetchBans()

        let bannedMember;
        bannedMember = bannedMemberInfo.find(b => b.user.username.toLowerCase() === args[0].toLocaleLowerCase()) || bannedMemberInfo.get(args[0]) || bannedMemberInfo.find(bm => bm.user.tag.toLowerCase() === args[0].toLocaleLowerCase());
        if (!bannedMember) return message.channel.send("[:gear:] **Por favor, proporcione un nombre de usuario!**")

        let reason = args.slice(1).join(" ")

        if (!message.guild.me.hasPermission("BAN_MEMBERS")) 
        return message.channel.send("[:gear:] **No tengo permisos para desbanear a alguien!**")
        
        try {
            if (reason) {
                message.guild.members.unban(bannedMember.user.id, reason)
                var sembed = new MessageEmbed()
                    .setThumbnail("https://share.creavite.co/Yv2FoAe9W05DxvI3.gif")
                    .setColor("RANDOM")
                    .setFooter("Comando Sugerido por " + message.member.displayName, message.author.displayAvatarURL())
                    .setTimestamp()
                    .setDescription(`[✅] **${bannedMember.user.tag} ha sido unbannedo por ${reason}**`)
                message.channel.send(sembed)
            } else {
                message.guild.members.unban(bannedMember.user.id, reason)
                var sembed2 = new MessageEmbed()
                    .setThumbnail("https://share.creavite.co/Yv2FoAe9W05DxvI3.gif")
                    .setColor("RANDOM")
                    .setFooter("Comando Sugerido por " + message.member.displayName, message.author.displayAvatarURL())
                    .setTimestamp()
                    .setDescription(`[✅] **${bannedMember.user.tag} ha sido unbannedo**`)
                message.channel.send(sembed2)
            }
        } catch {
            
        }

        let channel = db.fetch(`modlog_${message.guild.id}`)
        if (!channel) return;

        let embed = new MessageEmbed()
            .setAuthor(`${message.guild.name} Modlogs`, message.guild.iconURL())
            .addField("**Moderation**", "unban")
            .addField("**Unbanned**", `${bannedMember.user.username}`)
            .addField("**ID**", `${bannedMember.user.id}`)
            .addField("**Moderator**", message.author.username)
            .addField("**Reason**", `${reason}` || "**No Reason**")
            .addField("**Date**", message.createdAt.toLocaleString())
            .setThumbnail("https://hotemoji.com/images/dl/t/heavy-check-mark-emoji-by-google.png")
            .setColor("RANDOM")
            .setFooter("Comando Sugerido por " + message.member.displayName, message.author.displayAvatarURL())
            .setTimestamp()

        var sChannel = message.guild.channels.cache.get(channel)
        if (!sChannel) return;
        sChannel.send(embed)

 }
}