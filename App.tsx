import React from 'react';
import { StyleSheet, Text, View, Button, Dimensions } from 'react-native';
import { Header } from 'react-native-elements';
import AddBookButton from './components/AddBookButton';
import SearchBox from './components/SearchBox';
import ActionSheet from 'react-native-actionsheet';

export default class App extends React.Component {
  private actionSheet: any;

  showActionSheet = () => {
    this.actionSheet.show();
  }

  onPressActionSheetButton = (index: number) => {
    /* do something */
  }

  render() {
    return (
      <View style={styles.app}>
        <Header
          containerStyle={styles.header}
          centerComponent={{text: '本棚'}}
        />
        <SearchBox/>
        <AddBookButton
          onPress={this.showActionSheet}
          containerStyle={styles.addBookButton}
        />
        <ActionSheet
          ref={(o: any) => this.actionSheet = o}
          options={['検索結果から登録', 'Cancel']}
          cancelButtonIndex={1}
          destructiveButtonIndex={1}
          onPress={this.onPressActionSheetButton}
        />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  app: {
    height: Dimensions.get('window').height,
  },
  header: {
    backgroundColor: '#f8f8f8',
    marginBottom: 20
  },
  addBookButton: {
    bottom: 30,
    right: 30,
    position: 'absolute',
  },
});
