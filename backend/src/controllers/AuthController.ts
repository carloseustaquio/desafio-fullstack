import { NextFunction, Request, Response } from "express";
import { ClassErrorMiddleware, Controller, Post } from "@overnightjs/core";
import { UserRepository } from "@src/repositories/implementations/UserRepository";
import { errorMiddleware } from "@src/middlewares/errorMiddleware"
import { LoginUseCase } from "@src/useCases/Login";

@Controller("auth")
@ClassErrorMiddleware(errorMiddleware)
export class AuthController {
  @Post("")
  public async postUser(req: Request, res: Response, next: NextFunction): Promise<void> {
    try {
      const loginUseCase = new LoginUseCase(new UserRepository())
      const loggedUser = await loginUseCase.execute(req.body)
      res.status(200).send(loggedUser);
    } catch (error) {
      next(error)
    }
  }
}
