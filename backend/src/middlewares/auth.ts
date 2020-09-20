// import { NextFunction, Request, Response } from "express";
// import { Session } from "@src/helpers/Session";

// export const isUserAuthenticated = (req: Request, res: Response, next: NextFunction) => {
//   try {

//     const authHeader = req.headers.authorization

//     if (!authHeader) throw new Error("Token not sent.")

//     const [scheme, token] = authHeader.split(' ');

//     if (!/^Bearer$/i.test(scheme)) {
//       throw new Error("Bad formatted token, it must be of type `Bearer <token>`")
//     }

//     const decoded: any = Session.verifyToken(token)

//     req.currentUser = decoded

//     return next();

//   } catch (error) {
//     console.log(error)
//     next(error)
//   }
// }