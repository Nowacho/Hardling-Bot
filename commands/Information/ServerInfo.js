const Discord = require('discord.js');

module.exports = {
  name: "serverinfo",
  alias: ["infoserver"],

execute (client, message, args){

    const guild = message.guild;
    const ID = guild.id;
    const Owner = guild.owner.user.tag;
    const Emojis = guild.emojis.cache.size || "No Emoji!";
    const Roles = guild.roles.cache.size || "No Roles!";
    const Members = guild.memberCount;
    const Humans = guild.members.cache.filter(member => !member.user.bot).size;
    const Bots = guild.members.cache.filter(member => member.user.bot).size;

    const embed = new Discord.MessageEmbed()
      
      .addField(`📡Nombre Del Servidor`, "```"+guild.name+"```", true)
      .addField(`👤ID`,"```"+ID+"```", true)
      .addField(`👑Owner`,"```"+Owner+"```", true)
      .addField(`🧸Roles`, "```"+Roles+"```", true)
      .addField(`🎐Emojis`, "```"+Emojis+"```", true)
      .addField(`✅Usuarios Totales`, "```"+Members+"```", true)
      .addField(`👥Humanos`, "```"+Humans+"```", true)
      .addField(`🤖Bots`, "```"+Bots+"```", true)
      .addField(`🗓️Server fue creado en`, "```"+guild.createdAt.toDateString()+"```")
      .setThumbnail(guild.iconURL())
      .setFooter("Comando Sugerido Por " + message.member.displayName, message.author.displayAvatarURL())
      .setTimestamp()
      .setColor("RANDOM")

    message.channel.send(embed);

 }
}