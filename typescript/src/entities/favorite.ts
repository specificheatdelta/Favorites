import { Entity, PrimaryGeneratedColumn, Column } from 'typeorm';

@Entity('favorites')
export class Favorite {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @Column()
  profileId: string;

  @Column()
  title: string;

  @Column('simple-array')
  category: string[];

  @Column()
  contentId: string;
}
