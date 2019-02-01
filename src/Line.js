import React, { Component } from 'react'
import { Dimensions, LayoutAnimation, StyleSheet, View } from 'react-native'
import { Group, LinearGradient, Surface, Shape } from 'react-native/Libraries/ART/ReactNativeART'

import pathBuilder from './pathBuilder'

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
      height,
    })
  }

  render() {
    const { values, fillColor, strokeColor, strokeWidth } = this.props
    const { width, height } = this.state
    const { line, points = [] } = pathBuilder(values, width, height)
    return (
      <View style={styles.container} onLayout={this.onLayout}>
        <Surface width={width} height={height}>
          <Group x={0} y={height}>
            <Shape d={line} fill={fillColor} stroke={strokeColor} strokeWidth={3} />
          </Group>
        </Surface>
        {points.map((point, index) => (
          <View key={index}
          style={{
            position: 'absolute',
            width: 10,
            height: 10,
            borderRadius: 5,
            borderColor: '#000',
            borderWidth: 2,
            transform: [{translateX: (point.x - 5)}, {translateY: (point.y + 5)}] }}/>
        ))}
      </View>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    // align at the bottom of the container so when animated it rises to the top
    justifyContent: 'flex-end',
  },
})
