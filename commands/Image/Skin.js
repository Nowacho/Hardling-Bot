const Discord = require('discord.js');

module.exports = {
    name: "skin",
    alias: [],

    execute: function (client, message, args) {

        let skin = args.join(' ')

        if (!args[0]) {
            return message.channel.send("[:gear:] **Te falto poner el nombre de la skin** *(tiene que ser premium)*")
        }

        let url = `https://minecraftskinstealer.com/api/v1/skin/render/fullbody/${skin}/700`;

        const embed = new Discord.MessageEmbed()
            .setColor('RANDOM')
            .setTitle("[:fire:] Skin Minecraft")
            .setDescription("[:sunglasses:] Skin del usuario: "+skin+"")
            .setImage(url)
            .setThumbnail("https://cdn.pixabay.com/photo/2016/11/11/14/49/minecraft-1816996_1280.png")
            .setFooter("Comando Sugerido por " + message.member.displayName, message.author.displayAvatarURL())
            .setTimestamp()

        message.channel.send(embed)

    }
}