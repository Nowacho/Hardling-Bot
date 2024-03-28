const Discord = require('discord.js');

module.exports = {
  name: "userinfo",
  alias: ["user","client","usuario","informacionusuario","usuarioinfo","infouser"],

execute (client, message, args){

    let estados = {
      "online": "🟢 En Línea",
      "idle": "🟠 Ausente",
      "dnd": "🔴 No molestar",
      "offline": "⚫️ Desconectado/invisible"
    };

    const member = message.mentions.members.first() || message.member

    function formatDate (template, date) {
      var specs = 'YYYY:MM:DD:HH:mm:ss'.split(':')
      date = new Date(date || Date.now() - new Date().getTimezoneOffset() * 6e4)
      return date.toISOString().split(/[-:.TZ]/).reduce(function (template, item, i) {
        return template.split(specs[i]).join(item)
      }, template)
    }

    let badges1 = {
        
      'EARLY_SUPPORTER': '<:Earlysupporter:746029762274656317>',
      'DISCORD_EMPLOYEE': '<:Discordstaff:746029762513862666>',
      'DISCORD_PARTNER': '<:Discordpartner:746029762564194355>',
      'HYPESQUAD_EVENTS': '<:HypesquadEvents:746029762497085550>',
      'HOUSE_BRAVERY': '<:Bravery:957351788770623500>',
      'HOUSE_BRILLIANCE': '<:brilliance:957351788921630771>',
      'BUGHUNTER_LEVEL_1': '<:Bughunter:746029762522120203>',
      'BUGHUNTER_LEVEL_2': '<:Goldbughunter:746029762526576691>',
      'VERIFIED_DEVELOPER': '<:VerifiedBotDeveloper:746029762194964590>',
      'HOUSE_BALANCE': '<:BalanceLogo:957351788921634886>',
      'VERIFIED_BOT': '<:verified:753442204541911081>',
    }    

    let obj = {
    "HOUSE_BRAVERY" : "Bravery" , "VERIFIED_BOT" : "Bot verificado" , "VWERIFIED_DEVELOPER" : "Desarrollador de bots verificado" , "HOUSE_BRILLIANCE" : "Brilliance" , "DISCORD_PARTNER" : "Socio de discord"
    }

    const embed = new Discord.MessageEmbed()
        .setColor("RANDOM")
        .setDescription("**INFORMACIÓN DEL USUARIO:**")
        .addField("**🎫 Nombre**:", "**" + `${member.user.tag}` + "**")
        .addField("**🎟 ID**:", `${member.user.id}` )
        .addField("**📌 Apodo del usuario**:", `${member.nickname !== null ? `${member.nickname}` : 'Ninguno'}`, true)
        .addField("**🛎 Fecha de Ingreso al Servidor:**", formatDate('DD/MM/YYYY, a las HH:mm:ss', member.joinedAt))
        .addField("**📥 Cuenta Creada:**", formatDate('DD/MM/YYYY, a las HH:mm:ss', member.user.createdAt))
        .addField("**🏳️ Insignias:**", member.user.flags.toArray().length ? member.user.flags.toArray().map(badge => badges1[badge]).join(' ') : "No tengo badges")
        .addField("**🎮  Jugando**:", member.user.presence.game != null ? user.presence.game.name : "Nada", true)
        .addField("**🎖 Roles:**", member.roles.cache.map(roles => `\`${roles.name}\``).join(', '))
        .addField("**🎨 Estado**:", "**" + estados[member.user.presence.status] + "**")
        .addField("**🚀 ¿Boostea?**:", member.premiumSince ? '**Estoy boosteando <a:boostingtop:755576533430698084>**' : '**No estoy boosteando**')
        .setThumbnail (member.user.displayAvatarURL({ format: "png", dynamic: true, size: 1024 }))
        .setFooter(`${message.author.username}`, `${message.author.displayAvatarURL()}`)
     message.channel.send(embed)

 }
}