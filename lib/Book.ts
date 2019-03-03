// interface Book {
//   title: string,
//   author: string,
// }

export default class Book {
  constructor(private _title: string, private _author: string) {}

  get title(): string {
    return this._title;
  }

  get author(): string {
    return this._author;
  }
}