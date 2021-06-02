import { getRepository } from 'typeorm';
import Server from '../models/Server';

interface Request {
  id: string;
}

class CreateServerService {
  public async execute({ id }: Request): Promise<Server> {
    const serverRepository = getRepository(Server);

    const checkServerExists = await serverRepository.findOne({ where: { id } });

    if (checkServerExists) {
      throw new Error('This server already exists');
    }

    const server = serverRepository.create({
      id,
      canWelcome: false,
      canBye: false,
    });

    if (!server) {
      throw new Error("The server don't contain any true value");
    }

    await serverRepository.save(server);

    return server;
  }
}

export default CreateServerService;
