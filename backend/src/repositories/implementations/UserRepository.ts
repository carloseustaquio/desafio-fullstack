import { User } from "@src/models/User";
import { ICreateUserRequestDTO } from "@src/useCases/CreateUser/ICreateUserRequestDTO";
import { EntityManager, getManager } from "typeorm";
import { IUserRepository } from "../IUserRespository";

export class UserRepository implements IUserRepository {

  constructor(
    private db: EntityManager = getManager()
  ) { }

  public async findByEmail(email: string) {
    return this.db.findOne(User, { where: { email } })
  }

  public async save(data: ICreateUserRequestDTO) {
    const user = new User()

    user.firstName = data.firstName
    user.secondName = data.secondName
    user.email = data.email
    user.passwordHash = data.password
    user.phone = data.phone

    return await this.db.save(user)
  }
}