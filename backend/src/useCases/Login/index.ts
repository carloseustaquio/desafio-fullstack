import { Validation } from "@src/helpers/Validation"
import { IUserRepository } from "@src/repositories/IUserRespository"
import { BadRequestError } from "@src/util/errors/RequestError"
import { ILoginRequestDTO } from "./ILoginRequestDTO"
import { Session } from "@src/helpers/Session"
import bcrypt from "bcrypt"

export class LoginUseCase {
  private readonly requiredFields = ["email", "password"]

  constructor(private userRepository: IUserRepository) { }

  public async execute(data: ILoginRequestDTO) {

    Validation.validateFields(data, this.requiredFields)

    const user = await this.userRepository.findByEmail(data.email)
    if (!user) throw new BadRequestError("Email not found.")

    if (!this.passwordsMatch(data.password, user.passwordHash)) {
      throw new BadRequestError("Wrong password.")
    }

    const token = Session.generateToken(user)

    return {
      name: `${user.firstName} ${user.secondName}`,
      email: user.email,
      token
    }
  }

  private passwordsMatch(passwordTrying: string, savedPassword: string): boolean {
    return bcrypt.compareSync(passwordTrying, savedPassword)
  }
}