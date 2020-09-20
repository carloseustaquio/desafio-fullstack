import { User } from "@src/models/User"
import { getManager } from "typeorm"

const fakeUserRequest = {
  email: "teste5@teste.com",
  firstName: "Teste",
  secondName: "Cinco",
  phone: "+5521900000001",
  password: "1234",
}

describe("User functional tests", () => {
  beforeEach(async () => {
    const db = getManager()
    await db.delete(User, { email: fakeUserRequest.email })
  })

  it("should create a user with success", async () => {
    const response = await global.testRequest.post("/user").send(fakeUserRequest)

    expect(response.status).toBe(201)
    expect(response.body).toEqual(expect.objectContaining({
      email: fakeUserRequest.email,
      firstName: fakeUserRequest.firstName,
      secondName: fakeUserRequest.secondName,
      phone: fakeUserRequest.phone
    }))
  })
})