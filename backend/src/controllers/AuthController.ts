import { NextFunction, Request, Response } from "express";
import { ClassErrorMiddleware, Controller, Post } from "@overnightjs/core";
import { errorMiddleware } from "@src/middlewares/errorMiddleware"
import { DefaultError } from "@src/util/errors/DefaultError";
import { LoginUseCase } from "@src/useCases/Login";
import { UserRepository } from "@src/repositories/implementations/UserRepository";

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

  @Post("recover-password")
  public async postRecoverPassword(req: Request, res: Response, next: NextFunction): Promise<void> {
    next(new DefaultError("Service not implemented"))
  }
}
