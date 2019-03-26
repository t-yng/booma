type Omit<T, K extends keyof T> = Pick<T, Exclude<keyof T, K>>;
interface BookConstructor extends Omit<Book, 'isbn' | 'thumbnail'> {
  thumbnail?: string
};

export default class Book {
  static readonly NO_THUMBNAIL = '';

  readonly title: string;
  readonly author: string;
  readonly publisher?: string;
  readonly publishedDate: string;
  readonly pageCount: number;
  readonly isbn_10?: string;
  readonly isbn_13?: string;
  readonly thumbnail: string;

  constructor(init: BookConstructor) {
    this.title = init.title;
    this.author = init.author;
    this.publisher = init.publisher;
    this.publishedDate = init.publishedDate;
    this.pageCount = init.pageCount;
    this.isbn_10 = init.isbn_10;
    this.isbn_13 = init.isbn_13;

    this.thumbnail = (init.thumbnail) ? init.thumbnail : Book.NO_THUMBNAIL;
  }

  get isbn(): string {
    if(this.isbn_13 != null) {
      return this.isbn_13;
    }

    if(this.isbn_10 != null) {
      return this.isbn_10;
    }

    return '';
  }
}