

const Discord = require('discord.js');

const bot = new Discord.Client();
bot.on('ready', () =>{
    console.log('Successfully logged in as ' +bot.user.tag+'.');
})
bot.on('message', (message) => {
    if(message.content == 'ding')
        message('dong');
} )

bot.login('NDI0NTk1MDg3Nzg4NDc0Mzg4.DY7PjQ._W6YJxbtuvZI73oV7a9QDG6n_aQ');


