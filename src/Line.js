import React, { Component } from 'react'
import { Dimensions, LayoutAnimation, StyleSheet, View } from 'react-native'
import { Group, LinearGradient, Surface, Shape } from 'react-native/Libraries/ART/ReactNativeART'

import pathBuilder from './pathBuilder'

export default class Line extends Component {
  static defaultProps = {
    fillColor: 'rgba(5, 206, 124, 0.2)', // solid violet color
    strokeColor: '#05CE7C', // semi-transparent violet
    strokeWidth: 0,
  }

  state = {
    // set initial width to screen width so when animated it stays constant,
    // try setting it to zero and see what happens on initial load
    width: Dimensions.get('window').width,
    // set initial height to zero so when updated to actual height and
    // animated, the chart raises from the bottom to the top of the container
    height: 0,
  }

  componentDidUpdate() {
    LayoutAnimation.configureNext(LayoutAnimation.Presets.easeInEaseOut)
  }

  // Handle container view's onLayout event to get its width and height after rendered and
  // update the state so the component can render the chart using actual width and height
  onLayout = event => {
    // pull out width and height out of event.nativeEvent.layout
    const {
      nativeEvent: {
        layout: { width, height },
      },
    } = event
    // update the state
    this.setState({
      width,
      height,
    })
  }

  render() {
    const { values, fillColor, strokeColor, strokeWidth } = this.props
    const { width, height } = this.state
    const { line } = pathBuilder(values, width, height)
    return (
      <View style={styles.container} onLayout={this.onLayout}>
        <Surface width={width} height={height}>
          <Group x={0} y={height}>
            <Shape d={line} fill={fillColor} stroke={strokeColor} strokeWidth={3} />
          </Group>
        </Surface>
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
