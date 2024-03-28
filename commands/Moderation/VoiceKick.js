const Discord = require('discord.js');


module.exports = {
  name: "voicekick",
  alias: ["kickvoice","kickvoz","kickearvoz"],

execute (client, message, args){

    let noperms = new Discord.MessageEmbed()

            .setTitle("**Error de permiso de usuario!**")
            .setDescription("[❌] **Lo siento, ¡no tienes permisos para usar esto!**")
            .setThumbnail("https://www.pngall.com/wp-content/uploads/2/Staff-Only-Sign-PNG-File.png")
            .setColor("RANDOM")
            .setFooter("Comando Sugerido por " + message.member.displayName, message.author.displayAvatarURL())
            .setTimestamp()

        var perms = message.member.hasPermission("KICK_MEMBERS")
        if(!perms) return message.channel.send(noperms);

    if (!message.mentions.members.first())
      return message.channel.send(`[❌] **Mencione al usuario que desea expulsar del canal de voz**`);

    let { channel } = message.mentions.members.first().voice;

    if (!channel)
      return message.channel.send(`[❌] **El Usuario no está en ningún canal de voz**`);

    message.mentions.members.first().voice.kick();
    
    message.channel.send(`[✅] **El Usuario ha sido kickeado correctamente del canal de voz**`)


 }
}