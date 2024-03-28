const { MessageEmbed } = require('discord.js')
const Discord = require('discord.js');

module.exports = {
    name: "kick",
    alias: [],

    execute (client, message, args){

        var botperms = message.guild.me.hasPermission("KICK_MEMBERS")
        if (!botperms) return message.channel.send("[:gear:] **No tengo permisos para kickear usuarios**")

            let noperms = new MessageEmbed()

            .setTitle("**Error de permiso de usuario!**")
            .setDescription("[❌] **Lo siento, ¡no tienes permisos para usar esto!**")
            .setThumbnail("https://www.pngall.com/wp-content/uploads/2/Staff-Only-Sign-PNG-File.png")
            .setColor("RANDOM")
            .setFooter("Comando Sugerido por " + message.member.displayName, message.author.displayAvatarURL())
            .setTimestamp()

            var perms = message.member.hasPermission("KICK_MEMBERS")
            if(!perms) return message.channel.send(noperms);

        const usuario = message.mentions.members.first()
        if(!usuario) return message.channel.send("[:gear:] **Debes de mensionar al usuario**")
        if(usuario.id === message.author.id) return message.channel.send("[:x:] **No te puedes kickear a ti mismo** ")

        const razon = args.slice(1).join(' ')
        if(!razon) return message.channel.send("[:gear:] **Debes de poner la razon**")

        message.guild.member(usuario).kick(razon);
        message.channel.send(`[:white_check_mark:] **El usuario ${usuario} Hasido kickeado del servidor correctamente**`)
    }
}