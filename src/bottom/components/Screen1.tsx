import { View, Text, Button } from 'react-native'
import React from 'react'
import { useNavigation, DrawerActions } from "@react-navigation/native"
import { useQuery, gql } from '@apollo/client';
import { useAppSelector } from '../../redux/hooks/hooks';

const GET_USERS_QUERY = gql`
query getBooks {
  books {
   author
   title
  }
}
`;

const Screen1 = () => {
  // redux
  const { isAuthenticate, role, isAdmin, isUser, accessToken, accountStatus, ownerInfo } = useAppSelector(state => state.authReducer);
  const navigation = useNavigation()
  const { loading, error, data } = useQuery(GET_USERS_QUERY);
  console.warn('data - 2', data)
  console.warn('ownerInfo', ownerInfo)


  return (
    <View>

      <View style={{ marginTop: 150 }}>
        <Button onPress={() => navigation.dispatch(DrawerActions.openDrawer())} title="open drawer from screen 1.0.0"></Button>
        <Text style={{ fontWeight: 'bold', fontSize: 25, color: 'green' }}>isAuthenticate: {isAuthenticate}</Text>
        <Text style={{ fontWeight: 'bold', fontSize: 24, color: 'green' }}>role: {role}</Text>
        <Text style={{ fontWeight: 'bold', fontSize: 23, color: 'green' }}>isAdmin:{isAdmin}</Text>
        <Text style={{ fontWeight: 'bold', fontSize: 22, color: 'green' }}>isUser:{isUser}</Text>
        <Text style={{ fontWeight: 'bold', fontSize: 22, color: 'green' }}>accessToken:{accessToken}</Text>
        <Text style={{ fontWeight: 'bold', fontSize: 22, color: 'green' }}>accountStatus:{accountStatus}</Text>
      </View>
    </View>
  )
}

export default Screen1