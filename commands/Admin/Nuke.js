const Discord = require('discord.js');

module.exports = {
  name: "nuke",
  alias: [],

async execute (client, message, args){

    let noperms = new Discord.MessageEmbed()

            .setTitle("**Error de permiso de usuario!**")
            .setDescription("[❌] **Lo siento, ¡no tienes permisos para usar esto!**")
            .setThumbnail("https://www.pngall.com/wp-content/uploads/2/Staff-Only-Sign-PNG-File.png")
            .setColor("RANDOM")
            .setFooter("Comando Sugerido por " + message.member.displayName, message.author.displayAvatarURL())
            .setTimestamp()

            var perms = message.member.hasPermission("MANAGE_CHANNELS")
  
            if(!perms) return message.channel.send(noperms);

        if (!message.guild.me.permissions.has("MANAGE_CHANNELS")) return message.channel.send("[:x:] **Necesito el Permiso de** `MANAGE_CHANNELS` **para hacer esta acion**");

        try {
            message.channel.clone().then((ch) => {
                ch.setParent(message.channel.parent.id);
                ch.setPosition(message.channel.position);
                ch.setTopic(message.channel.topic);
                ch.setNSFW(message.channel.nsfw);
                ch.setRateLimitPerUser(message.channel.rateLimitPerUser);
                message.channel.delete();

                const embedChNuked = new Discord.MessageEmbed()
                    .setDescription(`<#${ch.id}> Canal Nukeado :radioactive:`)
                    .setImage("https://media0.giphy.com/media/oe33xf3B50fsc/200.gif")
                    .setColor("RANDOM")
                    .setFooter("Nukeado Por " + message.member.displayName, message.author.displayAvatarURL())
                    .setTimestamp()
                ch.send(embedChNuked);

            })
        } catch (e) {
            message.channel.send(`<:HBwarning:783351287944970251> | **${e.name}:** ${e.message}`);
        }
    }
}