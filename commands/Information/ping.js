const Discord = require('discord.js');

module.exports = {
    name: "ping",
    alias: [],

    async execute (client, message, args){

          const pingembed = new Discord.MessageEmbed()
            
                    .setTitle(`:satellite: Ping Bot`)
		                .addField('**Latency**', `\`${Date.now() - message.createdTimestamp}ms\``)
		                .addField('**API Latency**', `\`${Math.round(client.ws.ping)}ms\``)
                    .setThumbnail("https://cdn6.aptoide.com/imgs/a/d/f/adf7b1be6524699b1f5d9032bb76f345_icon.png")
                    .setColor("RANDOM")
                    .setFooter("Comando Sugerido Por " + message.member.displayName, message.author.displayAvatarURL())
                    .setTimestamp()

       message.channel.send(pingembed)
    }
}