export interface Repository<T> {
  create(item: T): Promise<T>;
  update(item: T): Promise<T>;
  delete(id: string): Promise<void>;
  findBy(filter: any): Promise<T[]>;
}
