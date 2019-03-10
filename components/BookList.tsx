import React from 'react';
import BookListItem from './BookListItem';
import Book from '../lib/Book';
import { ScrollView } from 'react-native';

interface Props {
  books: Array<Book>,
  onPressBookItem: (book: Book) => void
}

const BookList: React.SFC<Props> = ({
  books,
  onPressBookItem,
}) => {
  return (
    <ScrollView>
      {books.map((book, i) => {
        return　<BookListItem key={i} book={book} onPress={onPressBookItem}/>
      })}
    </ScrollView>
  );
}

export default BookList;