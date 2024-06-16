const { EmbedBuilder } = require('discord.js');
const db = require("../mongodb");
module.exports = {
    name: 'support',
    description: 'support server of this Bot',
    execute(message, args) {
        const supportServerLink = "https://discord.gg/xQF9f9yUEM";
      const githubLink = "https://github.com/GlaceYT";
      const replitLink = "https://replit.com/@GlaceYT";
      const youtubeLink = "https://www.youtube.com/@GlaceYT";
        const embed = new EmbedBuilder()
            .setColor('#b300ff')
            .setAuthor({
              name: 'Support Server',
              iconURL: 'https://media.discordapp.net/attachments/1165539147881132142/1166348715850735616/6dbd7d91d3fc153376a97682697bb14e107c5f337a992b0ee0c6456f137bf015.gif?ex=666ed6e3&is=666d8563&hm=5517d0fe98cffa76267eb3989c777cf6518f4a33d5e9927d0f35342e50630f51&', 
              url: 'https://discord.gg/xQF9f9yUEM'
          })
            .setDescription(`➡️ **Join our Discord server for support and updates:**\n- Discord - ${supportServerLink}\n\n➡️ **Follow us on:**\n- GitHub - ${githubLink}\n- Replit - ${replitLink}\n- YouTube - ${youtubeLink}`)
            .setImage('https://media.discordapp.net/attachments/1165539147881132142/1166348715850735616/6dbd7d91d3fc153376a97682697bb14e107c5f337a992b0ee0c6456f137bf015.gif?ex=666ed6e3&is=666d8563&hm=5517d0fe98cffa76267eb3989c777cf6518f4a33d5e9927d0f35342e50630f51&')
            .setTimestamp();

        message.reply({ embeds: [embed] });
    },
};
