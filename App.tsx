import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { Header } from 'react-native-elements';
import SearchBox from './components/SearchBox';

export default class App extends React.Component {
  render() {
    return (
      <View>
        <Header
          containerStyle={styles.header}
          centerComponent={{text: '本棚'}}
        />
        <SearchBox/>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  header: {
    backgroundColor: '#f8f8f8',
    marginBottom: 20
  },
});
