import * as google from './google';
import Book from '../../Book';

export default class Client {
  public searchBooks(text: string): Promise<Book[]> {
    return google.searchBooks(text);
  }
}
