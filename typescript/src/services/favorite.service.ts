import { Favorite } from '../entities/favorite.entity';
import { IFavoriteRepository } from '../repositories/favorite.repository.interface';
import { Filter } from '../utils/request';

export class FavoriteService {
  constructor(private readonly favoriteRepository: IFavoriteRepository) { }

  async getFavoriteById(profileId: string, id: string): Promise<Favorite | null> {
    return this.favoriteRepository.getFavoriteById(profileId, id);
  }

  async getFavorites(profileId: string, filter: Filter): Promise<Favorite[]> {
    return this.favoriteRepository.getFavorites(profileId, filter);
  }

  async createFavorite(profileId: string, favoriteData: Partial<Favorite>): Promise<Favorite> {
    const favorite = new Favorite();
    favorite.profileId = profileId;
    favorite.title = favoriteData.title;
    favorite.category = favoriteData.category;
    favorite.contentId = favoriteData.contentId;

    return this.favoriteRepository.saveFavorite(favorite);
  }

  async updateFavorite(
    profileId: string,
    id: string,
    favoriteData: Partial<Favorite>
  ): Promise<void> {
    const favorite = await this.favoriteRepository.getFavoriteById(profileId, id);

    if (!favorite) {
      throw new AppError(StatusCode.NOT_FOUND, 'Favorite not found');
    }

    favorite.title = favoriteData.title || favorite.title;
    favorite.category = favoriteData.category || favorite.category;
    favorite.contentId = favoriteData.contentId || favorite.contentId;

    await this.favoriteRepository.saveFavorite(favorite);
  }

  async deleteFavorite(profileId: string, id: string): Promise<void> {
    const favorite = await this.favoriteRepository.getFavoriteById(profileId, id);

    if (!favorite) {
      throw new AppError(StatusCode.NOT_FOUND, 'Favorite not found');
    }

    await this.favoriteRepository.deleteFavorite(favorite);
  }
}
