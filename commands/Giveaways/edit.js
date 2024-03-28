const ms = require('ms');
const Discord = require('discord.js');

module.exports = {
  
  name: "gedit",
  alias: ["ge"],

async execute (client, message, args){

const noperms = new Discord.MessageEmbed()

            .setTitle("**Error de permiso de usuario!**")
            .setDescription("[❌] **Lo siento, ¡no tienes permisos para usar esto!**")
            .setThumbnail("https://www.pngall.com/wp-content/uploads/2/Staff-Only-Sign-PNG-File.png")
            .setColor("RANDOM")
            .setFooter("Comando Sugerido por " + message.member.displayName, message.author.displayAvatarURL())
            .setTimestamp();

      var perms = message.member.hasPermission("MANAGE_GUILD")
      if(!perms) return message.channel.send(noperms);

    if(!args[0]){
      let embedEdit = new Discord.MessageEmbed()

        .setTitle("<a:manuten:967863368633425980> Giveawey help")
        .setDescription(`
        💡**Especifica el ID del mensaje** 

        <a:Verificado:967860366606467205> **Formato:**
        <a:Arrow:967862282828791848> ${prefix}gedit (MSG-ID) (premio) (premio)
        <a:Arrow:967862282828791848> ${prefix}gedit (MSG-ID) (ganadores) (Numero) 

        🏷️**Ejemplo:**
        <a:Arrow:967862282828791848> ${prefix}gedit 967890433523522610 premio Nitro Classic
        <a:Arrow:967862282828791848> ${prefix}gedit 867899833523534690 ganadores 2`)
        .setThumbnail("https://media.hearthpwn.com/attachments/96/921/tada.png")
        .setColor("RANDOM")
        .setFooter("Comando Sugerido por " + message.member.displayName, message.author.displayAvatarURL())
        .setTimestamp()
      
      return message.channel.send(embedEdit);

    }

    if(!args[1]){
        return message.channel.send('[❌] **Necesitas editar el premio o los ganador(es)**');
    }

    if(args[1] === 'premio'){
        let newPrize = args.slice(2).join(' ')

        if(!newPrize) return message.channel.send('[❌] **Tienes que poner un nuevo premio**');

        client.giveawaysManager.edit(args[0], {
            newPrize: newPrize,
        }).then(() => {
            const numberOfSecondsMax = client.giveawaysManager.options.updateCountdownEvery / 1000;
            message.channel.send('[<a:Verificado:967860366606467205>] **El premio del giveaway se actualizará en menos de ' + numberOfSecondsMax + ' segundos.**');
        }).catch((err) => {
            message.channel.send(`[❌] **No se ha encontrado ningún Giveaway.**`);
        });
    }else
    if(args[1] === 'ganadores'){
        let newWinners = args[2]
        if(isNaN(newWinners) || (parseInt(newWinners) <= 0)){
            return message.channel.send('[❌] Especifica un numero valido de ganador(es)');
        }

        client.giveawaysManager.edit(args[0], {
            newWinnerCount: newWinners,
        }).then(() => {
            const numberOfSecondsMax = client.giveawaysManager.options.updateCountdownEvery / 1000;
            message.channel.send('[<a:Verificado:967860366606467205>] **El premio del giveaway se actualizará en menos de ' + numberOfSecondsMax + ' segundos.**');
        }).catch((err) => {
            message.channel.send(`[❌] **No se ha encontrado ningún Giveaway.**`);
        });
    }else{
        return message.channel.send('[❌] Necesitas editar el premio o los ganador(es).');
    }
 }
}
