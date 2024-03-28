const Discord = require('discord.js');
const { MessageEmbed } = require("discord.js");

module.exports = {
  name: "connect",
  alias: ["unirse","conectar","join"],

async execute (client, message, args){

    let noperms = new Discord.MessageEmbed()

            .setTitle("**Error de permiso de usuario!**")
            .setDescription("[❌] **Lo siento, ¡no tienes permisos para usar esto!**")
            .setThumbnail("https://www.pngall.com/wp-content/uploads/2/Staff-Only-Sign-PNG-File.png")
            .setColor("RANDOM")
            .setFooter("Comando Sugerido por " + message.member.displayName, message.author.displayAvatarURL())
            .setTimestamp()

            var perms = message.member.hasPermission("ADMINISTRATOR")
            if(!perms) return message.channel.send(noperms);
            
  const channel = message.member.voice.channel;
  if (!channel)
    return message.channel.send(
      "[:gear:] **Debes unirte a un canal de voz antes de usar este comando.**"
    );

  if (!channel.permissionsFor(message.client.user).has("CONNECT"))
    return error("[:x:] **No tengo permiso para unirme al canal de voz.**");

  await channel.join();

  return message.channel.send(
    new MessageEmbed()
      .setDescription("[:white_check_mark:] **Me uní al canal de voz**")
      .setColor("GREEN")
      .setFooter("Comando Sugerido Por " + message.member.displayName, message.author.displayAvatarURL())
      .setTimestamp()
  );
 }
}