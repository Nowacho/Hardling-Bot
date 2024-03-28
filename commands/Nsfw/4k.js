const Discord = require('discord.js');

module.exports = {
  name: "4k",
  alias: [],

async execute (client, message, args){

const superagent = require('superagent');
const nclient = require('nekos.life');
const neko = new nclient();


  
let victim = message.mentions.users.first() || (args.length > 0 ? message.users.cache.filter(e => e.username.toLowerCase().includes(args.join(" ").toLowerCase())).first(): message.author) || message.author;
        const { body } = await superagent

      var errMessage = ":x: `Error | Este canal no es NSFW`";
  if (!message.channel.nsfw) {
      message.react('💢');

      return message.reply(errMessage)
      .then(msg => {
      msg.delete({ timeout: 30000 })
      })
      
  }

    var lo = new Discord.MessageEmbed()
                .setDescription(`Loading...<a:loading:866051662391934986>`)
                .setTimestamp()

    message.channel.send(lo).then(m => {

        superagent.get('https://nekobot.xyz/api/image').query({ type: '4k'}).end((err, response) => {

            var embed_nsfw = new Discord.MessageEmbed()
                .setDescription(`:underage: **La Imagen no te Carga? [Clickea Aqui](${response.body.message})**`)
                .setImage(response.body.message)
            
            m.edit(embed_nsfw);

   });
    });

 }
}