import { UserRepository } from "@src/repositories/implementations/UserRepository"
import { User } from "../implementations/UserRepository"

const existingUser = {
  firstName: "Matheus",
  secondName: "Moraes",
  email: "matheusmoraes@gmail.com",
  phone: "5571999998888",
  password: "1234"
}

describe("User entity", () => {
  const userRepository = new UserRepository()

  it("must have a findByEmail method", () => {
    expect(typeof userRepository.findByEmail).toBeDefined()
  })
})