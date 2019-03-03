import React from 'react';
import BookListItem from './BookListItem';
import Book from '../lib/Book';

interface Props {
  books: Array<Book>,
}

const BookList: React.SFC<Props> = ({
  books
}) => {
  return (
    <>
      {books.map((book, i) => {
        return　<BookListItem key={i} book={book}/>
      })}
    </>
  );
}

export default BookList;