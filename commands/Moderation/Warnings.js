const Discord = require('discord.js')
const db = require("quick.db");

module.exports = {
    name: "warns",
    alias: ["warnings"],

    execute (client, message, args){

        let noperms = new Discord.MessageEmbed()

            .setTitle("**Error de permiso de usuario!**")
            .setDescription("[❌] **Lo siento, ¡no tienes permisos para usar esto!**")
            .setThumbnail("https://www.pngall.com/wp-content/uploads/2/Staff-Only-Sign-PNG-File.png")
            .setColor("RANDOM")
            .setFooter("Comando Sugerido por " + message.member.displayName, message.author.displayAvatarURL())
            .setTimestamp()

        var perms = message.member.hasPermission("KICK_MEMBERS")
        if(!perms) return message.channel.send(noperms);

        const user = message.mentions.members.first() || message.author;

        let warnings = db.get(`warnings_${message.guild.id}_${user.id}`);

        if (warnings === null) warnings = 0;

        message.channel.send(`${user} tiene **${warnings}** warn(s)`);


    }
}