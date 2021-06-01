import { getRepository } from 'typeorm';
import Server from '../models/Server';

interface Request
{
  id: string;
}

class DeleteServerService
{
  public async execute({ id }: Request) {
    const serverRepository = getRepository(Server);

    const server = await serverRepository.findOne(
      {
        where: { id }
      }
    );

    if (!server) {
      throw new Error("Cannot delete server, because the server don't exists")
    }

    //@ts-ignore
    await serverRepository.delete(server);
  }
}

export default DeleteServerService;
