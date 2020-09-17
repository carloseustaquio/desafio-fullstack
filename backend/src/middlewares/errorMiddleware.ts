import { ErrorMiddleware } from "@overnightjs/core/lib/decorators/types";
import { DefaultError } from "@src/util/errors/DefaultError";
import { NextFunction, Request, Response } from "express";

export const errorMiddleware: ErrorMiddleware = ((err: DefaultError, req: Request, res: Response, next: NextFunction) => {
  if (err.code) res.status(err.code).json({ message: err.message })
  else res.status(500).json({ message: err.message })
})