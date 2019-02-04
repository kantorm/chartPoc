import React from 'react'
import { View, Text, ScrollView } from 'react-native'

const MonthCards = ({ values }) => {
  return (
    <ScrollView contentContainerStyle={{ paddingHorizontal: 10 }} style={{ flex: 1 }}>
      {values.map(value => (
        <View
          key={value}
          style={{
            borderWidth: 1,
            height: 200,
            alignItems: 'center',
            justifyContent: 'center',
            shadowColor: 'black',
            marginVertical: 10,
          }}
        >
          <Text>MONTH {value}</Text>
        </View>
      ))}
    </ScrollView>
  )
}

export default MonthCards
