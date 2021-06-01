import {MigrationInterface, QueryRunner, Table} from "typeorm";

export default class CreateUser1622579238072 implements MigrationInterface {

    public async up(queryRunner: QueryRunner): Promise<void> {
      await queryRunner.createTable(
        new Table({
          name: 'users',
          columns: [
            {
              name: 'id',
              type: 'int',
              isPrimary: true,
              generationStrategy: 'increment',
            },
            {
              name: 'avatar',
              type: 'varchar',
            },
            {
              name: 'username',
              type: 'varchar',
            },
            {
              name: 'warnPoints',
              type: 'int',
            },
            {
              name: 'createdAt',
              type: 'timestamp',
              default: 'now()',
            },
            {
              name: 'updatedAt',
              type: 'timestamp',
              default: 'now()',
            },
          ],
        })
      );
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
      await queryRunner.dropTable('users');
    }

}
