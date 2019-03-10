import React from 'react';
import { StyleSheet, View } from 'react-native';

const ContentLayout: React.SFC = (props) => {
  return(
    <View style={styles.layout}>{props.children}</View>
  )
}

export default ContentLayout;

const styles = StyleSheet.create({
  layout: {
    paddingTop: 20,
  }
})