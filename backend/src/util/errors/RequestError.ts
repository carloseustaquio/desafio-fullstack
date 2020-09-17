import { DefaultError } from "./DefaultError";

export class BadRequestError extends DefaultError {
  constructor(
    public message: string,
    public code: number = 400,
    protected description?: string
  ) {
    super(message, code, description)
  }
}