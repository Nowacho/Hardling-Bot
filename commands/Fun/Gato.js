const Discord = require('discord.js');
const db = require("quick.db");

module.exports = {
  name: "tictactoe",
  alias: ["gato","ttt"],

async execute (client, message, args){

 if(!message.mentions.users.first()) return message.channel.send(`[❌] **Por favor mencione a alguien**`)
    var mention = message.guild.member(message.mentions.users.first()) || message.guild.members.cache.get(args[0]);
    if(!mention)
    {
      message.channel.send("[❌] **No mencionaste a nadie para jugar**")
      return;
    }

    const { tictactoe } = require('easy-games-js')
  
    const tic = new tictactoe(mention, message)
    tic.init({ PROVIDE_MEMBER: "[❌] Por favor proporcione un usuario",
              ACCEPT_CHALLENGE: "{user} **¿Aceptas este TicTacToe?**\n escribe `yes` para aceptar", 
              DOESNT_PLAY: "[❌] {user} no acepto tu **TicTacToe**", 
              WICH_SIDE: "**{user}, ¿De qué lado eliges? ¡Escribe \`Fin\` para finalizar el juego!**",
              GAME_OVER: "[🕝] **¡Se acabó el tiempo!**", 
              END: "[🏁] **Fin**", 
              INACTIVITY: "[👏] **¡el juego terminó debido a la inactividad!**",
              WINNER: "[🎉] **Felicidades has ganado** {winner}",
              DRAW: "[🤝] **Es un empate**"})

 }
}