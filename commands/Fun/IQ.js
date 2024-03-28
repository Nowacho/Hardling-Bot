const Discord = require('discord.js');


module.exports = {
  name: "iq",
  alias: ["iqtest"],

async execute (client, message, args){

try {

const iq = Math.floor(Math.random() * 226);
const embed = new Discord.MessageEmbed()
  .setTitle(":brain: IQ ")
  .setDescription(":bulb: " + message.author.username + " IQ: `" + iq + "`")
  .setThumbnail(message.author.displayAvatarURL())
  .setColor("RANDOM")
  .setFooter("Comando Sugerido Por " + message.member.displayName, message.author.displayAvatarURL())
  .setTimestamp()
message.channel.send(embed);

} catch (err) {
    message.channel.send({embed: {
      color: 16734039,
      description: "Something went wrong... :cry:"
    }})
  }

 }
}