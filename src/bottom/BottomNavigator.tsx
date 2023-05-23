import { View, Text, Button, Image } from 'react-native';
import React from 'react';
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs"
import Screen1 from './components/Screen1';
import Screen2 from './components/Screen2';
import Screen3 from './components/Screen3';

const Bottom = createBottomTabNavigator();

const BottomNavigator = () => {
  return (
    <Bottom.Navigator>
      <Bottom.Screen
        name="bottom-screen-1"
        component={Screen1}
        options={{
          headerShown: false,
          tabBarIcon: (tabInfo) =>
            <Image
              style={{ width: 20, height: 20, tintColor: tabInfo.focused ? 'red' : '' }} source={require('./../img/password.png')}
            />
        }}
      />
      <Bottom.Screen
        name="bottom-screen-2"
        component={Screen2}
        options={{
          headerShown: false,
          tabBarIcon: (tabInfo) =>
            <Image
              style={{ width: 20, height: 20, tintColor: tabInfo.focused ? 'red' : '' }} source={require('./../img/password.png')}
            />
        }}
      />
      <Bottom.Screen
        name="bottom-screen-3-5"
        component={Screen3}
        options={{
          headerShown: false,
          tabBarIcon: (tabInfo) =>
            <Image
              style={{ width: 20, height: 20, tintColor: tabInfo.focused ? 'red' : '' }} source={require('./../img/password.png')}
            />
        }}
      />
    </Bottom.Navigator>
  );
};

export default BottomNavigator;