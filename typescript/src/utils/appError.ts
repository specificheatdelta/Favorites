export class AppError extends Error {
  constructor(public statusCode: number, message: string, public innerError?: Error) {
    super(message);
  }
}
