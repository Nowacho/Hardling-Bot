const Discord = require('discord.js');
const figlet = require("figlet");

module.exports = {
  name: "ascii",
  alias: ["textascii","textoascii"],

async execute (client, message, args){

 let p = args.join(" ")

figlet(p, function(err, data) {
    if (!p) {
        message.channel.send('[:gear:] **Escribe el texto al cual convierta**');
        return;
    }
    message.channel.send(`\`\`\`${data}\`\`\``)
});  
  
 }
}