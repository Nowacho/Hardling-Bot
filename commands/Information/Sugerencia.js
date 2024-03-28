const Discord = require('discord.js');
const db = require("quick.db")


        module.exports = {
            name: "sugerencia",
            alias: ["suggest", "sugerir", "sugiero", "suger"],
            async execute (client, message, args) {


              let canal = db.get(`suggestchannel_${message.guild.id}`);

    if(canal === null) {
    return message.channel.send(`**${message.author.username}**, no hay ningún canal establecido.`)
  }
                let sugerencia = args.join(" ")
                if (!sugerencia) {
                    let embedargs = new Discord.MessageEmbed()
                        .setDescription("[:gear:] **No has escrito ninguna segrencia**")
                        .addField("[:white_check_mark:] Ejemplo"," `-suggest <sugerencia>`")
                        .setColor("RED")
                        .setFooter("Comando Sugerido por " + message.member.displayName, message.author.displayAvatarURL())
                        .setTimestamp()
                    return message.channel.send(embedargs);

                }

                let embedsugerencia2 = new Discord.MessageEmbed()
                    .setDescription("[:white_check_mark:] Sugerencia Enviada.")
                    .setColor("GREEN")

                message.channel.send(embedsugerencia2)

                let embedsugerencia = new Discord.MessageEmbed()
                    .setThumbnail("https://cdn-icons-png.flaticon.com/512/1484/1484815.png")
                    .setTitle("[:crystal_ball:] Nueva Sugerencia")
                    .setDescription("**Sugerencia**: `"+sugerencia+"`\n**Enviado Por**: `"+message.member.displayName+"`")
                    .setFooter('Hora a la que fue enviado la Sugerencia')
                    .setColor("RANDOM")
                    .setTimestamp()

                client.channels.cache.get(canal).send(embedsugerencia).then(m => {
                    m.react("👍"),
                        m.react("👎")
                })
            }
        }