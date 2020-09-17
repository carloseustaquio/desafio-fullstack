import { Controller, Post } from "@overnightjs/core";
import { UserRepository } from "@src/repositories/implementations/UserRepository";
import { CreateUser } from "@src/useCases/CreateUser";
import { Request, Response } from "express";

@Controller("user")
export class UserController {
  @Post("")
  public async postUser(req: Request, res: Response): Promise<void> {
    try {
      const createUserUseCase = new CreateUser(new UserRepository())
      const userCreated = await createUserUseCase.execute(req.body)
      res.status(201).send(userCreated);
    } catch (error) {
      res.status(500).send({ error: "Error while trying to create user." });
    }
  }
}
