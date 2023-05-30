import { View, Text, Image } from 'react-native';
import React from 'react';
import { createDrawerNavigator } from '@react-navigation/drawer';
import Login from '../screens/Login/Login';
import CustomDrawer from './CustomDrawer';
import Contact from './components/Contact';
import Dashboard from './Dashboard';
import SignUp from '../screens/SignUp/SignUp';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import Header from '../components/Header';
import { TouchableOpacity } from 'react-native-gesture-handler';
import { useNavigation, DrawerActions } from "@react-navigation/native"
import { useAppSelector } from '../redux/hooks/hooks';

const Drawer = createDrawerNavigator();



const DrawerNavigator = () => {
  const { isAuthenticate, role, isAdmin, isUser, accessToken, accountStatus, ownerInfo } = useAppSelector(state => state.authReducer);
  const navigation = useNavigation()
  return (
    <Drawer.Navigator
      screenOptions={{
        // headerStyle: {
        //   backgroundColor: '#f53b57',
        // },
        drawerLabelStyle: {
          marginLeft: -20,
          fontWeight: 'bold'
        },
        // drawerActiveBackgroundColor: '#df7d8c',
        headerTintColor: '#fff',
        drawerActiveTintColor: '#f53b57',
        headerRight: () => (
          <View style={{ display: 'flex', flexDirection: 'row', alignItems: 'center' }}>
            <TouchableOpacity onPress={() => navigation.dispatch(DrawerActions.openDrawer())}>
              <MaterialCommunityIcons style={{ marginRight: 20 }} name="menu" color={'#f53b57'} size={30} />
            </TouchableOpacity>
          </View>
        ),
      }}

      drawerContent={props => <CustomDrawer {...props as any} />}>


      {
        isAuthenticate ?
          <Drawer.Screen
            name='Dashboard'
            component={Dashboard}
            options={{
              headerShown: true,
              // headerTitle: () => <Header />,
              headerRight: () => (
                <View style={{ display: 'flex', flexDirection: 'row', alignItems: 'center' }}>
                  <TouchableOpacity>
                    <MaterialCommunityIcons style={{ marginRight: 20 }} name="bell-badge" color={'#f53b57'} size={30} />
                  </TouchableOpacity>

                  <TouchableOpacity onPress={() => navigation.dispatch(DrawerActions.openDrawer())}>
                    <Image
                      source={require("../img/empty-avatar-male.png")}
                      style={{ width: 40, height: 40, borderRadius: 40, marginRight: 10, borderWidth: 3, borderColor: '#f53b57' }}
                    />
                  </TouchableOpacity>
                </View>
              ),

              headerLeft: () => (
                <View style={{ display: 'flex', flexDirection: 'row', justifyContent: 'center' }}>
                  <TouchableOpacity onPress={() => navigation.dispatch(DrawerActions.openDrawer())}>
                    <Image
                      source={require("../img/logo.png")}
                      style={{ width: 90, height: 30, marginLeft: 8 }}
                    />
                  </TouchableOpacity>
                </View>
              ),


              headerStyle: {
                height: 70,
                borderBottomLeftRadius: 15,
                borderBottomRightRadius: 15,
                backgroundColor: '#fff',
                shadowColor: '#000',
                elevation: 15
              },
              drawerIcon: () => {
                return <MaterialCommunityIcons name="view-dashboard" color={'#f53b57'} size={22} />
              }
            }}
          /> :
          <>
            <Drawer.Screen
              name='Login'
              component={Login}
              options={{
                headerShown: true,
                drawerIcon: () => {
                  return <MaterialCommunityIcons name="login" color={'#f53b57'} size={22} />
                },
                
              }}
            />

            <Drawer.Screen
              name='Sign Up'
              component={SignUp}
              options={{
                headerShown: true,
                drawerIcon: () => {
                  return <MaterialCommunityIcons name="account-plus" color={'#f53b57'} size={22} />
                },
              }}
            />
          </>
      }

    </Drawer.Navigator>
  );
};

export default DrawerNavigator;