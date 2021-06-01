import {MigrationInterface, QueryRunner, Table} from "typeorm";

export default class CreateServersTable1622579652631 implements MigrationInterface {

    public async up(queryRunner: QueryRunner): Promise<void> {
      await queryRunner.createTable(
        new Table({
          name: 'servers',
          columns: [
            {
              name: 'id',
              type: 'varchar',
              isPrimary: true,
            },
            {
              name: 'canWelcome',
              type: 'bool',
            },
            {
              name: 'welcomeChannel',
              type: 'varchar',
            },
            {
              name: 'canBye',
              type: 'bool',
            },
            {
              name: 'byeChannel',
              type: 'varchar',
            },
          ]
        })
      );
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
    }

}
