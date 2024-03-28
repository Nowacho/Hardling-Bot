const Discord = require('discord.js');
const BombSweeper = require("bombsweeper.js"); 

module.exports = {
  name: "buscaminas",
  alias: ["minas","minefinder"],

execute (client, message, args){

const emojis = {
 0: "||:zero:||",
 1: "||:one:||",
 2: "||:two:||",
 3: "||:three:||",
 4: "||:four:||",
 5: "||:five:||",
 6: "||:six:||",
 7: "||:seven:||",
 8: "||:eight:||",
 '*': "||:bomb:||"
}; 

let filas = 10;
let cols = 10;
const bombsweeper = new BombSweeper(filas, cols);

let bombas = 20;
bombsweeper.PlaceBombs(bombas);

let tablero = bombsweeper.board;

for (let j = 0; j<10; j++){
 for (let i = 0; i<10; i++){
  tablero[i][j] = emojis[tablero[i][j]];
 }
}

message.channel.send(tablero);

 }
}