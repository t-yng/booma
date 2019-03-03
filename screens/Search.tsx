import React from 'react';
import { StyleSheet, View, Dimensions } from 'react-native';
import { Header } from 'react-native-elements';
import SearchBox from '../components/SearchBox';
import BookList from '../components/BookList';
import Book from '../lib/Book';

interface Props {}
interface State {
  books: Array<Book>,
}

export default class Search extends React.Component<Props, State> {

  constructor(props: Props) {
    super(props);
    this.state = {
      books: [],
    }
  }

  onSubmitSearchText = (text: string)  => {
    const books = [
      new Book('ほげほげ', '柳倫浩'),
      new Book('ふがふが', 'アタモト'),
    ]

    this.handleSearchResult(books);
  }

  private handleSearchResult(books: Array<Book>) {
    this.setState({books: books});
  }

  render() {
    return (
      <View style={styles.root}>
        <Header
          containerStyle={styles.header}
          centerComponent={{text: '検索結果'}}
        />
        <SearchBox onSubmitEditing={this.onSubmitSearchText}/>
        <BookList books={this.state.books}/>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  root: {
    height: Dimensions.get('window').height,
  },
  header: {
    backgroundColor: '#f8f8f8',
    marginBottom: 20
  },
});
