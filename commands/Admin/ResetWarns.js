const Discord = require('discord.js');
const db = require("quick.db");

module.exports = {
  name: "resetwarns",
  alias: ["resetwarn","deletewarn","removewarns","deletewarns","removewarns"],

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

const user = message.mentions.members.first();

    if (!user) {
      return message.channel.send("[❌] **Mensiona a la persona que quieres reiniciar los warns**");
    }

    if (message.mentions.users.first().bot) {
      return message.channel.send("[❌] Los bots no pueden ser warneados");
    }

    if (message.author.id === user.id) {
      return message.channel.send("[❌] No tienes permiso para restablecer tus advertencias");
    }

    let warnings = db.get(`warnings_${message.guild.id}_${user.id}`);
    if (warnings === null) {
      return message.channel.send(`[⚙️] ${message.mentions.users.first().username} **no tiene ningun warn**`);
    }

    db.delete(`warnings_${message.guild.id}_${user.id}`);
  
    user.send(`[✅] **Todas los warns se reiniciaron por** ${message.author.username} **en el servidor de** ${message.guild.name}`);
  
    await message.channel.send(`[✅] **Se reiniciaron todas los warns de** ${message.mentions.users.first().username}` );

 }
}