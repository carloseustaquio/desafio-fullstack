export class DefaultError extends Error {
  constructor(
    public message: string,
    public code: number = 500,
    protected description?: string
  ) {
    super(message)
    this.name = this.constructor.name
    Error.captureStackTrace(this, this.constructor)
  }
}