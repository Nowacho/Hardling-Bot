const Discord = require('discord.js');
const ms = require('ms');

module.exports = {
  name: "gstart",
  alias: ["start","giveawey","sorteo"],

async execute (client, message, args){
  
    const messageArray = message.content.split(" ");
        let noperms = new Discord.MessageEmbed()

            .setTitle("**Error de permiso de usuario!**")
            .setDescription("[❌] **Lo siento, ¡no tienes permisos para usar esto!**")
            .setThumbnail("https://www.pngall.com/wp-content/uploads/2/Staff-Only-Sign-PNG-File.png")
            .setColor("RANDOM")
            .setFooter("Comando Sugerido por " + message.member.displayName, message.author.displayAvatarURL())
            .setTimestamp()

            var perms = message.member.hasPermission("ADMINISTRATOR")
  
            if(!perms) return message.channel.send(noperms);
    var item = "";
    var time;
    var winnerCount;
    for (var i = 1; i < args.length; i++) {
      item += (args[i] + " ");
    }
    time = args[0];
    if (!time) {
      return message.channel.send(`Invalid duration provided`);
    }
    if (!item) {
      item = "No title"
    }
    var embed = new Discord.MessageEmbed();
    embed.setColor("GREEN");
    embed.setTitle("🥳New Giveaway");
    embed.setDescription("**" + item + "**");
    embed.addField(`Duration : `, ms(ms(time), {
      long: true
    }), true);
    embed.setFooter("React to this message with 🎉 to participate !");
    var embedSent = await message.channel.send(embed);
    embedSent.react("🎉");

    setTimeout(async () => {
      try{
        const peopleReactedBot = await embedSent.reactions.cache.get("🎉").users.fetch();
        var peopleReacted = peopleReactedBot.array().filter(u => u.id !== client.user.id);
      }catch(e){
        return message.channel.send(`An unknown error happened during the draw of the giveaway **${item}** : `+"`"+e+"`")
      }
      var winner;

      if (peopleReacted.length <= 0) {
        return message.channel.send(`Not enough participants to execute the draw of the giveaway **${item}** :(`);
      } else {
        var index = Math.floor(Math.random() * peopleReacted.length);
        winner = peopleReacted[index];
      }
      if (!winner) {
        message.channel.send(`An unknown error happened during the draw of the giveaway **${item}**`);
      } else {
        console.log(`Giveaway ${item} won by ${winner.toString()}`)
        message.channel.send(`🎉 **${winner.toString()}** has won the giveaway **${item}** ! Congratulations ! 🎉`);
      }
    }, ms(time));
}
}