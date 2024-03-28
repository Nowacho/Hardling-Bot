const Discord = require('discord.js');

module.exports = {
  name: "qr",
  alias: ["qrcode","codigoqr"],

execute (client, message, args){

        let link = (args[0])
        let qrlink = `http://api.qrserver.com/v1/create-qr-code/?data=${link}&size=200x200`

        if (!link) 
        return message.channel.send(`[:gear:] **Por favor, proporcione un enlace.**`)

        if (require('is-url')(link)) {
            const attachment = new Discord.MessageAttachment(qrlink, 'qrcode.png');

            const embed = new Discord.MessageEmbed()
            .setTitle('[✅] El código QR está listo')
            .attachFiles(attachment)
            .setImage('attachment://qrcode.png')
            .setColor("RANDOM")
            .setFooter("Comando Sugerido por " + message.member.displayName, message.author.displayAvatarURL())
            .setTimestamp()

            message.channel.send(embed)

        } else {
            message.reply(`${emoji.Error}[:gear:] **Error proporcionar un enlace válido que contenga** \`https://\``)
        }

 }
}