export interface AppError {
  message: string;
  statusCode: number;
  innerError?: Error;
}
