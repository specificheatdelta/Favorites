import { Favorite } from '../entities/favorite.entity';
import { Repository, getRepository } from 'typeorm';
import { Filter } from '../utils/request';
import { IFavoriteRepository } from './favorite.repository.interface';

export class FavoriteTypeormRepository implements IFavoriteRepository {
  private favoriteRepository: Repository<Favorite>;

  constructor() {
    this.favoriteRepository = getRepository(Favorite);
  }

  async getFavoriteById(profileId: string, id: string): Promise<Favorite | null> {
    const favorite = await this.favoriteRepository.findOne({ id, profileId });
    return favorite || null;
  }

  async getFavorites(profileId: string, filter: Filter): Promise<Favorite[]> {
    const query = this.favoriteRepository.createQueryBuilder('favorite').where('favorite.profileId = :profileId', { profileId });

    if (filter.categories.length > 0) {
      query.andWhere('favorite.category IN (:...categories)', { categories: filter.categories });
    }

    return query.getMany();
  }

  async saveFavorite(favorite: Favorite): Promise<Favorite> {
    return this.favoriteRepository.save(favorite);
  }

  async deleteFavorite(favorite: Favorite): Promise<void> {
    await this.favoriteRepository.remove(favorite);
  }
}
