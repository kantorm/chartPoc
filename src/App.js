import React, { Component } from 'react'
import { ScrollView, Platform, StyleSheet, Text, View } from 'react-native'

import Chart from './Chart'
import MonthCards from './MonthCards'

const values = [560, 1030, 2000, 1470, 520, 800, 2400, 790, 1510, 1200, 830, 440]
export default class App extends Component<Props> {
  render() {
    return (
      <View style={styles.container}>
        <Chart values={values} />
        <MonthCards values={values} />
      </View>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 20,
    backgroundColor: 'white',
  },
})
