import { Entity, Column, PrimaryColumn } from 'typeorm';

@Entity('servers')
class Server
{
  @PrimaryColumn()
  id: string;

  @Column()
  canWelcome: boolean;

  @Column()
  welcomeChannel: string;

  @Column()
  canBye: boolean;

  @Column()
  byeChannel: string;
}

export default Server;
