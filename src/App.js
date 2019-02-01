import React, { Component } from 'react';
import { Platform, StyleSheet, Text, View } from 'react-native';

import Chart from './Chart'

export default class App extends Component<Props> {
  render() {
    return (
      <View style={styles.container}>
        <Chart />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 20,
  },
});
