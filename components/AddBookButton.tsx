import React from 'react';
import { Icon } from 'react-native-elements';

const ICON_SIZE = 48;

interface Props {
  containerStyle: Object,
  onPress: () => void,
}

export default class AddBookButton extends React.Component<Props> {
  render() {
    return(
      <Icon
        name="add-circle"
        type="material"
        size={ICON_SIZE}
        onPress={this.props.onPress}
        containerStyle={this.props.containerStyle}
      />
    );
  }
}