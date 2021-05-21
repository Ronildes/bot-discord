import { Client, Message } from "discord.js";

exports.run = async (message: Message, client: Client, args: string[]) => {
  message.channel.send(`The message went to your DM <@${message.author}>.`).then(() => {
    return message.author.send(`You need help <@${message.author}> ?`);
  });
}
