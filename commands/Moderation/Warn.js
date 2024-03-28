const Discord = require('discord.js');
const db = require("quick.db");

module.exports = {
  name: "warn",
  alias: ["advertencia","setwarn"],

  async execute (client, message, args){

        let noperms = new Discord.MessageEmbed()

            .setTitle("**Error de permiso de usuario!**")
            .setDescription("[❌] **Lo siento, ¡no tienes permisos para usar esto!**")
            .setThumbnail("https://www.pngall.com/wp-content/uploads/2/Staff-Only-Sign-PNG-File.png")
            .setColor("RANDOM")
            .setFooter("Comando Sugerido por " + message.member.displayName, message.author.displayAvatarURL())
            .setTimestamp()

        var perms = message.member.hasPermission("KICK_MEMBERS")
        if(!perms) return message.channel.send(noperms);

            const user = message.mentions.members.first();

    if (!user) {
        return message.channel.send("[❌] **Por favor menciona a la persona a quien quieres warnear**");
    }
    if (message.mentions.users.first().bot) {
        return message.channel.send("[❌] **No puedes warnear a los bots**");
    }
    if (message.author.id === user.id) {
        return message.channel.send("[❌] **No puedes warnearte**");
    }
    if (user.id === message.guild.owner.id) {
        return message.channel.send("[❌] **No puedes warnear al propietario del servidor.** -_-");
    }

    const reason = args.slice(1).join(" ");
    if (!reason) {
        return message.channel.send("[❌] **Proporcione una razón para warnear**");
    }

    let warnings = db.get(`warnings_${message.guild.id}_${user.id}`);
    if (warnings === null) {
        db.set(`warnings_${message.guild.id}_${user.id}`, 1);
      
  const embed = new Discord.MessageEmbed()

  .addField("[✅] Se a Warneado Correctamente",`
  \`Warneado por:\` <@${message.author.id}>
  \`Usuario Warneado:\` ${user}
  \`Razon:\` ${reason}`)
  .setColor("RANDOM")
  .setFooter("Comando Sugerido por " + message.member.displayName, message.author.displayAvatarURL())
  .setTimestamp()

      await message.channel.send(embed);
      
    } else if(warnings !== null) {

const embed = new Discord.MessageEmbed()

  .addField("[✅] Se a Warneado Correctamente",`
  \`Warneado por:\` <@${message.author.id}>
  \`Usuario Warneado:\` ${user}
  \`Razon:\` ${reason}`)
  .setColor("RANDOM")
  .setFooter("Comando Sugerido por " + message.member.displayName, message.author.displayAvatarURL())
  .setTimestamp()

      message.channel.send(embed);
      db.add(`warnings_${message.guild.id}_${user.id}`, 1);
    }
  }
};