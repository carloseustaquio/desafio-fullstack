import { UserRepository } from "@src/repositories/implementations/UserRepository"
import { CreateUser } from "../index"

describe("Create User Use Case", async () => {
  const user = { email: "" }
  const userRepository = new UserRepository()
  const createUserUseCase = new CreateUser(userRepository)

  it("should check if email already exists", async () => {
    await createUserUseCase.execute(user)
    expect(userRepository.findByEmail).toHaveBeenCalled()
  })
})