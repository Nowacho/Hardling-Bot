const Discord = require('discord.js');

module.exports = {
    name: "help",
    alias: ["ayuda"],

    execute (client, message, args){

      var prefix = client.config["Bot_Info"].prefix;

// (✨New)
// (⬆️Update)      
// (⚙️Fix)

//-------- Fun Commands --------// //Base para agregar mas comandos | [] ** ** - \` \` |
const funcommands = "`TicTacToe` `MineFinder` `Paint` `Akinator` `Rps` `Hack` `YtSearch` `8ball`"
  const fundescription = `
[😺] **TicTacToe** - \`Un juego clasico \`
[🗃️] **Akinator** - \`Piensa en un personaje\`
[🕵️] **Hack** - \`Haz un doxxeo falso\`
[🪨] **Rps** - \`jugar piedra, papel o tijera.\`
[🤣] **Chiste** - \`Un pequeño chiste.\`
[🎱] **8ball** - \`Pregunta mágica 8Ball.\`
[🖌️] **Paint** - \`Dibuja con un solo clic.\`
[📡] **YtSearch** - \`Busca a tus YouTubers favoritos.\`
[💣] **MineFinder** - \`Clásico juego de minas y números.\`
`;

//-------- Image Commands --------// //Base para agregar mas comandos | [] ** ** - \` \` |
const imagecommands = "`Abrazo` `Avatar` `Jumbo` `Dado` `Criptomoneda` `Skin` `QR`" 
  const imagedescription = ` 
[🫂] **Abrazo** - \`Dale un abrazó alguien\`
[🪙] **Criptomoneda** - \`Lanza un Criptomoneda\` 
[🎲] **Dado** - \`Gira un dado al azar\`
[📄] **QR** - \`Crea un QR con tan solo un link\`
[🔥] **Skin** - \`Mira las Skin de un Usuario de Minecraft\`
[👀] **Jumbo** - \`Has los emojis mas grandes\`
[😎] **Avatar** - \`Mira los avatares de los demas\`
`;

//-------- Info Commands --------// //Base para agregar mas comandos | [] ** ** - \` \` |
const infocommands = "`Calc` `IQ` `Afk` `RoleInfo` `Ping` `Stats` `ServerInfo` `Report` `Suggest`"  
  const infodescription = ` 
[🧮] **Calc** - \`Calculadora\`
[🧠] **IQ** - \`Mide tu IQ\`
[😴] **Afk** - \`Avsia cuando estes afk\`
[🪐] **RoleInfo** - \`Informacion sobre el rol.\`
[🚷] **Report** - \`Reporta a los Usuarios.\`
[🤔] **Suggest** - \`Manda una sugerencia.\`
[🔧] **ServerInfo** - \`Informacion del servidor.\`
[📂] **Stats** - \`Mira mis estadisticas.\`
[⚙️] **Ping** - \`Mira la latencia del bot.\`
`;
      
//-------- Text Commands --------// //Base para agregar mas comandos | [] ** ** - \` \` | 
const textcommands = "`Zalgo` `FlipText` `Ascii` `Morse` `TextEmoji`"
  const textdescription = ` 
[🥴] **Zalgo** - \`Un texto conplicado de leer\`
[🙃] **FlipText** - \`Pon de cabeza el texto\`
[📖] **TextEmoji** - \`Crear un texto en modo emoji.\`
[🔮] **Ascii** - \`Crea un texto en formato ascii.\` 
[💬] **Morse** - \`Convierte un codigo morse o desifra uno\` 
`;
      
//-------- Nsfw Commands --------// //Base para agregar mas comandos | [] ** ** - \` \` |
const nsfwcommands = "`Boobs` `Ass` `4k` `Pussy`"
  const nsfwdescription = ` 
[🍩] **Pussy** - \`Fotitos de la ragita.\`
[🍒] **Boobs** - \`Boobs imagenes.\`
[🚀] **4k** - \`Images de alta resolucion.\`
[🍑] **Ass** - \`Mira fotos sobre cul#$.\`
`;
      
//------------------------------------------------------- Help Category -------------------------------------------------------//
      
        const embedhelp = new Discord.MessageEmbed()

            .addField("Hardling Essential Help",`Mi Prefix (**${prefix}**)\nreacciona a los emojis para ver las descripciones de las categorías usa ⬅️ para volver al menú principal.`)
            .addField("[:smile:] Fun Category",`${funcommands}`)
            .addField("[:ice_cube:] Image Category",`${imagecommands}`)
            .addField("[:thinking:] Info Category",`${infocommands}`)
            .addField("[:crystal_ball:] Text Category",`${textcommands}`)
            .addField("[:hot_face:] Nsfw Category ",`${nsfwcommands}`)
            .setThumbnail("https://cdn-icons-png.flaticon.com/512/682/682055.png")
            .setFooter("Comando Sugerido Por " + message.member.displayName, message.author.displayAvatarURL())
            .setColor("RANDOM")
            .setTimestamp()

//------------------------------------------------------- Help Category -------------------------------------------------------//
      
//------------------------------------------------------- Info Category -------------------------------------------------------//
      
      const infocategory = new Discord.MessageEmbed()
        
            .addField("Info Category",`Mi Prefix (**${prefix}**)\nComandos que pueden ayudarte a obtener información.`)
            .addField("[:thinking:] Info Commands",`${infocommands}`)
            .addField("[:page_facing_up:] Command Description",`${infodescription}`)
            .setThumbnail("https://cdn-icons-png.flaticon.com/512/1810/1810852.png")
            .setFooter("Comando Sugerido Por " + message.member.displayName, message.author.displayAvatarURL())
            .setColor("RANDOM")
            .setTimestamp()

//------------------------------------------------------- Info Category -------------------------------------------------------//
      
//------------------------------------------------------- Image Category -------------------------------------------------------//
      
      const imagecategory = new Discord.MessageEmbed()
        
            .addField("Image Category",`Mi Prefix (**${prefix}**)\nComandos que incluyen imágenes`)
            .addField("[:ice_cube:] Image Commands",`${imagecommands}`)
            .addField("[:page_facing_up:] Command Description",`${imagedescription}`)
            .setThumbnail("https://es.seaicons.com/wp-content/uploads/2016/07/PNG-Image-icon.png")
            .setColor("RANDOM")
            .setFooter("Comando Sugerido Por " + message.member.displayName, message.author.displayAvatarURL())
            .setTimestamp()

//------------------------------------------------------- Image Category -------------------------------------------------------//
      
//------------------------------------------------------- Fun Category -------------------------------------------------------//
      
      const funcategoty = new Discord.MessageEmbed()
         
        .addField("Fun Category",`Mi Prefix (**${prefix}**)\nComandos para divertirse con tus amigos`)
        .addField("[:smile:] Fun Commands",`${funcommands}`)
        .addField("[:page_facing_up:]Command Description",`${fundescription}`)
        .setThumbnail("https://cutewallpaper.org/24/fun-png/celebration-party-birthday-and-party-new-year-birthday-confetti-fun-icon.png")
        .setColor("RANDOM")
        .setFooter("Comando Sugerido Por " + message.member.displayName, message.author.displayAvatarURL())
        .setTimestamp()

//------------------------------------------------------- Fun Category -------------------------------------------------------//

//------------------------------------------------------- Text Category -------------------------------------------------------//
      
      const textcategory = new Discord.MessageEmbed()

            .addField("Text Category",`Mi Prefix (**${prefix}**)\nCovierte un texto simple en uno mejor`)
            .addField("[:crystal_ball:] Text Commands",`${textcommands}`)
            .addField("[:page_facing_up:] Command Description",`${textdescription}`)
            .setThumbnail("https://www.arj.no/wp-content/2019/10/29076.png")
            .setColor("RANDOM")
            .setFooter("Comando Sugerido Por " + message.member.displayName, message.author.displayAvatarURL())
            .setTimestamp()
      
//------------------------------------------------------- Text Category -------------------------------------------------------//

//------------------------------------------------------- Nsfw Category -------------------------------------------------------//

const nsfwcategory = new Discord.MessageEmbed() 

            .addField("Nsfw Categoria",`Mi Prefix (**${prefix}**)\nRecuerda que para usar esta categoria necesitas un canal NSFW`)
            .addField("[:hot_face:] Nsfw Commands",`${nsfwcommands}`)
            .addField("[:page_facing_up:] Command Description",`${nsfwdescription}`)
            .setThumbnail("https://c.tenor.com/vILWmUAWdIEAAAAC/la-roca.gif")
            .setColor("RANDOM")
            .setFooter("Comando Sugerido Por " + message.member.displayName, message.author.displayAvatarURL())
            .setTimestamp()
      
//------------------------------------------------------- Nsfw Category -------------------------------------------------------//
      
 message.channel.send(embedhelp).then(editado =>{

      editado.react('😄')
      editado.react('🧊')
      editado.react('🤔')
      editado.react('🔮')
      editado.react('🥵')
      editado.react('⬅️')
      
      editado.awaitReactions((reaction,user) =>{
        if (message.author.id !== user.id || user.bot) return;
        if(reaction.emoji.name === '😄'){
            reaction.users.remove(user.id)
            editado.edit(funcategoty)
        }
        if(reaction.emoji.name === '🧊'){
            reaction.users.remove(user.id)
           editado.edit(imagecategory)
        }
        if(reaction.emoji.name === '🤔'){
            reaction.users.remove(user.id)
            editado.edit(infocategory)
        }
        if(reaction.emoji.name === '🔮'){
            reaction.users.remove(user.id)
            editado.edit(textcategory)
        }
        if(reaction.emoji.name == '🥵'){
          reaction.users.remove(user.id)
           editado.edit(nsfwcategory)
        }
        if(reaction.emoji.name === '⬅️'){
            reaction.users.remove(user.id)
           editado.edit(embedhelp)
        }
     })
   })
    }
}
