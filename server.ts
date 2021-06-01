import './src/database/index';

import { Client } from 'discord.js';
import jimp from "jimp";
import settings from './src/config/bot-config';
import DetectCommandsService from './src/services/DetectCommandsService';
import CreateWelcomeMessageService from './src/services/CreateWelcomeMessageService';
import CreateByeMessageService from './src/services/CreateByeMessageService';
import CreateServerService from './src/services/CreateServerService';
import DeleteServerService from './src/services/DeleteServerService';

const client = new Client();

client.on('ready', () => {
  console.log('> Bot is ready.');
});

client.on('guildCreate', async guild => {
  const createServer = new CreateServerService();

  await createServer.execute({id: guild.id});
});

client.on('guildDelete', async guild => {
  const deleteServer = new DeleteServerService();

  await deleteServer.execute({ id: guild.id });
});

client.on('guildMemberAdd', async member => {
  await CreateWelcomeMessageService(member);
});

client.on('guildMemberRemove', async member => {
  await CreateByeMessageService(member);
});

client.on('message', async message => {
  DetectCommandsService(message, client);

  if (message.channel.type === 'dm') {
    console.log(message.content);
  }
});

client.login(settings.token).then(() => {
  console.log('> The bot is logged');
});
