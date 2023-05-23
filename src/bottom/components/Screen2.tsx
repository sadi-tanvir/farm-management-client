
import { View, Text, Button } from 'react-native'
import React from 'react'

const Screen2 = ({ navigation }: { navigation: any }) => {
  return (
    <View>
      <Text className='text-red-500'>Screen2</Text>
      <Button onPress={() => navigation.openDrawer()} title="open drawer from screen 2"></Button>
    </View>
  )
}

export default Screen2;