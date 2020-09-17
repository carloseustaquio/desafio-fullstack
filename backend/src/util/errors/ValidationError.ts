import { DefaultError } from "./DefaultError";

export class ValidationError extends DefaultError {
  constructor(
    public message: string,
    public code: number = 422,
    protected description?: string
  ) {
    super(message, code, description)
  }
}