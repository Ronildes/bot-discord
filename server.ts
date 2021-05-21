import { Client } from 'discord.js';
import jimp from "jimp";
import settings from './src/config/bot-config';
import DetectCommandsService from './src/services/DetectCommandsService';
import CreateWelcomeMessageService from './src/services/CreateWelcomeMessageService';
import CreateByeMessageService from './src/services/CreateByeMessageService';

const client = new Client();

client.on('ready', () => {
  console.log('> Bot is ready.');
});

client.on('guildMemberAdd', async member => {
  await CreateWelcomeMessageService(member);
});

client.on('guildMemberRemove', async member => {
  await CreateByeMessageService(member);
});

client.on('message', async message => {
  DetectCommandsService(message, client);

  if(message.channel.type === 'dm'){
    console.log(message.content);
  }
});

client.login(settings.token).then(() => {
  console.log('> The bot is logged');
});
