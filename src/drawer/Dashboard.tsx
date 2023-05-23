import { View, Text, Button } from 'react-native'
import React from 'react'
import BottomNavigator from '../bottom/BottomNavigator'

const Dashboard = ({ navigation }: { navigation: any }) => {
    return (
        <View style={{ flex: 1 }}>
            <BottomNavigator />
        </View>
    )
}

export default Dashboard