import { User } from "@src/models/User"
import { UserRepository } from "@src/repositories/implementations/UserRepository"
import { CreateUser } from "../index"

jest.mock("@src/repositories/implementations/UserRepository")

const fakeUser = {
  id: "",
  email: "teste1@teste.com",
  firstName: "Teste",
  secondName: "Um",
  phone: "+5521900000001",
  passwordHash: "",
  created_at: new Date(),
  updated_at: new Date()
}

const fakeUserRequest = {
  email: "teste1@teste.com",
  firstName: "Teste",
  secondName: "Um",
  phone: "+5521900000001",
  password: "1234",
}

const invalidUserRequest = {
  email: "",
  firstName: "",
  secondName: "",
  phone: "",
  password: "",
}

describe("Create User Use Case", () => {
  const userRepository = new UserRepository() as jest.Mocked<UserRepository>
  const createUserUseCase = new CreateUser(userRepository)

  it("should call findByEmail.", async () => {
    createUserUseCase.execute(fakeUserRequest)
    expect(userRepository.findByEmail).toHaveBeenCalledWith(fakeUserRequest.email)
  })

  it("should throw if required fields were not passed", async () => {
    await expect(createUserUseCase.execute(invalidUserRequest))
      .rejects.toThrow("Missing fields: email, firstName, secondName, phone, password")
  })

  it("should throw an error if email is already in use", async () => {
    userRepository.findByEmail.mockResolvedValue(fakeUser)
    await expect(createUserUseCase.execute(fakeUserRequest))
      .rejects.toThrowError()
  })

  it("should call save method if request is valid", async () => {
    userRepository.findByEmail.mockResolvedValue(undefined)
    await createUserUseCase.execute(fakeUserRequest)
    expect(userRepository.save).toHaveBeenCalledWith(fakeUserRequest)
  })

})