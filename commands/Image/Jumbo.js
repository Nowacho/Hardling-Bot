const Discord = require('discord.js');

module.exports = {
  name: "jumbo", 
  alias: [],

execute (client, message, args){

  if(!args[0]) return message.channel.send('[:gear:] Tienes que poner el emoji**')
  
  let emoji = message.guild.emojis.cache.find(x => x.name === args[0].split(":")[1])

  if(!emoji) return message.channel.send('[:gear:] **No puedo poner emojis de otro server**')

  const embed = new Discord.MessageEmbed()

  .setTitle('Jumbo Emoji')
  .setImage(emoji.url)
  .setColor("RANDOM")
  .setFooter("Comando Sugerido por " + message.member.displayName, message.author.displayAvatarURL())
  .setTimestamp()

  message.channel.send(embed)

 }
}