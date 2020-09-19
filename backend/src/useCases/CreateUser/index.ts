import { Validation } from "@src/helpers/Validation";
import { IUserRepository } from "@src/repositories/IUserRespository";
import { BadRequestError } from "@src/util/errors/RequestError";
import { ICreateUserRequestDTO } from "./ICreateUserRequestDTO";
import bcrypt from "bcrypt"

export class CreateUser {
  private requiredFields = ["email", "firstName", "secondName", "phone", "password"]

  constructor(
    private userRepository: IUserRepository
  ) { }

  public async execute(data: ICreateUserRequestDTO) {

    Validation.validateFields(data, this.requiredFields)

    await this.checkIfEmailIsAlreadyInUse(data.email)

    data.password = this.encryptPassword(data.password)

    const user = await this.userRepository.save(data)

    return user
  }

  private async checkIfEmailIsAlreadyInUse(email: string) {
    const user = await this.userRepository.findByEmail(email)
    if (user) throw new BadRequestError("Email already in use.")
  }

  private encryptPassword(pass: string) {
    return bcrypt.hashSync(pass, 10)
  }
}