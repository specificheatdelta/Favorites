import { APIGatewayProxyEvent, APIGatewayProxyResult } from 'aws-lambda';
import { FavoriteController } from '../controllers/favorite.controller';
import { StatusCode } from '../utils/statusCode';

export const handler = async (event: APIGatewayProxyEvent): Promise<APIGatewayProxyResult> => {
  const controller = new FavoriteController();

  try {
    const response = await controller.handle(event);
    return {
      statusCode: response.statusCode,
      body: JSON.stringify(response.body),
      headers: response.headers
    };
  } catch (error) {
    return {
      statusCode: StatusCode.INTERNAL_SERVER_ERROR,
      body: JSON.stringify({ message: 'Internal Server Error' }),
      headers: {
        'Content-Type': 'application/json'
      }
    };
  }
};
