import { View, Text, Button } from 'react-native'
import React from 'react'
import { useNavigation, DrawerActions } from "@react-navigation/native"
import { useQuery, gql } from '@apollo/client';

const GET_USERS_QUERY = gql`
query getBooks {
  books {
   author
   title
  }
}

`;

const Screen1 = () => {
  const navigation = useNavigation()
  const { loading, error, data } = useQuery(GET_USERS_QUERY);
  console.warn('loading', loading)
  console.warn('error', error)
  console.warn('data - 2', data)
  return (
    <View>
      <Text>Screen custom 12.1</Text>
      <Text>Screen custom 15.1</Text>
      <Button onPress={() => navigation.dispatch(DrawerActions.openDrawer())} title="open drawer from screen 1.0.0"></Button>
    </View>
  )
}

export default Screen1