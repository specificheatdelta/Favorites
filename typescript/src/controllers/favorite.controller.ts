import { APIGatewayProxyEvent } from 'aws-lambda';
import { StatusCode } from '../utils/statusCode';
import { FavoriteService } from '../services/favorite.service';
import { FavoriteRepository } from '../repositories/favorite.repository';
import { AppError } from '../utils/appError';
import { Request, extractRequest } from '../utils/request';
import { validateRequest } from '../utils/validation';
import { validationSchema } from '../utils/validationSchema';
import { getLogger } from '../utils/logger';

const logger = getLogger('FavoriteController');

export class FavoriteController {
  private service: FavoriteService;

  constructor() {
    const repository = new FavoriteRepository();
    this.service = new FavoriteService(repository);
  }

  async handle(event: APIGatewayProxyEvent): Promise<{
    statusCode: StatusCode;
    body: any;
    headers: { [key: string]: string };
  }> {
    try {
      const request: Request = extractRequest(event);
      validateRequest(request, validationSchema);
      logger.info(`Request: ${JSON.stringify(request)}`);

      switch (request.method) {
        case 'GET':
          return await this.handleGet(request);
        case 'POST':
          return await this.handlePost(request);
        case 'PUT':
          return await this.handlePut(request);
        case 'DELETE':
          return await this.handleDelete(request);
        default:
          throw new AppError(StatusCode.BAD_REQUEST, 'Invalid HTTP method');
      }
    } catch (error) {
      if (error instanceof AppError) {
        logger.error(`AppError: ${error.message}`);
        return {
          statusCode: error.statusCode,
          body: { message: error.message },
          headers: {
            'Content-Type': 'application/json'
          }
        };
      } else {
        logger.error(`Error: ${error.message}`);
        throw error;
      }
    }
  }

  private async handleGet(request: Request): Promise<{
    statusCode: StatusCode;
    body: any;
    headers: { [key: string]: string };
  }> {
    if (request.path.id) {
      const favorite = await this.service.getFavoriteById(request.user.profileId, request.path.id);
      return {
        statusCode: StatusCode.OK,
        body: favorite,
        headers: {
          'Content-Type': 'application/json'
        }
      };
    } else {
      const favorites = await this.service.getFavorites(request.user.profileId, request.query.filter);
      return {
        statusCode: StatusCode.OK,
        body: favorites,
        headers: {
          'Content-Type': 'application/json'
        }
      };
    }
  }

  private async handlePost(request: Request): Promise<{
    statusCode: StatusCode;
    body: any;
    headers: { [key: string]: string };
  }> {
    const favorite = await this.service.createFavorite(request.user.profileId, request.body);
    return {
      statusCode: StatusCode.CREATED,
      body: favorite,
      headers: {
        'Content-Type': 'application/json'
      }
    };
  }

  private async handlePut(request: Request): Promise<{
    statusCode: StatusCode;
    body: any;
    headers: { [key: string]: string };
  }> {
    await this.service.updateFavorite(request.user.profileId, request.path.id, request.body);
    return {
      statusCode: StatusCode.NO_CONTENT,
      body: {},
      headers: {
        'Content-Type': 'application/json'
      }
    };
  }

  private async handleDelete(request: Request): Promise<{
    statusCode: StatusCode;
    body: any;
    headers: { [key: string]: string };
  }> {
    await this.service.deleteFavorite(request.user.profileId, request.path.id);
    return {
      statusCode: StatusCode.NO_CONTENT,
      body: {},
      headers: {
        'Content-Type': 'application/json'
      }
    };
  }

}
