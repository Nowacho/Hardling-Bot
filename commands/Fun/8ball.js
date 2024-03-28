const Discord = require('discord.js');

module.exports = {
    name: "8ball",
    alias: [],

    execute (client, message, args){

        const pregunta = args.join(' ')
        if(!pregunta) return message.channel.send("[:gear:] **Debes de poner una pregunta**")

        let respuesta = ["Si", "No", "Tal vez", "Obvio", "Probablemente"]
        var random = respuesta[Math.floor(Math.random() * respuesta.length)]

        const embed = new Discord.MessageEmbed()

            .setTitle("[:8ball:] 8ball")
            .addField("[:gear:] **Tu pregunta:**", `${args.join(" ")}`)
            .addField("[:fire:] **Mi respuesta: **", `${random}`)
            .setColor("RANDOM")
            .setThumbnail("https://upload.wikimedia.org/wikipedia/commons/thumb/f/fd/8-Ball_Pool.svg/1024px-8-Ball_Pool.svg.png")
            .setFooter("Comando Sugerido por " + message.member.displayName, message.author.displayAvatarURL())
            .setTimestamp()

        message.channel.send(embed)

    }
}