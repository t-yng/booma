import React from 'react';
import {
  ScrollView,
  StyleSheet,
  View,
  Text,
} from 'react-native';
import { Input, Image } from 'react-native-elements'
import { NavigationTransitionProps } from 'react-navigation';
import ContentLayout from './ContentLayout';
import Book from '../lib/Book';

const Detail: React.SFC<NavigationTransitionProps> = ({
  navigation,
}) => {
  const book: Book = navigation.getParam('book');
  return(
    <ContentLayout>
      <ScrollView contentContainerStyle={styles.root}>
        <View style={styles.top}>
          <Image
          source={{ uri: book.thumbnail }}
          style={styles.thumbnail}
          />
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
          />
        </View>
        <View style={styles.formItem}>
          <Input
            label="メモ"
            multiline={true}
            inputContainerStyle={styles.memo}
          />
        </View>
        <View style={styles.formItem}>
          <Input label="ISBN">{book.isbn}</Input>
        </View>
        <View style={styles.formItem}>
          <Input label="出版社">{book.publisher}</Input>
        </View>
        <View style={styles.formItem}>
          <Input label="発行年月日">{book.publishedDate}</Input>
        </View>
        <View style={styles.formItem}>
          <Input label="ページ数">{book.pageCount}</Input>
        </View>
        <View style={styles.formItem}>
          <Input label="登録日"></Input>
        </View>
        <View style={styles.formItem}>
          <Input label="読了日"></Input>
        </View>
      </ScrollView>
    </ContentLayout>
  );
}

export default Detail;

const styles = StyleSheet.create({
  root: {
    paddingLeft: 30,
    paddingRight: 30,
  },
  top: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    marginBottom: 30,
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
  tag: {
    borderWidth: 1,
    height: 30,
  },
  memo: {
    borderWidth: 1,
    height: 60,
  },
  formItem: {
    marginBottom: 10,
  },
  readStatus: {

  },
});