//Get discord.js
const { Client } = require('discord.js');

//Create client instance as bot
const hash = new Client();

//Set listener on 'ready'
hash.on('ready', () => {
  console.log(`${hash.user.tag} is ready!`);
});

//Set listener on 'message'
hash.on('message', msg => {
  //What the user says
  if (msg.content.toLowerCase() === 'hey') { 
  // What the bot replies with
    msg.channel.send('Hello!');
  }
});

hash.login('insert token here');
