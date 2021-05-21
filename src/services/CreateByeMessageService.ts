import { GuildMember, Message, PartialGuildMember } from "discord.js";
import jimp from 'jimp';

async function CreateByeMessageService(member: GuildMember | PartialGuildMember) {
  try {
  const channel = member.guild.channels.cache.get('728729794015002665');

  let font = await jimp.loadFont('./src/resources/byeFiles/Badaboom.fnt');
  let mask = await jimp.read('./src/resources/byeFiles/mask.png');
  let background = await jimp.read('./src/resources/byeFiles/background.png');

  let avatar = member.user.displayAvatarURL({format: "png", size: 2048});
      jimp.read(avatar).then(avatar =>{

        avatar.resize(140,140)
        mask.resize(140,140)
        avatar.mask(mask)

        background.print(font, 190, 175, member.user.tag)
        background.composite(avatar,100,20).write('./src/resources/byeFiles/bye.png')

    }).then(async () => {
      await channel.send({files:["./src/resources/byeFiles/bye.png","./src/resources/byeFiles/garotaComMedo.gif"]});
    })
  }catch (err) {
    console.log(err.message);
  }
}

export default CreateByeMessageService;
