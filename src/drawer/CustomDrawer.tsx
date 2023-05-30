import { View, Text, StyleSheet, ImageBackground, Image } from 'react-native'
import React, { useState } from 'react'
import { DrawerContentScrollView, DrawerItemList } from '@react-navigation/drawer'
import CustomButton from '../components/common/CustomButton'
import { TouchableOpacity } from 'react-native-gesture-handler'
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import { useAppDispatch, useAppSelector } from '../redux/hooks/hooks'
import AsyncStorage from '@react-native-async-storage/async-storage';

const CustomDrawer = (props: any) => {
  // redux
  const dispatch = useAppDispatch();
  const { isAuthenticate, role, isAdmin, isUser, accessToken, accountStatus, ownerInfo } = useAppSelector(state => state.authReducer);
  // states 
  const [isActive, setIsActive] = useState<boolean>(false)

  // handle Log Out
  const handleLogOut = async () => {
    await AsyncStorage.clear(); // clearing all data from local storage
    dispatch({ type: 'logOutUser' }); // clearing all data from redux store
    console.warn('cleared all data from local storage & redux store');

  };

  return (
    <View style={{ flex: 1 }}>
      <DrawerContentScrollView {...props} contentContainerStyle={{ backgroundColor: '#fff' }}>
        {/* header style */}
        <ImageBackground source={require('../img/drawer-background-1.png')} style={{ marginBottom: 30 }}>
          {
            isAuthenticate ?
              <View>
                <Text style={{ ...styles.userRole, backgroundColor: role == 'admin' ? '#f53b57' : '#808e9b', }}>{role}</Text>
                <Image source={require('../img/empty-avatar-male.png')} style={styles.profileImage} />
                <Text style={styles.userName}>{ownerInfo?.name}</Text>
              </View>
              :
              <View style={{ display: 'flex', flexDirection: 'row', justifyContent: 'flex-start', marginLeft: 12, marginTop: 30, alignItems: 'center' }}>
                <MaterialCommunityIcons style={{}} name="account-circle" color={"#f53b57"} size={70} />
                <Text style={{ fontWeight: 'bold', marginLeft: 3 }}>LOGIN TO ACCOUNT</Text>
              </View>
          }
        </ImageBackground>

        {/* default menu */}
        <View style={{ backgroundColor: '#fff' }}>
          <DrawerItemList {...props} />
        </View>
      </DrawerContentScrollView>

      {/* footer section */}
      {isAuthenticate &&
        <View style={{ position: 'relative', left: 0, bottom: 0 }}>
          <TouchableOpacity
            onPress={handleLogOut}
            onPressIn={() => setIsActive(true)}
            onPressOut={() => setIsActive(false)}
            style={{ ...styles.button, backgroundColor: isActive ? '#fff' : '#ff3f34' }}
          >
            <MaterialCommunityIcons style={{ marginLeft: 12, marginRight: 10 }} name="logout" color={isActive ? '#ff3f34' : '#fff'} size={22} />
            <Text style={{ ...styles.buttonText, color: isActive ? '#ff3f34' : '#fff' }}>LOG OUT</Text>
          </TouchableOpacity>
        </View>
      }
    </View>
  );
};

export default CustomDrawer;


const styles = StyleSheet.create({
  container: {
    width: '100%',
    height: '100%'
  },
  userRole: {
    color: '#fff',
    fontWeight: 'bold',
    paddingHorizontal: 3,
    paddingVertical: 5,
    marginLeft: '70%',
    marginRight: 5,
    textAlign: 'center',
    borderRadius: 6,
    marginTop: 10
  },
  profileImage: {
    height: 80,
    width: 80,
    borderRadius: 40,
    marginTop: 20,
    marginLeft: 10
  },
  userName: {
    fontWeight: 'bold',
    fontSize: 22,
    color: '#f53b57',
    marginLeft: 20
  },
  button: {
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    borderRadius: 4,
    paddingHorizontal: 10,
    paddingVertical: 10,
  },
  buttonText: {
    fontSize: 16,
    fontWeight: 'bold',
    textAlign: 'center'
  },
});