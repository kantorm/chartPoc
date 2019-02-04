import React, { Component } from 'react'
import { Dimensions, LayoutAnimation, StyleSheet, ScrollView, View, Text } from 'react-native'
import {
  Path,
  Group,
  LinearGradient,
  Surface,
  Shape,
} from 'react-native/Libraries/ART/ReactNativeART'

import pathBuilder from './pathBuilder'
import Points from './Points'
const MONTHS_HEIGHT = 40
export default class Line extends Component {
  static defaultProps = {
    fillColor: 'rgba(5, 206, 124, 0.2)',
    strokeColor: '#05CE7C',
    strokeWidth: 0,
  }

  state = {
    width: Dimensions.get('window').width,
    height: 0,
  }

  componentDidUpdate() {
    LayoutAnimation.configureNext(LayoutAnimation.Presets.easeInEaseOut)
  }

  onLayout = event => {
    const {
      nativeEvent: {
        layout: { width, height },
      },
    } = event

    this.setState({
      width,
      height: height - MONTHS_HEIGHT,
    })
  }

  render() {
    const { stepX, values, fillColor, strokeColor, strokeWidth } = this.props
    const { height } = this.state
    const width = stepX * values.length
    const { line, points = [] } = pathBuilder(values, width, height)

    return (
      <ScrollView
        style={{ flex: 1 }}
        contentContainerStyle={styles.container}
        onLayout={this.onLayout}
        showsHorizontalScrollIndicator={false}
        horizontal={true}
      >
        <View>
          <Surface width={width} height={height}>
            <Group x={0} y={height}>
              <Shape d={line} fill={fillColor} stroke={strokeColor} strokeWidth={3} />
            </Group>
          </Surface>
          <View style={{ flexDirection: 'row', height: MONTHS_HEIGHT, alignItems: 'center' }}>
            {values.map((value, i) => (
              <View style={{ width: stepX }} key={i}>
                <Text>MONTH {i}</Text>
              </View>
            ))}
          </View>
        </View>
        <Points points={points} values={values} height={height} />
      </ScrollView>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    // flex: 1,
    // align at the bottom of the container so when animated it rises to the top
    // justifyContent: 'flex-end',
    // width: 600,
  },
})
