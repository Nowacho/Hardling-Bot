const ms = require('ms');
const Discord = require('discord.js');

module.exports = {
  name: "51124455742",
  alias: [],

async execute (client, message, args){
    
    let giveawayChannel = ''
    let giveawayDuration = ''
    let giveawayNumberWinners = ''
    let giveawayPrize = ''
    let status = ''

      let noperms = new Discord.MessageEmbed()

            .setTitle("**Error de permiso de usuario!**")
            .setDescription("[❌] **Lo siento, ¡no tienes permisos para usar esto!**")
            .setThumbnail("https://www.pngall.com/wp-content/uploads/2/Staff-Only-Sign-PNG-File.png")
            .setColor("RANDOM")
            .setFooter("Comando Sugerido por " + message.member.displayName, message.author.displayAvatarURL())
            .setTimestamp()

      var perms = message.member.hasPermission("MANAGE_GUILD")
      if(!perms) return message.channel.send(noperms);

    // Giveaway channel
    async function part1(){
        await message.channel.send(`[⚙️] **Mensioname un canal** \nEscribe \`cancel\` para cancelar el proceso.`)
        await message.channel.awaitMessages(m => m.author.id == message.author.id,
        {max: 1, time: 1800000}).then(collected => {
            if (collected.first().content.toLowerCase() == 'cancel') {
                message.channel.send('[❌] **Comando cancelado**')
                status = 1
                return
            }else{
                giveawayChannel = collected.first().mentions.channels.first()
            if(!giveawayChannel){
                message.reply('[❌] **No has especificado un canal**')
              
            }}
        }).catch(() => {
            message.reply('[❌] **No hay respuesta después de 30 minutos, intente denuevo el comando.**');
            status = 1
    })
    }

    // Giveaway duration
    async function part2(){
        await message.channel.send(`[⚙️] **Especifica el tiempo del giveawey** \nEscribe \`cancel\` para cancelar el proceso.`)
        await message.channel.awaitMessages(m => m.author.id == message.author.id,
        {max: 1, time: 1800000}).then(collected => {
            if (collected.first().content.toLowerCase() == 'cancel') {
                message.channel.send('[❌] **Comando cancelado**')
                status = 1
                return
            }else
            if(isNaN(ms(collected.first().content.toLowerCase()))){
                message.channel.send('[❌] **No especificaste el tiempo**');
               
            }else{
                giveawayDuration = collected.first().content
            }
        }).catch(() => {
            message.reply('[❌] **No hay respuesta después de 30 minutos, intente denuevo el comando.**');
            status = 1
    })
    }

    // Number of winners
    async function part3(){
        await message.channel.send(`[⚙️] **Cuantos Ganadores van a aver?** \nEscribe \`cancel\` para cancelar el proceso.`)
        await message.channel.awaitMessages(m => m.author.id == message.author.id,
        {max: 1, time: 1800000}).then(collected => {
            if (collected.first().content.toLowerCase() == 'cancel') {
                message.channel.send('[❌] **Comando cancelado**')
                status = 1
                return
            }else
            if(isNaN(collected.first().content.toLowerCase()) || (parseInt(collected.first().content.toLowerCase()) < 0)){
                message.channel.send('[❌] **Expecifica un numero valido de ganadores');
                
            }else 
            if(collected.first().content.toLowerCase() > 15){
                message.channel.send('[❌] **El maximo de ganadores es 15**');
                status = 1
                return
            }else{
                giveawayNumberWinners = collected.first().content
            }
        }).catch(() => {
            message.reply('[❌] **No hay respuesta después de 30 minutos, intente denuevo el comando.**');
            status = 1
    })
    }

    // Giveaway prize
    async function part4(){
        await message.channel.send(`[⚙️] **Cual es el premio que vas a dar?** \nEscribe \`cancel\` para cancelar el proceso.`)
        await message.channel.awaitMessages(m => m.author.id == message.author.id,
        {max: 1, time: 1800000}).then(collected => {
            if (collected.first().content.toLowerCase() == 'cancel') {
                message.channel.send('[❌] **Comando cancelado**')
                status = 1
                return
            }else{
                giveawayPrize = collected.first().content
            }
        }).catch(() => {
            message.reply('No answer after 30 minutes, please try the command again.');
            status = 1
    })
    }

    // Start the giveaway
    async function part5(){
        client.giveawaysManager.start(giveawayChannel, {
            // The giveaway duration
            time: ms(giveawayDuration),
            // The giveaway prize
            prize: giveawayPrize,
            // The giveaway winner count
            winnerCount: giveawayNumberWinners,
            // Who hosts this giveaway
            hostedBy: message.author,
            // Messages
            messages: {
                giveaway:  "@everyone\n\n 🎉 **GIVEAWAY** 🎉",
                giveawayEnded:  "🎉 **GIVEAWAY FINALIZADO** 🎉",
                timeRemaining: "⏰ **Tiempo restante**: {duration}!",
                inviteToParticipate: "Reaciona al emoji 🎉 para participar!",
                winMessage: "🎉 {winners} ganó **{prize}**!",
                embedFooter: "Hardling Development Giveaways",
                noWinner: "Giveaway cancelado, no hay participaciones.",
                hostedBy: "Hosteado Por: {user}",
                winners: "Ganador(es)",
                endedAt: "Termina en",
                units: {
                    seconds: "segundos",
                    minutes: "minutos",
                    hours: "horas",
                    days: "dias",
                    pluralS: false
                }
            }
        });

        message.channel.send(`🎉 **Giveaway inicio en el canal de** <#${giveawayChannel.id}>`);
    }

    async function main(){
        await part1()
        if(status) return
        await part2()
        if(status) return
        await part3()
        if(status) return
        await part4()
        if(status) return
        await part5()
        }
  main()
 }
}
