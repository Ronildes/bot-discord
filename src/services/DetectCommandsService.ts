import { Message, Client } from 'discord.js';
import settings from '../config/bot-config';

function DetectCommandsService(message: Message, client: Client) {
  if (message.author.bot) return;
  if (message.channel.type === 'dm') return;
  if (!message.content.startsWith(settings.prefix)) return;

  const args = message.content
    .slice(settings.prefix.length)
    .trim()
    .split(/ +/g);

  const command = args.shift()?.toLowerCase();

  try {
    const commandFile = require(`../commands/${command}.ts`);
    commandFile.run(message, client, args);
  } catch (err) {
    message.channel.send(
      `Hey <@${message.author}> you wrote a command that not exists...`
    );
  }
}

export default DetectCommandsService;
