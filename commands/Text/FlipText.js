const Discord = require('discord.js');
const flip = require("flip-text");

module.exports = {
  name: "fliptext",
  alias: ["flip","textflip"],

async execute (client, message, args){

if (args.length <= 0) 
  return message.channel.send("[❌] **Debes proporcionar un texto!**")
      
  var flipped = [];

  args.forEach((arg) => {
      flipped.push(flip(arg));
  });
  

const embed = new Discord.MessageEmbed()
    
	  .setTitle("[🙃] **Flip text:** ")
    .setDescription(`\`\`\`${flipped.join(" ")}\`\`\``)
    .setFooter("Comando Sugerido Por" + message.member.displayName, message.author.displayAvatarURL())
    .setColor("RANDOM")
    .setTimestamp()
  await message.channel.send(embed);

 }
}