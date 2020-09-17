import { MigrationInterface, QueryRunner, getManager } from "typeorm";
import { usersSeed } from "./seeds/usersSeed"
import { User } from "../models/User";

export class CreateDefaultUsers1600340066320 implements MigrationInterface {

    public async up(queryRunner: QueryRunner): Promise<void> {
        const manager = getManager()

        usersSeed.forEach(u => {
            const user = new User()

            user.email = u.email
            user.firstName = u.firstName
            user.secondName = u.secondName
            user.phone = u.phone
            user.passwordHash = u.passwordHash

            manager.save(user)
        })

    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        //
    }

}
