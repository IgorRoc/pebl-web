import {MigrationInterface, QueryRunner, Table} from "typeorm";

export class CreateSternbergTest1628695293198 implements MigrationInterface {

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.createTable(new Table({
            name: 'sternberg',
            columns: [
                {
                    name: 'id',
                    type: 'uuid',
                    isPrimary: true,
                    generationStrategy: 'uuid',
                    default: 'uuid_generate_v4()',
                },
                {
                    name: 'deadline',
                    type: 'timestamp with time zone',
                },
                {
                    name: 'subnum',
                    type: 'varchar',
                },
                {
                    name: 'length',
                    type: 'varchar',
                },
                {
                    name: 'trial',
                    type: 'varchar',
                },
                {
                    name: 'set',
                    type: 'varchar',
                },
                {
                    name: 'stim',
                    type: 'varchar',
                },
                {
                    name: 'targetfoil',
                    type: 'varchar',
                },
                {
                    name: 'resp',
                    type: 'varchar',
                },
                {
                    name: 'corr',
                    type: 'varchar',
                },
                {
                    name: 'rt',
                    type: 'varchar',
                },
                {
                    name: 'created_at',
                    type: 'timestamp',
                    default: 'now()',
                },
                {
                    name: 'updated_at',
                    type: 'timestamp',
                    default: 'now()',
                }
            ]
        }));
    
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.dropTable('sternberg');
    }

}
