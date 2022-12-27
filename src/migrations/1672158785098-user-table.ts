import { MigrationInterface, QueryRunner, Table } from 'typeorm';

export class UserTable1672158785098 implements MigrationInterface {
  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.createTable(
      new Table({
        name: 'users',
        columns: [
          {
            name: 'id',
            type: 'uuid',
            isPrimary: true,
          },
          {
            name: 'first_name',
            type: 'character varying',
            isNullable: false,
          },
          {
            name: 'last_name',
            type: 'character varying',
            isNullable: false,
          },
          {
            name: 'email',
            type: 'character varying',
            isNullable: false,
          },
          {
            name: 'password',
            type: 'character varying',
          },
          {
            name: 'created_at',
            type: 'timestamp',
          },
          {
            name: 'updated_at',
            type: 'timestamp',
          },
          {
            name: 'deleted_at',
            type: 'timestamp',
          },
        ],
      }),
    );
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.dropTable('users');
  }
}
