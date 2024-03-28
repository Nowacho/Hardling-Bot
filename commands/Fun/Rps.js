const Discord = require('discord.js');

module.exports = {
  name: "rps",
  alias: ["ppt"],

async execute (client, message, args){

     let embed = new Discord.MessageEmbed()
   
        .setTitle("Reaciona para jugar")
        .setDescription(`\`✂\` **Tijeras**
                        \`🗿\` **Roca**
                        \`📜\` **Papel**`)
        .setFooter("Comando Sugerido Por" + message.member.displayName, message.author.displayAvatarURL())
        .setColor("RANDOM")
        .setTimestamp()
  
        let msg = await message.channel.send(embed)
  
        await msg.react("🗿")
        await msg.react("✂")
        await msg.react("📜")

        const filter = (reaction, user) => {
            return ['🗿', '✂', '📜'].includes(reaction.emoji.name) && user.id === message.author.id;
        }

        const choices = ['🗿', '✂', '📜']
        const me = choices[Math.floor(Math.random() * choices.length)]
        msg.awaitReactions(filter, {max:1, time: 60000, error: ["time"]})
        .then(
            async(collected) => {
                const reaction = collected.first()
         
                let result = new Discord.MessageEmbed()
                  
                .setTitle("[👀] Resultado")
                .addField("**Tu Eligiste**", `${reaction.emoji.name}`)
                .addField("**Yo Eligi**", `${me}`)
              
            await msg.edit(result)
          
                if ((me === "🗿" && reaction.emoji.name === "✂") ||
                (me === "📜" && reaction.emoji.name === "🗿") ||
                (me === "✂" && reaction.emoji.name === "📜")) {
                    message.reply("[😢] **Perdiste**");
            } else if (me === reaction.emoji.name) {
                return message.reply("[🤝] **Empate**");
            } else {
                return message.reply("[🎉] **Ganaste!**");
            }
        })
          
        .catch(collected => {
                message.reply('[❌] **El RPS ha sido cancelado ya que no respondiste a tiempo!**');
            })
  
 }
}