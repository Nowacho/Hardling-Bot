const Discord = require('discord.js');


module.exports = {
    name: "chiste",
    alias: [],

  async  execute (client, message, args){
    
const random = require('chistes-aleatorios'); 
const chiste = await random.chistes(); 
    
message.channel.send(chiste).then(m => m.react("🤣") + m.react("😐"))

    }
}