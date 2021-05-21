import { Client, Message } from "discord.js";

exports.run = async (message: Message, client: Client, args: string[]) => {
  message.channel.send(`The message the message has send to <@${message.author}> DM.`).then(() => {

  if(!message.member.hasPermission("ADMINISTRATOR")) return message.reply("You cannot do this command!");

  let User = message.guild.member(message.mentions.users.first()) || message.guild.members.get(args[0]);
  if (!User) return message.channel.send(`Can't find user! ${message.author}`);

  let dMessage = args.join(" ").slice(22);
  if(dMessage.length < 1) return message.reply('You must supply a message!');

  User.send(`<@${User}> A moderator from **${message.guild?.name}** sent you: ${dMessage}`);
  return message.author.send(`<@${message.author}> You have sent your message to <@${User}>`);
  })
}
