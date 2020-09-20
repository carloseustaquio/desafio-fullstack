import { Session } from "../Session"
import jwt from "jsonwebtoken"

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

describe("Session helper", () => {
  it("should save id, email and full name inside token", () => {
    const token = Session.generateToken(fakeUser)
    const decoded = jwt.decode(token)

    expect(decoded).toMatchObject({
      id: fakeUser.id,
      name: `${fakeUser.firstName} ${fakeUser.secondName}`,
      email: fakeUser.email
    })
  })
})