import 'reflect-metadata';
import { config } from './config';
import { createConnection } from 'typeorm';
import { handler } from './handlers/favorite.handler';

// Load environment variables from .env file
import * as dotenv from 'dotenv';
dotenv.config();

// Connect to the database
createConnection(config.typeorm)
  .then(() => {
    console.log('Database connected');
  })
  .catch((error) => {
    console.error('Error connecting to database:', error);
  });

// Export the Lambda handler
exports.handler = handler;
