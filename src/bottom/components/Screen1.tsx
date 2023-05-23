import { View, Text, Button } from 'react-native'
import React from 'react'
import { useNavigation, DrawerActions } from "@react-navigation/native"

const Screen1 = () => {
  const navigation = useNavigation()
  return (
    <View>
      <Text>Screen custom 12.1</Text>
      <Text>Screen custom 15.1</Text>
      <Button onPress={() => navigation.dispatch(DrawerActions.openDrawer())} title="open drawer from screen 1.0.0"></Button>
    </View>
  )
}

export default Screen1