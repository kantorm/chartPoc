import React, { Component } from 'react'
import { StyleSheet, View } from 'react-native'

import Line from './Line'

export default class Chart extends Component {
  render() {
    return (
      <View style={styles.container}>
        <Line values={[60, 30, 50, 20, 50, 80, 40, 70, 50]} />
      </View>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#FFFFFF',
  },
})
