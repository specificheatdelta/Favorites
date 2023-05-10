import { APIGatewayProxyEvent } from 'aws-lambda';

export interface Request extends Omit<APIGatewayProxyEvent, 'headers' | 'pathParameters' | 'queryStringParameters'> {
  method: string;
  headers: {
    platform: string;
    platformVersion: string;
    transactionId: string;
  };
  path: {
    profileId: string;
  };
  query: Record<string, string>;
  body: any;
  user: {
    profileId: string;
  };
}
