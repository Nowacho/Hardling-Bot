const Discord = require('discord.js');

module.exports = {
    name: "dibujar",
    alias: ["paint","drawing"],

        execute (client, message, args){

        const embed = new Discord.MessageEmbed()

            .setTitle('Dibuja a tu gusto')
            .addField('no olvides de pasar un foto de tu dibujo :sunglasses:','~~---------------------------------------------------------------------------~~ ||█||||█||||█||||█||||█||||█||||█||||█||||█||||█||||█||||█||||█||||█||||█||||█||||█||||█||||█||||█||||█||||█||||█||||█||||█||||█||||█||||█||||█||||█||||█||||█||||█||||█||||█||||█||||█||||█||||█||||█||||█||||█||||█||||█||||█||||█||||█||||█||||█||||█||||█||||█||||█||||█||||█||||█||||█||||█||||█||||█||||█||||█||||█||||█||||█||||█||||█||||█||||█||||█||||█||||█||||█||||█||||█||||█||||█||||█||||█||||█||||█||||█||||█||||█||||█||||█||||█||||█||||█||||█||||█||||█||||█||||█||||█||||█||||█||||█||||█||||█||||█||||█||||█||||█||||█||||█||||█||||█||||█||||█||||█||||█||||█||||█||||█||||█||||█||||█||||█||||█||||█||||█||||█||||█||||█||||█||||█||||█||||█||||█||||█||||█||||█||||█||||█||||█||||█||||█||||█||||█||||█||||█||||█||||█||||█||||█||||█||||█||||█||||█||||█||||█|| ~~---------------------------------------------------------------------------~~')
            .setThumbnail('https://s24527.pcdn.co/wp-content/uploads/2016/11/artist-1297400_960_720.png')
            .setColor("RANDOM")
            .setFooter('Comando Sugerido por ' + message.member.displayName, message.author.displayAvatarURL())
            .setTimestamp()

            message.channel.send(embed)

    }
}