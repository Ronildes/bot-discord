import { MigrationInterface, QueryRunner, TableColumn } from "typeorm";

export default class ChangeServersColumnToIsNullable1622582159312 implements MigrationInterface {

    public async up(queryRunner: QueryRunner): Promise<void> {
      await queryRunner.changeColumn(
        'servers',
        'canWelcome',
        new TableColumn({
          name: 'canWelcome',
          type: 'bool',
          default: false,
        })
      );

      await queryRunner.changeColumn(
        'servers',
        'welcomeChannel',
        new TableColumn({
          name: 'welcomeChannel',
          type: 'varchar',
          isNullable: true,
        })
      );

      await queryRunner.changeColumn(
        'servers',
        'canBye',
        new TableColumn({
          name: 'canBye',
          type: 'bool',
          default: false,
        })
      );

      await queryRunner.changeColumn(
        'servers',
        'byeChannel',
        new TableColumn({
          name: 'byeChannel',
          type: 'varchar',
          isNullable: true,
        })
      );
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
      await queryRunner.changeColumn(
        'servers',
        'canWelcome',
        new TableColumn({
          name: 'canWelcome',
          type: 'bool',
        })
      );

      await queryRunner.changeColumn(
        'servers',
        'welcomeChannel',
        new TableColumn({
          name: 'welcomeChannel',
          type: 'varchar',
        })
      );

      await queryRunner.changeColumn(
        'servers',
        'canBye',
        new TableColumn({
          name: 'canBye',
          type: 'bool',
        })
      );

      await queryRunner.changeColumn(
        'servers',
        'byeChannel',
        new TableColumn({
          name: 'byeChannel',
          type: 'varchar',
        })
      );
    }

}
