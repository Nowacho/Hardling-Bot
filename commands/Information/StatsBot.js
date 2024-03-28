const Discord = require('discord.js');
const moment = require('moment');
const { mem, cpu, os } = require('node-os-utils');
const { stripIndent } = require('common-tags');

module.exports = {
    name: "stats",
    alias: ["estadisticas","botstats","statsbot"],

    async execute (client, message, args){

        const d = moment.duration(client.uptime);
        const days = (d.days() == 1) ? `${d.days()} dia` : `${d.days()} dias`;
        const hours = (d.hours() == 1) ? `${d.hours()} hora` : `${d.hours()} horas`;
        const seconds = (d.seconds() == 1) ? `${d.seconds()} segundo` : `${d.seconds()} segundos`;
        const minutes = (d.minutes() == 1) ? `${d.minutes()} minuto` : `${d.minutes()} minutos`;
        const { totalMemMb, usedMemMb } = await mem.info();
        
      const clientStats = stripIndent`

      📡Servidores: ${client.guilds.cache.size}
      👥Usuarios: ${client.guilds.cache.reduce((prev, guild) => prev + guild.memberCount, 0)}
      🌎Canales: ${client.channels.cache.size.toLocaleString()}
      ⏲️Tiempo: ${days}, ${hours}, ${minutes} y ${seconds}
      📊Ping: ${Math.round(client.ws.ping)}ms
      📈Ram: ${(process.memoryUsage().heapUsed / 1024 / 1024).toFixed(2)}MB`;

        const embed = new Discord.MessageEmbed()

            .setTitle('[:bar_chart:] **Mis estadisticas actuales**')
            .setDescription(`\`\`\`${clientStats}\`\`\``)
            .setColor("RANDOM")
            .setFooter("Comando Sugerido Por " + message.member.displayName, message.author.displayAvatarURL())
            .setTimestamp()

        message.channel.send(embed);

    }
}