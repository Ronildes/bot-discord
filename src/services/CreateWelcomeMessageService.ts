import { GuildMember, Message } from "discord.js";
import jimp from 'jimp';

async function CreateWelcomeMessageService(member: GuildMember) {
  try {
  const channel = member.guild.channels.cache.get('728729726931435590');

  let font = await jimp.loadFont('./src/resources/welcomeFiles/Badaboom.fnt');
  let mask = await jimp.read('./src/resources/welcomeFiles/mask.png');
  let background = await jimp.read('./src/resources/welcomeFiles/background.png');

  let avatar = member.user.displayAvatarURL({format: "png", size: 1024});
      jimp.read(avatar).then(avatar =>{

        avatar.resize(140,140)
        mask.resize(140,140)
        avatar.mask(mask)

        background.print(font, 190, 175, member.user.tag)
        background.composite(avatar,10,20).write('./src/resources/welcomeFiles/welcome.png')

    }).then(async () => {
      await channel.send({files:["./src/resources/welcomeFiles/welcome.png","./src/resources/welcomeFiles/Violao.gif"]});
    })
  } catch (err) {
    console.log(err.message);
  }
}

export default CreateWelcomeMessageService;
