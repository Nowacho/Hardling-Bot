const Discord = require('discord.js');

module.exports = {
  name: "boobs",
  alias: ["tetas"],

async execute (client, message, args){

const nclient = require('nekos.life');
const superagent = require('superagent');
const neko = new nclient();
  
let victim = message.mentions.users.first() || (args.length > 0 ? message.users.cache.filter(e => e.username.toLowerCase().includes(args.join(" ").toLowerCase())).first(): message.author) || message.author;
        const { body } = await superagent

      var errMessage = "[❌] `Error | Este canal no es NSFW`";
  if (!message.channel.nsfw) {
      message.react('💢');

      return message.reply(errMessage)
      .then(msg => {
      msg.delete({ timeout: 30000 })
      })
      
  }

    var lo = new Discord.MessageEmbed()
                .setDescription(`Loading...👀`)

    message.channel.send(lo).then(m => {

        superagent.get('https://nekobot.xyz/api/image').query({ type: 'boobs'}).end((err, response) => {

            var embed_nsfw = new Discord.MessageEmbed()
                .setDescription(`:underage: **La Imagen no te Carga? [Clickea Aqui](${response.body.message})**`)
                .setImage(response.body.message)

            
            m.edit(embed_nsfw);

   });
    });

 }
}