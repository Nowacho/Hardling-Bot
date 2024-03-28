const ms = require('ms');
const Discord = require('discord.js');

module.exports = {
  name: "greroll",
  alias: [],

async execute (client, message, args){

     let noperms = new Discord.MessageEmbed()

            .setTitle("**Error de permiso de usuario!**")
            .setDescription("[❌] **Lo siento, ¡no tienes permisos para usar esto!**")
            .setThumbnail("https://www.pngall.com/wp-content/uploads/2/Staff-Only-Sign-PNG-File.png")
            .setColor("RANDOM")
            .setFooter("Comando Sugerido por " + message.member.displayName, message.author.displayAvatarURL())
            .setTimestamp();

      var perms = message.member.hasPermission("MANAGE_GUILD")
      if(!perms) return message.channel.send(noperms);

    if(!args[0]){
        return message.channel.send('[❌] **Especifica el ID del mensaje**');
    }

    let giveaway = client.giveawaysManager.giveaways.find((g) => g.prize === args.join(' ')) || client.giveawaysManager.giveaways.find((g) => g.messageID === args[0]);
    if(!giveaway){
        message.channel.send(`[❌] **No se ha encontrado ningún Giveaway.**`);
    }

    client.giveawaysManager.reroll(giveaway.messageID, {
        messages: {
            congrat: '[🎉] **Nuevo Ganador** {winners} **Felicidades**!'
        }
    })
    .then(() => {
        message.channel.send('[<a:Verificado:967860366606467205>] **Giveaway Reroll**!');
    })
    .catch((e) => {
        if(e.startsWith(`[❌] **El Giveaway del mensaje** ${giveaway.messageID} **no ha terminado.**`)){
            message.channel.send('[❌] **Este Giveaway no ha terminado**');
        } else {
            console.error(e);
            message.channel.send('[❌] **Hubo un error** | Favor de reportarlo :)');
        }
    });
 }
}