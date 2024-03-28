const Discord = require('discord.js');
const Zalgo = require("to-zalgo");


module.exports = {
  name: "zalgo",
  alias: [],

async execute (client, message, args){

const embed = new Discord.MessageEmbed()

    .setTitle("[🥴] **Zalgo text:** ")
    .setDescription(`\`\`\`${Zalgo(args.join(" "))}\`\`\``)
    .setFooter("Comando Sugerido Por" + message.member.displayName, message.author.displayAvatarURL())
    .setColor("RANDOM")
    .setTimestamp()
  
await message.channel.send(embed);

 }
}