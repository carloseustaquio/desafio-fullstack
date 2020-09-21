import { User } from "@src/models/User";
import config from "config"
import jwt from "jsonwebtoken"

export class Session {
  private static key: string = config.get("App.privateKey")
  private static readonly expiresIn = '24h'

  static generateToken(user: User, secret: string = Session.key) {
    const userToken = {
      id: user.id,
      name: `${user.firstName} ${user.secondName}`,
      email: user.email
    }

    const token = jwt.sign(userToken, secret, { expiresIn: Session.expiresIn })

    return token
  }
}