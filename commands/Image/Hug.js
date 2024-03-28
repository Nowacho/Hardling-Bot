const Discord = require('discord.js');
const star = require('star-labs');

module.exports = {
  name: "abrazo",
  alias: ["hug","hugging"],

async execute (client, message, args){

let aA = message.author
	let aB = message.mentions.users.first()
	if(!aB) return message.channel.send('[❌] **Mensiona a alguien para darle un abrazó a alguien**');

  const aC = new Discord.MessageEmbed()
    .setDescription(`<@${aA.id}> 🫂Abrazó a <@${aB.id}>`)
    .setImage(star.hug())
    .setColor("RANDOM")
    .setFooter("Comando Sugerido por " + message.member.displayName, message.author.displayAvatarURL())
    .setTimestamp()
  
	message.channel.send(aC);
 }
}