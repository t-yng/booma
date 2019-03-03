import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import Book from '../lib/Book';

interface Props {
  book: Book,
}

const BookListItem: React.SFC<Props> = ({
  book
}) => {
  return (
    <View style={styles.root}>
      <View style={styles.thumbnail}></View>
      <View style={styles.meta}>
        <Text style={styles.title}>{book.title}</Text>
        <Text style={styles.author}>{book.author}</Text>
        <View style={styles.readStatus}></View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  root: {
    padding: 10,
    paddingLeft: 30,
    // height: 100,
    borderBottomWidth: 1,
    borderBottomColor: 'black',
    flexDirection: 'row',
  },
  thumbnail: {
    width: 60,
    height: 80,
    borderWidth: 1,
    borderColor: 'black',
  },
  meta: {
    marginLeft: 20,
  },
  title: {
    marginBottom: 10,
  },
  author: {
    marginBottom: 10,
  },
  readStatus: {

  }
});

export default BookListItem;