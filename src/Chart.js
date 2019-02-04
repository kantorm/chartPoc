import React, { Component } from 'react'
import { StyleSheet, View } from 'react-native'

import Line from './Line'

export default class Chart extends Component {
  render() {
    return (
      <View style={styles.container}>
        <Line values={this.props.values} stepX={70} />
      </View>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 0.7,
    backgroundColor: '#FFFFFF',
    justifyContent: 'flex-end',
  },
})
