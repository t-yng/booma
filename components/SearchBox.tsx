import React from 'react';
import {
  StyleSheet,
  View,
  Dimensions,
  TextInput,
} from 'react-native';
import { Icon } from 'react-native-elements';

interface Props {
  onSubmitEditing: (text: string) => void
}
interface State {
  text: string
}

export default class SearchBox extends React.Component<Props, State> {
  private textInput: TextInput | null = null;

  constructor(props: Props) {
    super(props);
    this.state = { text: '' }
  }

  onPressCancel = () => {
    this.setState({ text: '' });
    if(this.textInput !== null){
      this.textInput.focus();
    }
  }

  render() {
    return(
      <View style={styles.container}>
        <View style={styles.searchBox}>
          <Icon
            containerStyle={styles.searchIcon}
            name="search"
            type="material"
            color={iconStyle.color}
            size={iconStyle.size}
          />
          <TextInput
            style={styles.textInput}
            placeholder="本のタイトル、著者名"
            value={this.state.text}
            onSubmitEditing={(event) => {
              this.props.onSubmitEditing(event.nativeEvent.text);
            }}
            onChangeText={(text: string) => this.setState({ text })}
            ref={(input) => this.textInput = input}
          />
          <Icon
            containerStyle={styles.cancelIcon}
            name="cancel"
            type="material"
            color={iconStyle.color}
            size={iconStyle.size}
            onPress={this.onPressCancel}
          />
        </View>
      </View>
    );
  }
}

const width = Dimensions.get('window').width;
const searchBoxWidth = width * 0.8;
const iconStyle = {
  color: '#9A9A9A',
  size: 24
}

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
  },
  searchBox: {
    alignItems: 'center',
    borderColor: '#ACACAC',
    borderRadius: 5,
    borderStyle: 'solid',
    borderWidth: 1,
    flexDirection: 'row',
    height: 36,
    padding: 2,
    width: searchBoxWidth,
  },
  searchIcon: {
    width: searchBoxWidth * 0.1,
  },
  textInput: {
    marginLeft: 10,
    width: searchBoxWidth * 0.7
  },
  cancelIcon: {
    width: searchBoxWidth * 0.1,
  }
});