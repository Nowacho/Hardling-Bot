const Discord = require('discord.js');

module.exports = {
    name: "staff",
    alias: ["staffhelp","helpstaff","cstaff","categorystaff"],

 execute (client, message, args){

   var prefix = client.config["Bot_Info"].prefix;

            let noperms = new Discord.MessageEmbed()

            .setTitle("**Error de permiso de usuario!**")
            .setDescription("[❌] **Lo siento, ¡no tienes permisos para usar esto!**")
            .setThumbnail("https://www.pngall.com/wp-content/uploads/2/Staff-Only-Sign-PNG-File.png")
            .setColor("RANDOM")
            .setFooter("Comando Sugerido por " + message.member.displayName, message.author.displayAvatarURL())
            .setTimestamp()

            var perms = message.member.hasPermission("KICK_MEMBERS","BAN_MEMBERS")
            if(!perms) return message.channel.send(noperms);

// (✨New)
// (⬆️Update)      
// (⚙️Fix)
// (🔄Soon)
   
//-------- Staff Commands --------// //Base para agregar mas comandos | [] ** ** - \` \` |
const staffcommands = "`UnHide` `Hide` `UnLock` `Lock` `Ban` `Kick` `UnBan` `Warn` `Warns` `VoiceKick` `SlowMode` `AddRole` `RemoveRole`"
  const staffdescription = `
[📥] **UnHide** - \`Desbloquea la vista de un canal\`
[📤] **Hide** - \`Bloquea la vista de un canal\`
[🔓] **UnLock** - \`Desbloquea el chat de un cansal\`
[🔒] **Lock** - \`Bloquea el chat de un canal\`
[🔊] **VoiceKick** - \`Saca a alguien de un canal de voz\` 
[🦥] **SlowMode** - \`Pon modo lento para un canal\`
[➕] **AddRole** - \`Agrega un rol a un usuario\`
[➖] **RemoveRole** - \`Quitale un rol a un usuario\`
[📊] **Warns** - \`Mira las advertencias del usuario\`
[⚠] **Warn** - \`Advierte a un usario\`
[👤] **UnBan** - \`Quita la sancion a un usuario\`
[🚨] **Ban** - \`Prohibe la entra a un usuario al server\`
`;


//-------- AutoMod Commands --------// //Base para agregar mas comandos | [] ** ** - \` \` |
const automodcommands = "`AntiAlt` `(⚙️Fix)AutoRole`"
  const automoddescription = `
[🕵️] **AntiAlt** - \`Prohibe el uso de alts en el server\` 
[🚨] **AutoRole** - \`Agrega roles a los nuevos usuarios\` 
`;
   
//-------- Giveaways Commands --------// //Base para agregar mas comandos | [] ** ** - \` \` |   
const giveawayscommands = "`(🔄Soon)gCreate` `(✨New)gStart` `(✨New)gEdit` `(✨New)gEnd` `(✨New)gDelete` `(✨New)gReroll` `(✨New)gList`"
     const giveawaysescription = `
[🌟] **gCreate** - \`Crea un Giveaway poniendo un canal\`
[⭐] **gStart** - \`Crea un Giveaway sin porner canal\`
[🧭] **gEnd** - \`Ternmina un giveaway\`
[⚙️] **gEdit** - \`Edita un giveaway\`
[➖] **gDelete** - \`Elimina un giveaway\`
[🔄] **gReroll** - \`Resortea un ganador\`
[📃] **gList** - \`Mira la lista de giveaways\`
`
   
//-------- Admin Commands --------// //Base para agregar mas comandos | [] ** ** - \` \` |   
const admincommands = "`Clear` `RemoveWarns` `Nuke` `Connect` `Poll` `Say` `SetSuggest` `SetReport` `DeleteSuggest` `DeleteReport` `SetNick` `UnBanAll` `Gstart`"
     const admindescription = `
[💖] **RemoveWarns** - \`Borra el historial de Warns de un Usuario\`
[✨] **Gping** - \`Ghost Ping\`
[🎉] **Gstart** - \`Comienza un sorteo\`
[👥] **UnBanAll** - \`Unbannea a todos los usuarios\`
[👤] **SetNick** - \`Colocale un nick a un usuario\`
[⛔] **DeleteReport** - \`Elimina el canal de reports\`
[⛔] **DeleteSuggest** - \`Elimina el canal de sugerencias\`
[📌] **SetReport** - \`Coloca el canal de Reports\`
[📍] **SetSuggest** - \`Coloca el canal de Sugerencias\`
[📨] **Say** - \`Manda un mensage atravez de mi\`
[📈] **Poll** - \`has una encuesta al publico\`
[📣] **Connect** - \`Unirme a un canal de voz\`
[⚠️] **Nuke** - \`Borra y clona un canal\`
[💬] **Clear** - \`Elimina mesajes de una forma rapida\`
`;

//------------------------------------------------------- Base Category -------------------------------------------------------//
      
        const baseembed = new Discord.MessageEmbed()

            .addField('Hardling Essential Staff',`Mi Prefix (**${prefix}**)\nReacciona a los emojis para cambiar a la categoría, regresar a esta parte reacciona a ⬅️`)
            .addField("[👮] Categoria Staff",`${staffcommands}`)
            .addField("[🕵️] Categoria Admin",`${admincommands}`)
            .addField("[🤖] Categoria AutoMod",`${automodcommands}`)
            .addField("[🎉] Categoria Giveaways",`${giveawayscommands}`)
            .setThumbnail("https://cdn-icons-png.flaticon.com/512/196/196759.png")
            .setFooter("Comando Sugerido Por " + message.member.displayName, message.author.displayAvatarURL())
            .setColor("RANDOM")
            .setTimestamp()
   
//------------------------------------------------------- Base Category -------------------------------------------------------//
   

//------------------------------------------------------- Staff Category -------------------------------------------------------//
   
        const staffembed = new Discord.MessageEmbed()

            .addField('Categoría Staff',`Mi Prefix (**${prefix}**)\nModeracion rapida`)
            .addField("[👮] Comandos Staff",`${staffcommands}`)
            .addField("[🔮] Descripcion de los Comandos",`${staffdescription}`)
            .setThumbnail("https://files.elfsight.com/storage/d38a2505-501d-4593-871b-3cc0ded50e37/52a52272-51cb-45c3-9601-437dd45d5eb8.png")
            .setColor("RANDOM")
            .setFooter("Comando Sugerido por " + message.member.displayName, message.author.displayAvatarURL())
            .setTimestamp()
   
//------------------------------------------------------- Staff Category -------------------------------------------------------//

//------------------------------------------------------- AutoMod Category -------------------------------------------------------//
   
        const automodembed = new Discord.MessageEmbed()

            .addField('Categoría AutoMod',`Mi Prefix (**${prefix}**)\nUna Auto Moderacion de parte del bot`)
            .addField("[🤖] Comandos AutoMod",`${automodcommands}`)
            .addField("[👾] Descripcion de los Comandos",`${automoddescription}`)
            .setThumbnail("https://cdn-icons-png.flaticon.com/512/1547/1547183.png")
            .setColor("RANDOM")
            .setFooter("Comando Sugerido por " + message.member.displayName, message.author.displayAvatarURL())
            .setTimestamp()
   
//------------------------------------------------------- AutoMod Category -------------------------------------------------------//

//------------------------------------------------------- AutoMod Category -------------------------------------------------------//
   
        const giveawaysembed = new Discord.MessageEmbed()

            .addField('Categoría Giveaweys',`Mi Prefix (**${prefix}**)\nApartado dedicado a los sorteos`)
            .addField("[🎁] Comandos Giveaways",`${giveawayscommands}`)
            .addField("[🎉] Descripcion de los Giveaways",`${giveawaysescription}`)
            .setThumbnail("https://media.hearthpwn.com/attachments/96/921/tada.png")
            .setColor("RANDOM")
            .setFooter("Comando Sugerido por " + message.member.displayName, message.author.displayAvatarURL())
            .setTimestamp()
   
//------------------------------------------------------- AutoMod Category -------------------------------------------------------//

   
//------------------------------------------------------- Admin Category -------------------------------------------------------//

        const adminembed = new Discord.MessageEmbed() 

            .addField("Categoria Admin",`Mi Prefix (**${prefix}**)\n Comandos de mayor rango`)
            .addField("[🕵️] Comandos Admin",`${admincommands}`)
            .addField("[⚙️] Descripcion de los Comandos",`${admindescription}`)
            .setThumbnail("https://www.pngmart.com/files/21/Admin-Profile-PNG.png")
            .setColor("RANDOM")
            .setFooter("Comando Sugerido por " + message.member.displayName, message.author.displayAvatarURL())
            .setTimestamp()

//------------------------------------------------------- Admin Category -------------------------------------------------------//
   
 message.channel.send(baseembed).then(editado =>{
   
      editado.react('👮')
      editado.react('🕵️')
      editado.react('🤖')
      editado.react('🎉')
      editado.react('⬅️')
      
      editado.awaitReactions((reaction,user) =>{
        if (message.author.id !== user.id || user.bot) return;
        if(reaction.emoji.name === '👮'){
            reaction.users.remove(user.id)
           editado.edit(staffembed)
        }
        if(reaction.emoji.name === '🕵️'){
            reaction.users.remove(user.id)
            editado.edit(adminembed)
        }
        if(reaction.emoji.name === '🤖'){
            reaction.users.remove(user.id)
            editado.edit(automodembed)
        }
        if(reaction.emoji.name === '🎉'){
            reaction.users.remove(user.id)
            editado.edit(giveawaysembed)
        }
        if(reaction.emoji.name === '⬅️'){
            reaction.users.remove(user.id)
           editado.edit(baseembed)
        }
     })
   })
    }
}