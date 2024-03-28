const Discord = require('discord.js');

module.exports = {
    name: "avatar",
    alias: [],

        execute (client, message, args){

        const usuario = message.mentions.members.first() || message.member
        const embed = new Discord.MessageEmbed()

                .setTitle(`Avatar de ${usuario.user.username}`)
                .setImage(usuario.user.displayAvatarURL({size: 1024, dynamic: true}))
                .setColor("RANDOM")
                .setFooter('Comando Sugerido por ' + message.member.displayName, message.author.displayAvatarURL())
                .setTimestamp()

            message.channel.send(embed)

    }
}