import { Text, StyleSheet, View } from 'react-native';
import React, { Component } from 'react';
import ImageLayout from './components/ImageLayout';

export default class App extends Component {
  render() {
    return (
      <View style={styles.baseViewStyles}>
        <ImageLayout />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  baseViewStyles: {
    flex: 1,
  },
});
