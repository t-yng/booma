import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';
import { Image } from 'react-native-elements';
import Book from '../lib/Book';

interface Props {
  book: Book,
  onPress: (book: Book) => void
}

const BookListItem: React.SFC<Props> = ({
  book,
  onPress,
}) => {
  return (
    <TouchableOpacity style={styles.root} onPress={() => onPress(book)}>
      <Image
        source={{ uri: book.thumbnail }}
        style={styles.thumbnail}
      />
      <View style={styles.meta}>
        <Text style={styles.title}>{book.title}</Text>
        <Text style={styles.author}>{book.author}</Text>
        <View style={styles.readStatus}></View>
      </View>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  root: {
    paddingTop: 10,
    paddingBottom: 10,
    paddingLeft: 30,
    paddingRight: 30,
    borderBottomWidth: 1,
    borderBottomColor: 'black',
    flexDirection: 'row',
    flexWrap: 'wrap',
  },
  thumbnail: {
    width: 60,
    height: 80,
    borderWidth: 0.5,
    borderColor: 'black',
  },
  meta: {
    marginLeft: 20,
    flex: 3,
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