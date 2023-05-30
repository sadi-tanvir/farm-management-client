import React, { useEffect } from 'react'
import AppNavigator from './src/AppNavigator'

import AsyncStorage from '@react-native-async-storage/async-storage';
import { useAppDispatch } from './src/redux/hooks/hooks'






const App = () => {
  // redux
  const dispatch = useAppDispatch();

  // re-set data to redux store
  useEffect(() => {
    const getDataFromLocalStorage = async () => {
      if (await AsyncStorage.getItem('accessToken')) {
        dispatch({ type: 'loginUser' })
        dispatch({ type: 'accessToken', payload: await AsyncStorage.getItem('accessToken') })
        dispatch({ type: 'accountStatus', payload: await AsyncStorage.getItem('accountStatus') })
        dispatch({ type: 'userRole', payload: await AsyncStorage.getItem('role') })
        dispatch({ type: 'setOwnerInfo', payload: JSON.parse(await AsyncStorage.getItem('ownerInfo') as any) })
        if (await AsyncStorage.getItem('role') === 'admin') {
          dispatch({ type: 'accessAdmin' })
        } else if (await AsyncStorage.getItem('role') === 'user') {
          dispatch({ type: 'accessUser' })
        }
      }
    }
    getDataFromLocalStorage()
  }, [])
  

  return (
    <AppNavigator />
  );
};

export default App;