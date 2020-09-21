import { UserRepository } from "@src/repositories/implementations/UserRepository"
import { Session } from "@src/helpers/Session"
import { LoginUseCase } from "../index"
import { fakeUser } from "@test/fixtures/fakeUser"

jest.mock("@src/repositories/implementations/UserRepository")
jest.mock("@src/helpers/Session")

const fakeLoginRequest = {
  email: "teste1@teste.com",
  password: "1234",
}

const invalidLoginRequest = {
  email: "",
  password: "",
}

describe("Create User Use Case", () => {
  const userRepository = new UserRepository() as jest.Mocked<UserRepository>
  const loginUseCase = new LoginUseCase(userRepository)

  it("should throw an error if missing required fields", async () => {
    await expect(loginUseCase.execute(invalidLoginRequest))
      .rejects.toThrow("Missing fields: email, password")
  })

  it("should throw an error if email is not registered", async () => {
    userRepository.findByEmail.mockResolvedValue(undefined)
    await expect(loginUseCase.execute(fakeLoginRequest))
      .rejects.toThrow("Email not found.")
  })

  it("should throw an error if password is incorrect", async () => {
    userRepository.findByEmail.mockResolvedValue({ ...fakeUser, passwordHash: 'invalid-hash' })
    await expect(loginUseCase.execute(fakeLoginRequest))
      .rejects.toThrow("Wrong password.")
  })

  describe("if login values are all correct", () => {
    const fakeToken = "fake-token";

    beforeAll(async () => {
      (Session.generateToken as jest.Mock).mockReturnValue(fakeToken)
      userRepository.findByEmail.mockResolvedValue(fakeUser)
    })

    it("should generate token", async () => {
      const response = await loginUseCase.execute(fakeLoginRequest)
      expect(response).toMatchObject({ token: fakeToken })
    })

    it("should return user and email", async () => {
      const response = await loginUseCase.execute(fakeLoginRequest)
      expect(response).toMatchObject({
        name: `${fakeUser.firstName} ${fakeUser.secondName}`,
        email: fakeUser.email
      })
    })
  })

})