const Discord = require('discord.js');
const db = require("quick.db")

module.exports = {
  name: "setsuggest",
  alias: ["setsugerencia","colocarsugerencia"],

async execute (client, message, args){


    let lasmenciones = message.mentions.channels.first() || message.guild.channels.cache.get(args[0])

    let noperms = new Discord.MessageEmbed()

            .setTitle("**Error de permiso de usuario!**")
            .setDescription("[❌] **Lo siento, ¡no tienes permisos para usar esto!**")
            .setThumbnail("https://www.pngall.com/wp-content/uploads/2/Staff-Only-Sign-PNG-File.png")
            .setColor("RANDOM")
            .setFooter("Comando Sugerido por " + message.member.displayName, message.author.displayAvatarURL())
            .setTimestamp()

            var perms = message.member.hasPermission("ADMINISTRATOR")
  
            if(!perms) return message.channel.send(noperms);

    if(!lasmenciones) {
      return message.channel.send(`**${message.author.username}**, por favor, menciona o pone la ID del canal para las sugerencias.`)
    } 
        
    if(lasmenciones.type == "voice" || lasmenciones.type == "category") {
      return message.channel.send(`**${message.author.username}**, por favor, menciona o pone la ID de un canal de TEXTO.`)
    }
  
    if(!lasmenciones.permissionsFor(message.guild.me).has("VIEW_CHANNEL")) {
      return message.channel.send(`**${message.author.username}**, no tengo permisos de "Ver canal" por el canal ${lasmenciones} para ver poder ver el canal y hacer mi trabajo.`) 
    }
    
    db.set(`suggestchannel_${message.guild.id}`, lasmenciones.id)
    message.channel.send(`El nuevo canal de sugerencias es ${lasmenciones}.`)
  }
}