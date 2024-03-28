const Discord = require('discord.js');
const db = require("quick.db");

module.exports = {
  name: "afk",
  alias: [],

async execute (client, message, args){

      if (db.has(`${message.guild.id}_${message.author.id}` + '.afk')) {
       message.reply("[✅] **Se removio tu AFK**");
        db.delete(`${message.guild.id}_${message.author.id}` + '.afk')
        db.delete(`${message.guild.id}_${message.author.id}` + '.messageafk')
      } else {

        const embed = new Discord.MessageEmbed()

      .setDescription(`[😴] **Sistema AFK**

      **User:** <@${message.member.id}>
      **Razon:** ${args.join(" ")}
      \`\`\`Para quitar tu afk vuelve a colocar el comando\`\`\``)
      .setThumbnail(message.author.displayAvatarURL())
      .setColor("RANDOM")
      .setFooter("Comando Sugerido Por " + message.member.displayName, message.author.displayAvatarURL())
      .setTimestamp()
        
        message.channel.send(embed)
        
        db.set(`${message.guild.id}_${message.author.id}` + '.afk', 'true')
        if(!args[0]){
          let none = "none";
          db.set(`${message.guild.id}_${message.author.id}` + '.messageafk', none)
          return;
        }
        db.set(`${message.guild.id}_${message.author.id}` + '.messageafk', args.join(" "))
      }

 }
}