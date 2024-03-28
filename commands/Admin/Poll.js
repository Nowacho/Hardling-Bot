const { MessageEmbed } = require('discord.js')
const Discord = require('discord.js');

module.exports = {
    name: "encuesta",
    alias: ["poll","pregunta"],

    execute (client, message, args){


                let noperms = new Discord.MessageEmbed()

            .setTitle("**Error de permiso de usuario!**")
            .setDescription("[❌] **Lo siento, ¡no tienes permisos para usar esto!**")
            .setThumbnail("https://www.pngall.com/wp-content/uploads/2/Staff-Only-Sign-PNG-File.png")
            .setColor("RANDOM")
            .setFooter("Comando Sugerido por " + message.member.displayName, message.author.displayAvatarURL())
            .setTimestamp()

            var perms = message.member.hasPermission("MANAGE_MESSAGES")
            if(!perms) return message.channel.send(noperms);

        let pregunta = args.join(" ");

        if (!pregunta) return message.channel.send("[:x:] **Tienes que poner la pregunta**");
        message.delete();
        message.channel.send({
                embed: {
                    color: 0x0099ff,
                    title: ":bar_chart: **" + pregunta + "**",
                    fields: [
                        { name: ":thumbsup: ", value: "Si", inline: true },
                        { name: ":thumbsdown: ", value: "No", inline: true }
                    ],
                    timestamp: new Date(),
                    footer: {
                        text: `Encuesta hecha por ${message.author.username}`
                    }
                }
            })
            .then(sentEmbed => {
                sentEmbed.react("👍");
                sentEmbed.react("👎");
            });
    }
}