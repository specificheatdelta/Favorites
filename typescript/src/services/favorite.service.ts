import { Favorite } from './favorite.entity';
import { Repository } from './repository';
import { FavoriteRepository } from './favorite.repository';

export class FavoriteService {
  constructor(private repository: Repository<Favorite> = new FavoriteRepository()) { }

  createFavorite(favorite: Favorite): Promise<Favorite> {
    return this.repository.create(favorite);
  }

  updateFavorite(favorite: Favorite): Promise<Favorite> {
    return this.repository.update(favorite);
  }

  deleteFavorite(id: string): Promise<void> {
    return this.repository.delete(id);
  }

  getFavorites(filter: any): Promise<Favorite[]> {
    return this.repository.findBy(filter);
  }
}
