import { ClassErrorMiddleware, Controller, Post } from "@overnightjs/core";
import { UserRepository } from "@src/repositories/implementations/UserRepository";
import { NextFunction, Request, Response } from "express";
import { errorMiddleware } from "@src/middlewares/errorMiddleware"
import { CreateUser } from "@src/useCases/CreateUser";

@Controller("user")
@ClassErrorMiddleware(errorMiddleware)
export class UserController {
  @Post("")
  public async postUser(req: Request, res: Response, next: NextFunction): Promise<void> {
    try {
      const createUserUseCase = new CreateUser(new UserRepository())
      const userCreated = await createUserUseCase.execute(req.body)
      res.status(201).send(userCreated);
    } catch (error) {
      next(error)
    }
  }
}
