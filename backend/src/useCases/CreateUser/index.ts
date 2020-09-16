import { IUserRepository } from "@src/repositories/IUserRespository";

export class CreateUser {
  constructor(
    private userRepository: IUserRepository
  ) { }

  public async execute(data: any) {
    await this.userRepository.findByEmail(data.email)
  }
}