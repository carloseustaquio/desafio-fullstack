import { UserRepository } from "@src/repositories/implementations/UserRepository"
import { CreateUser } from "../index"

import fakeUserRequest from "@test/fixtures/fakeUserRequest.json"
import invalidUserRequest from "@test/fixtures/invalidUserRequest.json"
import { fakeUser } from "@test/fixtures/fakeUser"

jest.mock("@src/repositories/implementations/UserRepository")

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