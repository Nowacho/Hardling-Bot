const ms = require('ms');
const Discord = require('discord.js');

module.exports = {
  name: "gstart",
alias: ["start"],

execute (client, message, args){

  var prefix = client.config["Bot_Info"].prefix;
  
      let noperms = new Discord.MessageEmbed()

            .setTitle("**Error de permiso de usuario!**")
            .setDescription("[❌] **Lo siento, ¡no tienes permisos para usar esto!**")
            .setThumbnail("https://www.pngall.com/wp-content/uploads/2/Staff-Only-Sign-PNG-File.png")
            .setColor("RANDOM")
            .setFooter("Comando Sugerido por " + message.member.displayName, message.author.displayAvatarURL())
            .setTimestamp();

      var perms = message.member.hasPermission("MANAGE_GUILD")
      if(!perms) return message.channel.send(noperms);
   
    var giveawayChannel = message.mentions.channels.first();
    if(!giveawayChannel){
        var giveawayChannel = message.channel;
    }

    let giveawayDuration = args[0];
    if(!giveawayDuration || isNaN(ms(giveawayDuration))){
      
    let embedDuration = new Discord.MessageEmbed()

        .setTitle("<a:manuten:967863368633425980> Giveawey help")
        .setDescription(`
        💡**Dime cuanto tiempo quieres que dure el Giveawey** 

        <a:Verificado:967860366606467205> **Formato:**
        <a:Arrow:967862282828791848> ${prefix}gstart (Tiempo[s,m,h,d]) (Ganadores) (Premio)

        🏷️**Ejemplo:**
        <a:Arrow:967862282828791848> ${prefix}gstart 30s 5 Nitro Classic
        <a:Arrow:967862282828791848> ${prefix}gstart 20m 4 VIP+
        <a:Arrow:967862282828791848> ${prefix}gstart 12h 1 Nitro + VIP`)
        .setThumbnail("https://media.hearthpwn.com/attachments/96/921/tada.png")
        .setColor("RANDOM")
        .setFooter("Comando Sugerido por " + message.member.displayName, message.author.displayAvatarURL())
        .setTimestamp()
      
      return message.channel.send(embedDuration);
    }

    let giveawayNumberWinners = parseInt(args[1]);
    if(isNaN(giveawayNumberWinners) || (parseInt(giveawayNumberWinners) <= 0)){
      
    let embedNumberWinners = new Discord.MessageEmbed()

        .setTitle("<a:manuten:967863368633425980> Giveawey help")
        .setDescription(`
        💡**Cuantos ganadores podran ganar?** 

        <a:Verificado:967860366606467205> **Formato:**
        <a:Arrow:967862282828791848> ${prefix}gstart (Tiempo[s,m,h,d]) (Ganadores) (Premio)

        🏷️**Ejemplo:**
        <a:Arrow:967862282828791848> ${prefix}gstart 30s 5 Nitro Classic
        <a:Arrow:967862282828791848> ${prefix}gstart 20m 4 VIP+
        <a:Arrow:967862282828791848> ${prefix}gstart 12h 1 Nitro + VIP`)
        .setThumbnail("https://media.hearthpwn.com/attachments/96/921/tada.png")
        .setColor("RANDOM")
        .setFooter("Comando Sugerido por " + message.member.displayName, message.author.displayAvatarURL())
        .setTimestamp()
      
      return message.channel.send(embedNumberWinners);
      
    }else
    if(giveawayNumberWinners > 20){
        return message.channel.send('[❌] **El maximo de ganadores es 20**');
    }

    let giveawayPrize = args.slice(2).join(' ');
    if(!giveawayPrize){
      
    let embedPrize = new Discord.MessageEmbed()

        .setTitle("<a:manuten:967863368633425980> Giveawey help")
        .setDescription(`
        💡**Que premio vas a dar?** 

        <a:Verificado:967860366606467205> **Formato:**
        <a:Arrow:967862282828791848> ${prefix}gstart (Tiempo[s,m,h,d]) (Ganadores) (Premio)

        🏷️**Ejemplo:**
        <a:Arrow:967862282828791848> ${prefix}gstart 30s 5 Nitro Classic
        <a:Arrow:967862282828791848> ${prefix}gstart 20m 4 VIP+
        <a:Arrow:967862282828791848> ${prefix}gstart 12h 1 Nitro + VIP`)
        .setThumbnail("https://media.hearthpwn.com/attachments/96/921/tada.png")
        .setColor("RANDOM")
        .setFooter("Comando Sugerido por " + message.member.displayName, message.author.displayAvatarURL())
        .setTimestamp()
      
      return message.channel.send(embedPrize);
    }
    
    client.giveawaysManager.start(giveawayChannel, {
        time: ms(giveawayDuration),
        prize: giveawayPrize,
        winnerCount : giveawayNumberWinners,
        hostedBy: false,
        messages: {
           giveaway:  "🎉 **GIVEAWAY** 🎉",
                giveawayEnded: "🎉 **GIVEAWAY FINALIZADO** 🎉",
                timeRemaining: `
                <a:Arrow:967862282828791848> Termina En: {duration}
                <a:Arrow:967862282828791848> Hosteado Por: <@${message.member.id}>
                <a:Arrow:967862282828791848> Ganador(es): ${giveawayNumberWinners}`,
                inviteToParticipate: "**Reaciona al emoji 🎉 para participar!**",
                winMessage: "🎉 FELICIDADES {winners} ganaste **{prize}**!",
                embedFooter: "Hardling Giveaways",
                noWinner: "[❌] ***Giveaway cancelado, no hay participaciones**.",
                hostedBy: " ",
                winners: "Ganador(es)",
                endedAt: "Termino en",
                units: {
                    seconds: "Segundos",
                    minutes: "Minutos",
                    hours: "Horas",
                    days: "Dias",
                    pluralS: false
                }
            }
        });
 }
}