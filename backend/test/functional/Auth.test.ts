import { CreateUser } from "@src/useCases/CreateUser"
import { UserRepository } from "@src/repositories/implementations/UserRepository"
import { getManager } from "typeorm"
import { User } from "@src/models/User"
import fakeUserRequest from "../fixtures/fakeUserRequest.json"

const fakeLogin = {
  email: fakeUserRequest.email,
  password: fakeUserRequest.password,
}

describe("Login functional tests", () => {
  beforeAll(async () => {
    const createUserUseCase = new CreateUser(new UserRepository())
    await createUserUseCase.execute(fakeUserRequest)
  })

  afterAll(async () => {
    const db = getManager()
    await db.delete(User, { email: fakeUserRequest.email })
  })


  it("should login with success and return email, name and token", async () => {
    const response = await global.testRequest.post("/auth").send(fakeLogin)

    expect(response.status).toBe(200)
    expect(response.body).toEqual(expect.objectContaining({
      email: fakeUserRequest.email,
      name: `${fakeUserRequest.firstName} ${fakeUserRequest.secondName}`,
    }))
    expect(response.body).toHaveProperty("token")
  })
})