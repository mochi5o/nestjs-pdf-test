import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

@Entity('books')
export class Book {
  @PrimaryGeneratedColumn()
  id: string;

  @Column()
  title: string;

  @Column()
  author: string;

  @Column()
  purchase_at: Date;

  @Column({ nullable: true })
  finish_reading_at?: Date;

  @Column({ nullable: true })
  note?: string;
}
