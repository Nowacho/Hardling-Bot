const Discord = require('discord.js');

module.exports = {
  name: "hack",
  alias: ["hackear","doxxeo","doxxear"],

async execute (client, message, args){

let usuarioh = message.mentions.users.first()//Definimos al Usuario
if(!usuarioh) return message.channel.send('<@'+message.author.id+'>' + 'Menciona a alguien para hackear')

let contras = [
  'megustamiabuela',
  'eresadoptado',
  'MeQuieroMorir91',
  '1561',
  'Discord',
  'HolaQueTalTodoBien',
  'BuenasTardesPadrin',
  'osueslavidabruh',
  'Comoteva',
  'Juanito123',
  'soyuwu',
  'komolozupo',
  'uwuvivaeluwu'
]
let gmails = [
   `${usuarioh.username}@gmail.com`,
   `${usuarioh.username}@hotmail.com`,
  `${usuarioh.username}@outlook.com`,
  `${usuarioh.username}@yahoo.com`
  ]
  
let ips = [
'192.168.2.1',
'131.168.1.4',
'156.156.7.0',
'101.151.1.9',
'118.251.50.21',
'148.222.229.197',
'161.12.132.134',
'144.244.243.74',
'89.3.222.209',
'210.146.22.54',
'76.19.103.143',
'51.164.157.90',
'241.181.159.28',
'15.210.53.155',
'244.50.114.20',
'25.46.21.197',
'33.51.77.152',
'130.194.89.82',
'133.134.9.8',
'192.577.385',
'192.777.888',
'192.238.836'
]
  
let wifi = [
  'Movistar',
  'Telecom Andora',
  'izzi',
  'Telecable',
  'Cablevision',
  'Totalplay',
  'VTR',
  'Usa el Internet Del Vecino',
  'Internet del McDonalds',
  'Internet gratis',
  'no tiene',
  'wifigratis'
]
    var Num = contras[Math.floor(contras.length * Math.random())]
   var Num1 = gmails[Math.floor(gmails.length * Math.random())]
   var Num3 = ips[Math.floor(ips.length * Math.random())]
   var Num4 = wifi[Math.floor(wifi.length * Math.random())]
  
message.channel.send('_**Conectando al Wi-Fi...**_').then(m => {//opcional. pero aca hacemos para que salga el mensaje com osi nos conetamos el wifi

setTimeout(function(){
                     m.edit('_**Conectando al Wi-Fi..**_').then(m => {//opcional. pero aca hacemos para que salga el mensaje com osi nos conetamos el wifi. ac� editamos el msg, y ponemos un "." m�s xd
                     })
}, 3000)
setTimeout(function(){
                     m.edit('_**Conectando al Wi-Fi.**_').then(m => {//opcional. pero aca hacemos para que salga el mensaje com osi nos conetamos el wifi aca volvemos a editar el msg, y ponemos otro "."
                     })
}, 4000)
setTimeout(function(){
                     m.edit('_**Conectando al Wi-Fi..**_').then(m => {
                     })
}, 5000)
setTimeout(function(){
                     m.edit('_**Conectando al Wi-Fi...**_').then(m => {
                     })
}, 6000)
setTimeout(function(){
                     m.edit(':white_check_mark: ___**Conectado exitosamente**___').then(m => {
                     })//opcional. pero aca hacemos para que salga el mensaje que ya se conecto al wifi
}, 7000)

                     

setTimeout(function(){
            m.edit(':white_check_mark: _**Conectado exitosamente**_').then(m => {
            })
}, 8000)

setTimeout(function(){
              m.edit('_**Obteniendo sus datos...**_').then(m => {  //opcional. pero aca hacemos para que salga el mensaje com osi nos conetamos a los datos                
                })
}, 9000)
setTimeout(function(){
              m.edit('_**Obteniendo sus datos..**_').then(m => {  //opcional. pero aca hacemos para que salga el mensaje com osi nos conetamos a los datos y editamos el msg, y ponemos un "."                
                })
}, 10000)
setTimeout(function(){
              m.edit('_**Obteniendo sus datos.**_').then(m => {//opcional. pero aca hacemos para que salga el mensaje com osi nos conetamos a los datos y editamos el msg, y ponemos un "."                   
                })
}, 11000)
setTimeout(function(){
              m.edit('_**Obteniendo sus datos..**_').then(m => {                  
                })
}, 12000)
setTimeout(function(){
              m.edit('_**Obteniendo sus datos...**_').then(m => {                  
                })
}, 13000)
setTimeout(function(){
              m.edit('_**Obteniendo sus datos..**_').then(m => {                  
                })
}, 14500)
setTimeout(function(){
          m.edit('✅ _**Wi-Fi Conectado**_ \n✅ _**Datos Obtenidos**_').then(m => {               
                })
}, 15000)
setTimeout(function(){
  let embed = new Discord.MessageEmbed()
  .setTitle(`[🕵️] **Hackeo Completo**`)
 .setDescription(':envelope: | Su Gmail: ' + Num1 + ' \n:lock: | Su Contraseña:  ' + Num + ' \n:bar_chart: | Su IP:  ' + Num3 + ' \n:signal_strength: | Su Wi-fi: '+Num4+'')
 .setColor("RANDOM")
  return message.channel.send(embed)}, 17000)
})
 }
}