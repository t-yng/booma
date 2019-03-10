import React from 'react';
import {
  ScrollView,
  StyleSheet,
  View,
  Text,
} from 'react-native';
import {
  Input,
} from 'react-native-elements'
import { NavigationTransitionProps } from 'react-navigation';
import Book from '../lib/Book';

const Detail: React.SFC<NavigationTransitionProps> = ({
  navigation,
}) => {
  const book = navigation.getParam('book');
  return(
    <ScrollView contentContainerStyle={styles.root}>
      <View style={styles.top}>
        <View style={styles.thumbnail}></View>
        <View style={styles.meta}>
          <Text style={styles.title}>{book.title}</Text>
          <Text style={styles.author}>{book.author}</Text>
          <View style={styles.readStatus}></View>
        </View>
      </View>
      <View style={styles.formItem}>
        <Input
          label="タグ"
          editable={false}
          inputContainerStyle={styles.tag}
        ></Input>
      </View>

      <View style={styles.formItem}>
        <Input
          label="メモ"
          multiline={true}
          inputContainerStyle={styles.memo}
        />
      </View>
      <View style={styles.formItem}>
        <Input label="ISBN"></Input>
      </View>
    </ScrollView>
  );
}

export default Detail;

const styles = StyleSheet.create({
  root: {
    paddingLeft: 30,
  },
  top: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    marginBottom: 30,
  },
  thumbnail: {
    width: 60,
    height: 80,
    borderWidth: 1,
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
  tag: {
    borderColor: '#000',
    borderWidth: 1,
    height: 30,
  },
  memo: {
    borderColor: '#000',
    borderWidth: 1,
    height: 60,
  },
  formItem: {
    marginBottom: 10,
  },
  readStatus: {

  },
});