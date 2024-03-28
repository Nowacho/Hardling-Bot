const ms = require('ms');
const Discord = require('discord.js');

module.exports = {
  name: "gdelete",
  alias: ["gdel","gremove","gcancel"],

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
        return message.channel.send('[❌] **Especifica el ID del mensaje.**');
    }

    let messageID = args[0];
        client.giveawaysManager.delete(messageID).then(() => {
            message.channel.send("[<a:Verificado:967860366606467205>] **Giveaway ha sido eliminado!**");
        }).catch((err) => {
            message.channel.send("[❌] **No se ha encontrado ningún Giveaway.**");
        });
 }
}