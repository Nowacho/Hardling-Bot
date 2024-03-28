const Discord = require('discord.js');


module.exports = {
  name: "roleinfo",
  alias: ["ri","inforole","role"],

async execute (client, message, args){

        if (!args[0]) return message.channel.send("❌ **Porfavor mensiona un rol**")
        let role = message.mentions.roles.first() || message.guild.roles.cache.get(args[0]) || message.guild.roles.cache.find(r => r.name.toLowerCase() === args.join(' ').toLocaleLowerCase());
        if (!role) return message.channel.send("❌ **Porfavor mensiona un rol valido**");

        const status = {
            false: "No",
            true: "Si"
        }

        let roleembed = new Discord.MessageEmbed()
            .setTitle(`Infomacion del Rol: \`${role.name}\``)
            .setThumbnail(message.guild.iconURL())
            .addField("👤 **ID**", "```"+ role.id +"```", true)
            .addField("🔠 **Nombre**", "```"+ role.name +"```", true)
            .addField("💡 **HexColor**", "```"+ role.hexColor +"```", true)
            .addField("📌 **Posicion**", "```"+ role.position +"```", true)
            .addField("🚨 **Mensionable**", "```"+ status[role.mentionable] +"```", true)
            .addField("👥 **Miembros con el Rol**", "```"+ role.members.size +"```")
            .setFooter("Comando Sugerido Por " + message.member.displayName, message.author.displayAvatarURL())
            .setTimestamp()
            .setColor("RANDOM")

        message.channel.send(roleembed);

 }
}