import { Validation } from "@src/helpers/Validation";
import { IUserRepository } from "@src/repositories/IUserRespository";
import { ICreateUserRequestDTO } from "./ICreateUserRequestDTO";

export class CreateUser {
  private requiredFields = ["email", "firstName", "secondName", "phone", "password"]

  constructor(
    private userRepository: IUserRepository
  ) { }

  public async execute(data: ICreateUserRequestDTO) {

    Validation.validateFields(data, this.requiredFields)

    await this.checkIfEmailIsAlreadyInUse(data.email)

    const user = await this.userRepository.save(data)

    return user
  }

  private async checkIfEmailIsAlreadyInUse(email: string) {
    const user = await this.userRepository.findByEmail(email)
    if (user) throw new Error("Email already in use.")
  }
}