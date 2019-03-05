import React from 'react';
import BookListItem from './BookListItem';
import Book from '../lib/Book';
import { ScrollView } from 'react-native';

interface Props {
  books: Array<Book>,
}

const BookList: React.SFC<Props> = ({
  books
}) => {
  return (
    <ScrollView>
      {books.map((book, i) => {
        return　<BookListItem key={i} book={book}/>
      })}
    </ScrollView>
  );
}

export default BookList;