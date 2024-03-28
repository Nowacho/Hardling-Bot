const { MessageEmbed } = require('discord.js')
const Discord = require('discord.js');

module.exports = {
    name: "clear",
    alias: ["vaciar"],

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

        const botperms = message.guild.me.hasPermission("MANAGE_MESSAGES")
        if(!botperms) return message.channel.send("[:x:] **No tengo permisos para ejecutar el comando**")

        const valor = parseInt(args[0]);
        if(!valor) return message.channel.send("[:gear:] **Debes de escribir la cantidad de messajes a eliminar**  *#Ejemplo: -Clear 99*")
        if (valor >= 100) return message.channel.send("[:gear:] **No puedes eliminar mas de 100**")

        message.delete();
        message.channel.bulkDelete(valor);
        message.channel.send(`[:white_check_mark:] **Se han eliminado ${valor} mesajes correctamente**`).then(msg => msg.delete({ timeout: 3000 }));
      

    }
}