const Discord = require('discord.js');


module.exports = {
  name: "coinflip",
  alias: ['cointoss', 'criptomoneda', 'coin', 'flip',"moneda","girarmoneda"],

async execute (client, message, args){


let imagen = [
  'https://www.fundacionaquae.org/wp-content/uploads/2017/02/Bitcoin.png.webp',
  'https://static.currency.com/img/media/eth@2x.png'
]
   var imagenrandom = imagen[Math.floor(imagen.length * Math.random())]
   var imagenrandom2 = imagen[Math.floor(imagen.length * Math.random())]
  
    const embed = new Discord.MessageEmbed() 
      
      .setTitle(`${message.author.username} lanzo una Criptomoneda 🪙`)
      .addField("`Reaciona a `🔄 `para volver a lanzar una Criptomoneda`","**El Criptomoneda a caido en:**")
      .setImage(imagenrandom)
      .setColor("RANDOM")
      .setFooter('Comando Sugerido por ' + message.member.displayName, message.author.displayAvatarURL())
      .setTimestamp()

  const embed2 = new Discord.MessageEmbed() 
      
      .setTitle(`${message.author.username} lanzo una Criptomoneda 🪙`)
      .setDescription("la moneda callo en:")
      .setImage(imagenrandom2)
      .setColor("RANDOM")
      .setFooter('Comando Sugerido por ' + message.member.displayName, message.author.displayAvatarURL())
      .setTimestamp()
  
    message.channel.send(embed).then(editado =>{

      editado.react('🔄')
      
      editado.awaitReactions((reaction,user) =>{
        if (message.author.id !== user.id || user.bot) return;
        if(reaction.emoji.name === '🔄'){
            reaction.users.remove(user.id)
            editado.edit(embed2)
            reaction.users.remove(editado)
        }
     })
   })

 }
}