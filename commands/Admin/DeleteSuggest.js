const Discord = require('discord.js');
const db = require("quick.db")

module.exports = {
  name: "deletesuggest",
  alias: ["removesuggest","delsuggest","removersugerencia"],

async execute (client, message, args){

    let noperms = new Discord.MessageEmbed()

            .setTitle("**Error de permiso de usuario!**")
            .setDescription("[❌] **Lo siento, ¡no tienes permisos para usar esto!**")
            .setThumbnail("https://www.pngall.com/wp-content/uploads/2/Staff-Only-Sign-PNG-File.png")
            .setColor("RANDOM")
            .setFooter("Comando Sugerido por " + message.member.displayName, message.author.displayAvatarURL())
            .setTimestamp()

            var perms = message.member.hasPermission("ADMINISTRATOR")
            if(!perms) return message.channel.send(noperms);
    
    const faltaelcanal = await db.get(`suggestchannel_${message.guild.id}`, args[0])
  
    if(!faltaelcanal) return message.channel.send(`**${message.author.username}**, no hay ningun canal establecido por el Servidor.`) 
    
    db.delete(`suggestchannel_${message.guild.id}`)
    message.channel.send(`El canal de sugerencias fue borrado de la base de datos.`)

 }
}