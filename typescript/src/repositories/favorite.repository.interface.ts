import { Favorite } from '../entities/favorite.entity';
import { Filter } from '../utils/request';

export interface IFavoriteRepository {
  getFavoriteById(profileId: string, id: string): Promise<Favorite | null>;
  getFavorites(profileId: string, filter: Filter): Promise<Favorite[]>;
  saveFavorite(favorite: Favorite): Promise<Favorite>;
  deleteFavorite(favorite: Favorite): Promise<void>;
}
