import React from 'react'
import { View, Text } from 'react-native'

export default function Header() {
  return (
    <View style={{ flex: 0.2, backgroundColor: '#F4CE14', alignItems: 'center', justifyContent: 'center' }}>
        <Text style={{ fontSize: 30, color: 'black', fontWeight: '600' }}>Khana</Text>
    </View>
  )
}
  