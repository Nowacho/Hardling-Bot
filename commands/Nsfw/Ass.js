const Discord = require('discord.js');

module.exports = {
  name: "ass",
  alias: ["culos","culo"],

execute (client, message, args){
    if(!message.channel.nsfw) { return message.channel.send(":x: `Error | Este canal no es NSFW`") }
    const DabiImages = require("dabi-images");
    const DabiClient = new DabiImages.Client();
    DabiClient.nsfw.real.ass()
      .then((res) => {
        const embed = new Discord.MessageEmbed()
      .setColor("RANDOM")
      .setImage(res.url);
        message.channel.send(embed)
      })
      .catch((err) => {
        console.error('ERR:', err)
      }) 
 }
}