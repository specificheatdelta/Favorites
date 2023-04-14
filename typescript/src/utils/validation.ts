import { Request } from './request';
import * as Ajv from 'ajv';

const ajv = new Ajv();

export function validateRequest(request: Request, schema: object): void {
  const valid = ajv.validate(schema, request);

  if (!valid) {
    throw new AppError(StatusCode.BAD_REQUEST, ajv.errorsText());
  }
}
