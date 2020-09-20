import { CreateUser } from "@src/useCases/CreateUser"
import { UserRepository } from "@src/repositories/implementations/UserRepository"
import { getManager } from "typeorm"
import { User } from "@src/models/User"

const fakeUserRequest = {
  email: "functionalAuthTest@functionalTests.com",
  firstName: "Test",
  secondName: "Functional",
  phone: "+5521900000001",
  password: "1234",
}

const fakeLogin = {
  email: "functionalAuthTest@functionalTests.com",
  password: "1234",
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


  it("should login and receive email, name and token if login values are good", async () => {
    const response = await global.testRequest.post("/auth").send(fakeLogin)

    expect(response.status).toBe(200)
    expect(response.body).toEqual(expect.objectContaining({
      email: fakeUserRequest.email,
      name: `${fakeUserRequest.firstName} ${fakeUserRequest.secondName}`,
    }))
    expect(response.body).toHaveProperty("token")
  })
})