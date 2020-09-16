import { IUserRepository } from "../IUserRespository";

export interface User {
  firstName: string,
  secondName: string,
  email: string,
  phone: string,
  password: string,
}

export interface EntityManager {
  findOne: (model: any, options: object) => Promise<User>
}

export class UserRepository implements IUserRepository {

  constructor() { }

  public async findByEmail(email: string) {
    return "TODO"
  }
}