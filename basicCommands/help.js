const { EmbedBuilder, ActionRowBuilder, ButtonBuilder } = require('discord.js');
const { ButtonStyle } = require('discord.js');
const db = require("../mongodb");
module.exports = {
  name: 'help',
  aliases: ['hlp', 'h'],
  description: 'Shows a list of available commands',
  execute(message, args) {
    const botUser = message.client.user;
    const botPing = Date.now() - message.createdTimestamp;
    const serverCount = message.client.guilds.cache.size;
    const embed = new EmbedBuilder()
      .setColor('#2b71ec')
      .setAuthor({
        name: 'Im here to Help!',
        iconURL: 'https://media.discordapp.net/attachments/1165539147881132142/1166348715850735616/6dbd7d91d3fc153376a97682697bb14e107c5f337a992b0ee0c6456f137bf015.gif?ex=666ed6e3&is=666d8563&hm=5517d0fe98cffa76267eb3989c777cf6518f4a33d5e9927d0f35342e50630f51&', 
        url: 'https://discord.gg/FUEHs7RCqz'
    })
     
      .setDescription(`__**STATS :**__\n\n> **📊 Bot in servers:** ${serverCount}\n> **🟢 Bot Ping:** ${botPing}ms\n> **👑 Made By [GlaceYT](https://www.youtube.com/channel/UCPbAvYWBgnYhliJa1BIrv0A)**\n\n__**COMMANDS :**__ `)
      .addFields(
      
        {
          name: '▶️  Basic',
          value: '`avatar`, `owner`, `support`, `invite`, `userinfo`',
          inline: true,
        },
       
        {
          name: '▶️  Music',
          value: '`play`, `stop`, `seek`,`volume`,`pause`,`resume`,`skip`,`remove`,`shuffle`,`queue`',
          inline: true,
        },
      
        {
          name: '▶️  Fun',
          value: ' `ascii`, `joke`, `roll`',
          inline: true,
        },
      
        {
          name: '▶️  Image',
          value: '`cat`, `dog`',
          inline: true,
        },
      
        {
          name: '▶️  Anime',
          value: '`<prefix>animecommands for more info`',
          inline: true,
        },
     
        {
          name: '▶️  Utility',
          value: '`kick`, `ban`, `serverinfo`,`userinfo`, `clear`',
          inline: true,
        }
      )
      .setThumbnail(botUser.avatarURL({ dynamic: true, format: 'png', size: 1024 }))
      .setImage(`https://media.discordapp.net/attachments/1165539147881132142/1166348715850735616/6dbd7d91d3fc153376a97682697bb14e107c5f337a992b0ee0c6456f137bf015.gif?ex=666ed6e3&is=666d8563&hm=5517d0fe98cffa76267eb3989c777cf6518f4a33d5e9927d0f35342e50630f51&`);

    const button2 = new ButtonBuilder()
      .setLabel('Discord')
      .setURL('https://discord.gg/xQF9f9yUEM')
      .setStyle(ButtonStyle.Link);
      
    const row = new ActionRowBuilder()
      .addComponents(button2);
    
    message.reply({ embeds: [embed], components: [row] });
  },
};
