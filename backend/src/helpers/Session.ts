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

  // static verifyToken(token: string): object {
  //   try {
  //     const decoded: any = jwt.verify(token, Session.key)
  //     if (typeof decoded === 'string') throw new Error("Bad formatted token.")
  //     if (Session.isTokenExpired(decoded.exp)) throw new Error("Expired token.")
  //     return decoded
  //   } catch (error) {
  //     console.log(error)
  //     throw error
  //   }
  // }

  // private static isTokenExpired(exp: number) {
  //   return exp * 1000 < Date.now()
  // }
}