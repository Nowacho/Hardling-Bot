const math = require('math-expression-evaluator');
const stripIndents = require('common-tags').stripIndents;
const Discord = require('discord.js');

module.exports = {
  name: "calc",
  alias: ["calculadora","matematicas"],

execute (client, message, args){

       if(message.guild === null)return;

    if(args.length < 1) {
	    return message.channel.send(`[❌] **Dime una ecuacion para responder**
                  **Ejemplo:** \`8 + 15\``)
    }
			
    const question = args.join(' ');

    let answer;
    if(question.indexOf('1 + 1') > -1) {
        answer = 'Brouh que paso ahi :/';
    } else {
        try {
            answer = math.eval(question);
        } catch (err) {
          message.channel.send("[❌] **Ecuacion invalida**");
          return;
        }
    }

        const calc = new Discord.MessageEmbed()
    
              .setTitle("[🧮] Calculadora")
              .addField("Ecuacion: ", `\`\`\`${question}\`\`\``)
              .addField("Respuesta: ", `\`\`\`${answer}\`\`\``)
              .setFooter("Comando Sugerido Por" + message.member.displayName, message.author.displayAvatarURL())
              .setColor("RANDOM")
             .setTimestamp()
  
          message.channel.send(calc);

 }
}