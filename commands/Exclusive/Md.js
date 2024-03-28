const Discord = require('discord.js');

module.exports = {
  name: "md",
  alias: ["dm","pm"],

async execute (client, message, args){

let noperms = new Discord.MessageEmbed()

            .setTitle("**Error de permiso de usuario!**")
            .setDescription("[❌] **Lo siento, ¡no tienes permisos para usar esto!**")
            .setThumbnail("https://www.pngall.com/wp-content/uploads/2/Staff-Only-Sign-PNG-File.png")
            .setColor("RANDOM")
            .setFooter("Comando Sugerido por " + message.member.displayName, message.author.displayAvatarURL())
            .setTimestamp()

            var perms = message.member.roles.cache.has(client.config["Bot_Info"].RankOwner)
  
            if(!perms) return message.channel.send(noperms);

      let user =
        message.mentions.members.first() ||
        message.guild.members.cache.get(args[0]);
      if (!user)
        return message.channel.send(`❌ No mencionaste a un usuario o diste una id no válida`);
  
      if (!args.slice(1).join(" "))
        return message.channel.send("❌ No especificaste el message que queires que le envie");
  
      user.user
        .send(args.slice(1).join(" "))
        .catch(() => message.channel.send("That user could not be DMed!"))
        .then(() => message.channel.send(`Sent a message to ${user.user.tag}`));
 }
}