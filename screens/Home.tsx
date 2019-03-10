import React from 'react';
import { StyleSheet, View, Dimensions } from 'react-native';
import { NavigationTransitionProps } from 'react-navigation';
import ContentLayout from './ContentLayout';
import AddBookButton from '../components/AddBookButton';
import SearchBox from '../components/SearchBox';
import ActionSheet from 'react-native-actionsheet';

export default class Home extends React.Component<NavigationTransitionProps> {
  private actionSheet: any;

  showActionSheet = () => {
    this.actionSheet.show();
  }

  onPressActionSheetButton = (index: number) => {
    switch(index) {
      case 0: this.props.navigation.navigate('Search');
    }
  }

  render() {
    return (
      <ContentLayout>
        <View style={styles.root}>
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
      </ContentLayout>
    );
  }
}

const styles = StyleSheet.create({
  root: {
    height: Dimensions.get('window').height,
  },
  addBookButton: {
    bottom: 100,
    right: 30,
    position: 'absolute',
  },
});
