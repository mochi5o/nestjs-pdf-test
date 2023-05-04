export class CreateBookDto {
    title: string;
    author: string;
    purchase_at: Date;
    finish_reading_at?: Date;
    note?: string;
}
