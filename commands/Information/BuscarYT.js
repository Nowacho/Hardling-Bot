const Discord = require('discord.js');

module.exports = {
  name: "buscaryt",
  alias: ["ytsearch","yt","youtube","youtuber"],

execute (client, message, args){

const text = args.join(' ');
    const search = args.join('+');
    if (!text) {
    return message.channel.send("[:gear:] **Introduzca un canal para buscar**")
    }
    const embed = new Discord.MessageEmbed()
    .setTitle("[:gem:] **Buscador de Youtubers**")
    .addField(`[:gear:] **Buscaste**`, `${text}`)
    .addField(`[:crystal_ball:] **Resultado**`, `[Esto es lo que encontré](https://youtube.com/results?search_query=${search})`)
    .setThumbnail("http://pngimg.com/uploads/youtube/youtube_PNG15.png")
    .setColor("RANDOM")
    .setFooter("Comando Sugerido por " + message.member.displayName, message.author.displayAvatarURL())
    .setTimestamp()
    message.channel.send(embed);
    }
 }