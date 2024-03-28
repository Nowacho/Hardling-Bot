const Discord = require('discord.js');
const { MessageEmbed } = require('discord.js')

module.exports = {
  name: "say",
  alias: [],

 execute (client, message, args){


        const botperms = message.guild.me.hasPermission("MANAGE_MESSAGES")
        if(!botperms) return message.channel.send("[:x:] **No tengo permisos para ejecutar el comando**")

            var perms = message.member.hasPermission("MANAGE_MESSAGES")
            let NoPerm = new MessageEmbed()

            .setTitle("**Error de permiso de usuario!**")
            .setDescription("[❌] **Lo siento, ¡no tienes permisos para usar esto!**")
            .setThumbnail("https://www.pngall.com/wp-content/uploads/2/Staff-Only-Sign-PNG-File.png")
            .setColor("RANDOM")
            .setFooter("Comando Sugerido por " + message.member.displayName, message.author.displayAvatarURL())
            .setTimestamp()
            if(!perms) return message.channel.send(NoPerm);


const channel = message.mentions.channels.first() 
let sendch = message.guild.channels.cache.find(channel => channel.name === `${channel}`) 
let as = args.slice(1).join(' ');

if (!channel) return message.channel.send('[:gear:] **Especifica El Canal**')
if (!as) return message.channel.send('[:gear:] **Tienes Que Decirme El Texto**');
channel.send(as);

 }
}