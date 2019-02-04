import React from 'react'
import { View, Text } from 'react-native'

const Points = ({ points, values, height }) => {
  return (
    <React.Fragment>
      {points.map((point, index) => {
        return (
          <View
            key={index}
            style={{
              position: 'absolute',
              transform: [{ translateX: point.x - 5 }, { translateY: point.y + height - 25 }],
            }}
          >
            <Text style={{ fontSize: 16, color: 'black' }}>~{values[index]}</Text>
            <View
              style={{
                width: 10,
                height: 10,
                borderColor: '#000',
                borderRadius: 5,
                borderWidth: 2,
              }}
            />
          </View>
        )
      })}
    </React.Fragment>
  )
}

export default Points
