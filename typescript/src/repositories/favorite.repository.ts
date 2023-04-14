import { Repository } from './repository';
import { Favorite } from './favorite.entity';
import { EntityRepository, getRepository } from 'typeorm';

@EntityRepository(Favorite)
export class FavoriteRepository implements Repository<Favorite> {
  private repository = getRepository(Favorite);

  async create(item: Favorite): Promise<Favorite> {
    return await this.repository.save(item);
  }

  async update(item: Favorite): Promise<Favorite> {
    return await this.repository.save(item);
  }

  async delete(id: string): Promise<void> {
    await this.repository.delete(id);
  }

  async findBy(filter: any): Promise<Favorite[]> {
    return await this.repository.find(filter);
  }
}
