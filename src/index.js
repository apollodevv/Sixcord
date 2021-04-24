const { Client } = require('discord.js');
const client = new Client({
  disableMentions: 'everyone',
  ws: { intents: ['GUILD_MESSAGES']}
});