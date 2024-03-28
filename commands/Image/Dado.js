const Discord = require('discord.js');

module.exports = {
  name: "reroll",
  alias: ["dado"],

execute (client, message, args){

let links = ["https://cdn.discordapp.com/attachments/684757256658747451/794277079243685888/dado-1.png",
             "https://cdn.discordapp.com/attachments/684757256658747451/794277107537805332/dado-2.png",
             "https://cdn.discordapp.com/attachments/684757256658747451/794277142800105483/dado-3.png", 
             "https://cdn.discordapp.com/attachments/684757256658747451/794277176592826368/dado-4.png",
             "https://cdn.discordapp.com/attachments/684757256658747451/794277207619010590/dado-5.png",
             "https://cdn.discordapp.com/attachments/684757256658747451/794277245157113866/dado-6.png"]
  
  var dado = links[Math.floor(Math.random() * links.length)]
  var dado2 = links[Math.floor(Math.random() * links.length)]
  
  const embed = new Discord.MessageEmbed() 

  .setTitle(`${message.author.username} ha tirado el dado.`)
  .addField("`Reaciona a `🔄 `para volver a tirar del dado`","**El dado a caido en:**")
  .setImage(dado) 
  .setFooter("Comando Sugerido Por " + message.member.displayName, message.author.displayAvatarURL())
  .setColor("RANDOM")
  .setTimestamp()

  const embed2 = new Discord.MessageEmbed() 

  .setTitle(`${message.author.username} ha tirado el dado.`)
  .setDescription("El dado a caido en:")
  .setImage(dado2) 
  .setFooter("Comando Sugerido Por " + message.member.displayName, message.author.displayAvatarURL())
  .setColor("RANDOM")
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