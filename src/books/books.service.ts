import { Injectable, InternalServerErrorException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { DeleteResult, Repository, UpdateResult } from 'typeorm';
import { Book } from './entities/book.entity';
import { CreateBookDto } from './dto/create-book.dto';
import { UpdateBookDto } from './dto/update-book.dto';

@Injectable()
export class BooksService {
  constructor(
    @InjectRepository(Book)
    private repository: Repository<Book>,
  ) {}

  create(dto: CreateBookDto): Promise<Book> {
    const newBook: Omit<Book, 'id'> = { ...dto };
    return this.repository.save(newBook);
  }

  findAll(): Promise<Book[]> {
    return this.repository.find();
  }

  async findOne(id: string): Promise<Book> {
    const book = await this.repository.findOne({ where: { id } });

    if (!book) {
      throw new InternalServerErrorException('Book not found.');
    }

    return book;
  }

  async update(id: string, dto: UpdateBookDto): Promise<UpdateResult> {
    const currentBook = await this.findOne(id);
    const newBook = { ...currentBook, ...dto };

    return this.repository.update({ id }, newBook);
  }

  remove(id: string): Promise<DeleteResult> {
    return this.repository.delete({ id });
  }
}
