const Discord = require('discord.js');
const db = require("quick.db")

module.exports = {
  name: "report",
  alias: ["reportar","reporte"],

async execute (client, message, args){

let canal = db.get(`reportschannel_${message.guild.id}`);
if(canal === null) {
    return message.channel.send(`**${message.author.username}**, no hay ningún canal establecido.`)
  }
  
  const user = message.mentions.members.first();
  if(!user) return message.channel.send(`[:gear:] **Mensioname una usuario a reportar**`)
  
  if (message.mentions.users.first().bot) {
        return message.channel.send("[:x:] **No puedes reportar a bots**");
    }
  
  const usuario = message.mentions.members.first()
        if(usuario.id === message.author.id) return message.channel.send("[:x:] **No puedes reportarte a sí mismo** ")

  let razon = args.slice(1).join(' ')
   if(!razon) return message.channel.send(`[:gear:] **Dime una razon para reportar**`)

  const embed = new Discord.MessageEmbed()
    
   .setTitle(':e_mail: | **Reporte**')
   .addField('⚠️ Nuevo Reporte ⚠️', "[:bust_in_silhouette:] **Reporte enviado Por**: `"+message.member.displayName+"` \n[🚷] **Usuario reportado**: <@"+user+">\n[:pencil:] **Reporte**: `"+razon+"`")
   .setThumbnail(`https://www.pinclipart.com/picdir/big/80-805954_desenho-de-carta-email-icono-clipart.png`)
   .setFooter('Hora a la que fue enviado el reporte')
   .setTimestamp()
   .setColor("GREEN")
                  
  client.channels.cache.get(canal).send(embed)
    .then(m => m.react("✅") + m.react("❌"))
  
  message.channel.send("**Su reporte fue enviado al personal**").then(m =>  m.react("✅"))
 }
}