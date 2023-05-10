import { APIGatewayProxyEvent } from 'aws-lambda';

export interface Request {
  method: string;
  headers: { [key: string]: string };
  path: { profileId: string; id?: string };
  query: { filter?: Filter };
  body: any;
  user: { profileId: string };
}

export function extractRequest(event: APIGatewayProxyEvent): Request {
  const method = event.httpMethod;
  const headers = event.headers;
  const pathParts = event.path.split('/');
  const profileId = pathParts[pathParts.length - 2];
  const id = pathParts[pathParts.length - 1];
  const queryStringParameters = event.queryStringParameters || {};
  const filter: Filter = {
    categories: queryStringParameters.categories?.split(',') || []
  };
  const body = event.body ? JSON.parse(event.body) : null;
  const user = { profileId };

  return {
    method,
    headers,
    path: { profileId, id },
    query: { filter },
    body,
    user
  };
}
