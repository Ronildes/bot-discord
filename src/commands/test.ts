import { Client, Message } from "discord.js";

exports.run = async (message: Message, client: Client, args: string[]) => {
  return message.channel.send(`I'm listening you <@${message.author}>`);
}
