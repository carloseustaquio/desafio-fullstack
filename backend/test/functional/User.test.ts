import { User } from "@src/models/User"
import { getManager } from "typeorm"
import fakeUserRequest from "../fixtures/fakeUserRequest.json"


const deletUser = async () => {
  const db = getManager()
  await db.delete(User, { email: fakeUserRequest.email })
}

describe("User functional tests", () => {
  beforeEach(async () => { await deletUser() })
  afterAll(async () => { await deletUser() })

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