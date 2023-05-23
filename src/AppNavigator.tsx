import { View, Text } from 'react-native'
import React from 'react'
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { NavigationContainer } from "@react-navigation/native";
import Home from './screens/home/Home';
import Login from './screens/Login/Login';
import Splash from './screens/splash/Splash';
import Parent from './Parent';

const Stack = createNativeStackNavigator();

const AppNavigator = () => {
    return (
        <NavigationContainer>
            <Stack.Navigator initialRouteName='Splash' screenOptions={{
                headerShown: false
            }}>
                <Stack.Screen options={{ headerShown: false }} name='Splash' component={Splash} />
                <Stack.Screen name='Parent' component={Parent} />
                {/* <Stack.Screen options={{ headerShown: true }} name='Login' component={Login} /> */}
            </Stack.Navigator>
        </NavigationContainer>
    );
};


export default AppNavigator;