const Discord = require('discord.js');

module.exports = {
  name: "aki",
  alias: ["akinator"],

async execute (client, message, args){

const akinator = require("mech-aki");
    let Discord = require("discord.js");
    const embed = new Discord.MessageEmbed()
      .setColor("RANDOM");

    var aki = new akinator("es") 
    var pregunta = await aki.empezar();
    embed.setAuthor(pregunta.pregunta); 
    var respuestas = new Map([
      ["✅", 0],
      ["❌", 1],
      ["❓", 2],
      ["🤔", 3],
      ["😞", 4],
      ["🔙", -9]
    ]); // Estás serian la respuesta, osea lo que significa cada emoji, del array que vamos a hacer.

    var reacciones = ["✅", "❌", "❓", "🤔", "😞", "🔙"]; // hacemos el array de emojis, que serán las respuestas

    embed.addField(
      "Opciones",
      `✅: Sí\n❌: No\n❓: No lo sé\n🤔: Probablemente sí\n😞: Probablemente no\n🔙: Atrás`,
      false
    ); // agregamos un Field al embed, que dirá lo que significa cada emoji, para que el usuario no se confunda.

    var msg = await message.reply(embed); 
    for (let index = 0; index < reacciones.length; index++)
      await msg.react(reacciones[index]); 

    while (aki.progreso < 85) {
      console.log(aki.progreso);
      var respuesta = await new Promise((resolve, reject) => {
        var collector = msg.createReactionCollector(
          (reaction, user) =>
            !user.bot &&
            user.id === message.author.id &&
            reaction.message.channel.id === msg.channel.id,
          { time: 60000 }
        );
        collector.on("collect", r => {
          resolve(r.emoji.name);
          collector.stop();
        });
        collector.on("end", collected => resolve(null));
      });
      if (!respuesta) return msg.delete();
      var respuesta_num = respuestas.get(respuesta);
      pregunta =
        respuesta_num != -9
          ? await aki.siguiente(respuesta_num)
          : await aki.atras();
      embed.setAuthor(pregunta.pregunta);
      await msg.edit(embed);
    }

    var personajes = await aki.respuestas();
    embed.setAuthor("✅ Tu personaje es: " + personajes[0].nombre);
    embed.setDescription(personajes[0].descripcion);
    embed.setImage(personajes[0].foto);
    embed.fields = [];
    msg.delete();
    message.reply(embed); 

 }
}