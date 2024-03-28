const Discord = require('discord.js');

module.exports = {
  name: "addrole",
  alias: ["roleadd","agregarrol","addrank","rankadd"],

async execute (client, message, args){

      let NoPerm = new Discord.MessageEmbed()

            .setTitle("**Error de permiso de usuario!**")
            .setDescription("[❌] **Lo siento, ¡no tienes permisos para usar esto!**")
            .setThumbnail("https://www.pngall.com/wp-content/uploads/2/Staff-Only-Sign-PNG-File.png")
            .setColor("RANDOM")
            .setFooter("Comando Sugerido por " + message.member.displayName, message.author.displayAvatarURL())
            .setTimestamp()
            
            var perms = message.member.hasPermission("MANAGE_ROLES")
            if(!perms) return message.channel.send(NoPerm);

        if (!message.guild.me.hasPermission("MANAGE_ROLES"))
          return message.channel.send("[❌] **No tengo permisos para poner roles**");
        
        if (!args[0]) return message.channel.send("[❌] **Por favor ingrese un rol**")

        let rMember = message.mentions.members.first() || message.guild.members.cache.get(args[0]) || message.guild.members.cache.find(r => r.user.username.toLowerCase() === args[0].toLocaleLowerCase()) || message.guild.members.cache.find(ro => ro.displayName.toLowerCase() === args[0].toLocaleLowerCase());
        if (!rMember) return message.channel.send("[❌]  **Ingrese un usuario**");
        if (rMember.roles.highest.comparePositionTo(message.guild.me.roles.highest) >= 0) return message.channel.send('**No se puede agregar el rol a este usuario!**')

        let role = message.mentions.roles.first() || message.guild.roles.cache.get(args[1]) || message.guild.roles.cache.find(rp => rp.name.toLowerCase() === args.slice(1).join(' ').toLocaleLowerCase());
        if (!args[1]) return message.channel.send("[❌] **Agregue un rol**")

        if (!role) return message.channel.send("[❌] **No encontre el rol que indico**")

        if (role.managed) return message.channel.send("[❌] **No pude agregarle el rol al usuario**")
        if (message.guild.me.roles.highest.comparePositionTo(role) <= 0) return message.channel.send('[❌] **¡El rol es actualmente más alto que yo, por lo tanto, no se puede agregar al usuario!**')

        if (rMember.roles.cache.has(role.id)) return message.channel.send("[⚙️] **El usuario ya tiene el rol**")
        if (!rMember.roles.cache.has(role.id)) await rMember.roles.add(role.id);
  
        var sembed = new Discord.MessageEmbed()
          
            .setThumbnail(rMember.user.displayAvatarURL({ dynamic: true }))
            .addField(`[✅] **Rol agregado correctamente**`,`\`Moderador:\` <@${message.author.id}>\n \`Usuario:\` <@${rMember.user.id}>\n \`Rol Agregado:\` ${role} `)
            .setColor("GREEN")
            .setFooter("Comando Sugerido por " + message.member.displayName, message.author.displayAvatarURL())
            .setTimestamp()
            
  
        message.channel.send(sembed)
  }
}