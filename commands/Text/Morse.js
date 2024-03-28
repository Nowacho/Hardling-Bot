const Discord = require('discord.js');

module.exports = {
  name: "morse",
  alias: [],

async execute (client, message, args){

const morse = require('morse');

if(!args[0]) 
  return message.channel.send(`**Opciones**:
🔓 **de** (Decifrar un codigo morse)
🔒 **en** (Cifra un codigo morse)
⚖️ **enden** (Decifrar y Cifra un codigo morse)
`)
  
  let Options = ["de", "en","enden"]
  
  if(!Options.includes(args[0].toLowerCase())) return message.channel.send(":x: Opcion incorrecta!")

  let texto = args.slice(1).join(" ")

  if(args[0] == "de") {

    let decode = morse.decode(texto);

    if(!texto) return

    message.channel.send("`"+decode+"`")

  } if(args[0] == 'en') {

let encode = morse.encode(texto);
    
    if(!texto) return

    message.channel.send("**"+encode+"**")

  } else if(args[0] == "enden") {
    
let encode = morse.encode(texto)
const embed = new Discord.MessageEmbed()
  
  .setTitle("🔮 Morse")
  .addField("🔒 **Encode**",`\`\`\`${encode}\`\`\``)
  .addField("🔓 **Decode**",`\`\`\`${texto}\`\`\``)
  .setFooter("Comando Sugerido Por " + message.member.displayName, message.author.displayAvatarURL())
  .setTimestamp()
  .setColor("RANDOM")
  
  message.channel.send(embed)

  }
  
 }
}