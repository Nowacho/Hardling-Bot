const Discord = require('discord.js');


module.exports = {
  name: "slowmode",
  alias: ["modolento"],

execute (client, message, args){

        let NoPerm = new Discord.MessageEmbed()

            .setTitle("**Error de permiso de usuario!**")
            .setDescription("[❌] **Lo siento, ¡no tienes permisos para usar esto!**")
            .setThumbnail("https://www.pngall.com/wp-content/uploads/2/Staff-Only-Sign-PNG-File.png")
            .setColor("RANDOM")
            .setFooter("Comando Sugerido por " + message.member.displayName, message.author.displayAvatarURL())
            .setTimestamp()
            
        var perms = message.member.hasPermission("MANAGE_CHANNEL")
        if(!perms) return message.channel.send(NoPerm);

    const amount = parseInt(args[0]);
    if (message.member.hasPermission("MANAGE_CHANNEL"))
      if (isNaN(amount))
        return message.channel.send("[❌] **Inserte un numero valido**");
    if (args[0] === amount + "s") {
      message.channel.setRateLimitPerUser(amount);
      if (amount > 1) {
        message.channel.send("[✅] **El modo lento es de** `" + amount + "` **segundos**");
        return;
      } else {
        message.channel.send("[✅] **El modo lento es de** `" + amount + "` **segundo**");
        return;
      }
    }
    if (args[0] === amount + "m") {
      message.channel.setRateLimitPerUser(amount * 60);
      if (amount > 1) {
        message.channel.send("[✅] **El modo lento es de** `" + amount + "` **minutos**");
        return;
      } else {
        message.channel.send("[✅] **El modo lento es de** `" + amount + "` **minuto**");

        return;
      }
    }
    if (args[0] === amount + "h") {
      message.channel.setRateLimitPerUser(amount * 60 * 60);
      if (amount > 1) {
        message.channel.send("[✅] **El modo lento es de** `" + amount + "` **horas**");
        return;
      } else {
        message.channel.send("[✅] **El modo lento es de** `" + amount + "` **hora**");
        return;
      }
    } else {
      message.channel.send("[❌] **Solo puede configurar segundos (s), minutos (m) y horas (h)**");
    }

 }
}