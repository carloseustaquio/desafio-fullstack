import { MigrationInterface, QueryRunner } from "typeorm";

export class CreateTableUser1600339860660 implements MigrationInterface {
    name = 'CreateTableUser1600339860660'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`CREATE TABLE "user" ("id" uuid NOT NULL DEFAULT uuid_generate_v4(), "firstName" character varying NOT NULL, "secondName" character varying NOT NULL, "email" character varying NOT NULL, "phone" character varying(15) NOT NULL, "passwordHash" character varying NOT NULL, "created_at" TIMESTAMP NOT NULL DEFAULT now(), "updated_at" TIMESTAMP NOT NULL DEFAULT now(), CONSTRAINT "PK_cace4a159ff9f2512dd42373760" PRIMARY KEY ("id"))`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`DROP TABLE "user"`);
    }
}
