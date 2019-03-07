export default class Pagination {
  private page: number;
  private max: number;

  public constructor(max: number) {
    this.page = 1;
    this.max = max;
  }

  get MINIMUM_PAGE() {
    return 1;
  }

  public previous() {
    if(this.page === this.MINIMUM_PAGE) {
      return this.page;
    }

    return this.page - 1;
  }

  public next() {
    return this.page + 1;
  }

  public current() {
    return this.page;
  }

  public increment() {
    this.page += 1;
  }

  public decrement() {
    if(this.page > this.MINIMUM_PAGE) {
      this.page -= 1;
    }
  }
}