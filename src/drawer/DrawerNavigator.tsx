import { View, Text } from 'react-native';
import React from 'react';
import { createDrawerNavigator } from '@react-navigation/drawer';
import Login from '../screens/Login/Login';
import CustomDrawer from './CustomDrawer';
import Contact from './components/Contact';
import Dashboard from './Dashboard';
import SignUp from '../screens/SignUp/SignUp';


const Drawer = createDrawerNavigator();



const DrawerNavigator = () => {
  return (
    <Drawer.Navigator
      screenOptions={{
        headerStyle: {
          backgroundColor: '#f53b57',
        },
        headerTintColor: '#fff'
      }}

      drawerContent={props => <CustomDrawer {...props as any}
      />}>

      {/* <Drawer.Screen name='Login' component={Login} options={{headerShown: true}} /> */}
      <Drawer.Screen name='Dashboard' component={Dashboard} options={{ headerShown: true }} />
      <Drawer.Screen name='Login' component={Login} options={{ headerShown: true }} />
      <Drawer.Screen name='Sign Up' component={SignUp} options={{ headerShown: true }} />
    </Drawer.Navigator>
  );
};

export default DrawerNavigator;