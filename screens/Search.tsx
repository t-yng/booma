import React from 'react';
import { StyleSheet, View, Dimensions } from 'react-native';
import { NavigationTransitionProps } from 'react-navigation';
import SearchBox from '../components/SearchBox';
import BookList from '../components/BookList';
import Book from '../lib/Book';
import Client from '../lib/api/books/client';

interface State {
  books: Array<Book>,
}

export default class Search extends React.Component<NavigationTransitionProps, State> {
  private client: Client;

  constructor(props: NavigationTransitionProps) {
    super(props);
    this.state = {
      books: [],
    }

    this.client = new Client();
  }

  onPressBookItem = (book: Book) => {
    this.props.navigation.navigate('Detail', { book });
  }

  onSubmitSearchText = async (text: string)  => {
    const books = await this.client.searchBooks(text);
    this.handleSearchResult(books);
  }

  private handleSearchResult(books: Array<Book>) {
    this.setState({books: books});
  }

  render() {
    return (
      <View style={styles.root}>
        <SearchBox onSubmitEditing={this.onSubmitSearchText}/>
        <BookList books={this.state.books} onPressBookItem={this.onPressBookItem}/>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  root: {
    height: Dimensions.get('window').height,
  },
});
