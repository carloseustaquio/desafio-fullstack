import { UserRepository } from "@src/repositories/implementations/UserRepository"
import { Session } from "@src/helpers/Session"
import { LoginUseCase } from "../index"

jest.mock("@src/repositories/implementations/UserRepository")
jest.mock("@src/helpers/Session")

const fakeUser = {
  id: "d19776a7-c70e-4e91-a25d-78233d4d0a59",
  email: "teste1@teste.com",
  firstName: "Teste",
  secondName: "Um",
  phone: "+5521900000001",
  passwordHash: "$2b$10$VBsu4dQvEVGWgIlg4TGl3.nA2EUoA0l7KmvZGctl.hd0ZyHIRscqC", // password: 1234
  created_at: new Date(),
  updated_at: new Date()
}

const fakeUserRequest = {
  email: "teste1@teste.com",
  password: "1234",
}

const invalidUserRequest = {
  email: "",
  password: "",
}

describe("Create User Use Case", () => {
  const userRepository = new UserRepository() as jest.Mocked<UserRepository>
  const loginUseCase = new LoginUseCase(userRepository)

  it("should throw an error if missing required fields", async () => {
    await expect(loginUseCase.execute(invalidUserRequest))
      .rejects.toThrow("Missing fields: email, password")
  })

  it("should throw an error if email is not registered", async () => {
    userRepository.findByEmail.mockResolvedValue(undefined)
    await expect(loginUseCase.execute(fakeUserRequest))
      .rejects.toThrow("Email not found.")
  })

  it("should throw an error if password is incorrect", async () => {
    userRepository.findByEmail.mockResolvedValue({ ...fakeUser, passwordHash: 'invalid-hash' })
    await expect(loginUseCase.execute(fakeUserRequest))
      .rejects.toThrow("Wrong password.")
  })

  describe("if login values are all correct", () => {
    const fakeToken = "fake-token";

    beforeAll(async () => {
      (Session.generateToken as jest.Mock).mockReturnValue(fakeToken)
      userRepository.findByEmail.mockResolvedValue(fakeUser)
    })

    it("should generate token", async () => {
      const response = await loginUseCase.execute(fakeUserRequest)
      expect(response).toMatchObject({ token: fakeToken })
    })

    it("should return user and email", async () => {
      const response = await loginUseCase.execute(fakeUserRequest)
      expect(response).toMatchObject({
        name: `${fakeUser.firstName} ${fakeUser.secondName}`,
        email: fakeUser.email
      })
    })
  })

})