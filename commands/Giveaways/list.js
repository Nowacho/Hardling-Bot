const ms = require('ms');
const Discord = require("discord.js");

module.exports = {
  name: "glist",
  alias: ["list","gl"],

execute (client, message, args){

  let noperms = new Discord.MessageEmbed()

            .setTitle("**Error de permiso de usuario!**")
            .setDescription("[❌] **Lo siento, ¡no tienes permisos para usar esto!**")
            .setThumbnail("https://www.pngall.com/wp-content/uploads/2/Staff-Only-Sign-PNG-File.png")
            .setColor("RANDOM")
            .setFooter("Comando Sugerido por " + message.member.displayName, message.author.displayAvatarURL())
            .setTimestamp();

      var perms = message.member.hasPermission("MANAGE_GUILD")
      if(!perms) return message.channel.send(noperms);
  
    let giveaways = []
    const giveaways1 = client.giveawaysManager.giveaways.filter((g) => g.guildID === message.guild.id)
    const giveaways2 = giveaways1.filter((g) => !g.ended)
    const giveaways3 = giveaways2.forEach((thisGiveaway)=>{
        let winners = ''
        if(thisGiveaway.winnerCount == 1){
            winners = 'gandor'
        }else{
            winners = 'ganadores'
        }
        giveaways.push(`\`${thisGiveaway.messageID}\` | <#${thisGiveaway.channelID}> | **${thisGiveaway.winnerCount}** ${winners} | Premio: **${thisGiveaway.prize}** | [Giveaway Link](https://discord.com/channels/${message.guild.id}/${thisGiveaway.channelID}/${thisGiveaway.messageID})`)
    })
  
    const embed = new Discord.MessageEmbed()
    
    .setTitle('<a:Verificado:967860366606467205> Giveaways Activos')
    .setDescription(giveaways.join('\n') || '[❌] **No hay Giveaways activos actualmente**')
  
    message.channel.send(embed)
    }
  }