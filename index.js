//Get discord.js
const Discord = require('discord.js');

//Create client instance as bot
const hash = new Discord.Client();

//Set listener on 'ready'
hash.on('ready', () => {
  console.log('HashBot ready!');
});

//Set listener on 'message'
hash.on('message', message => {
  //What the user says
  if (message.content === 'Hey') { 
  // What the bot replies with
    message.reply('Hello!'); 
  }
});

hash.login('insert token here');
