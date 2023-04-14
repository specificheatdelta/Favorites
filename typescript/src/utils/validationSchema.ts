import * as fs from 'fs';
import * as path from 'path';

const swaggerFilePath = path.resolve(__dirname, '..', '..', 'docs', 'swagger.json');
const swaggerJson = JSON.parse(fs.readFileSync(swaggerFilePath, 'utf-8'));

export const validationSchema = {
  // Extract the required JSON schema from the Swagger docs
};
