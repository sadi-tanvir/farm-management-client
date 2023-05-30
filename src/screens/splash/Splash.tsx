import { View, Text, Image } from 'react-native'
import React, { useEffect } from 'react'

const Splash = ({ navigation }: { navigation: any }) => {

    useEffect(() => {
        setTimeout(() => {
            navigation.navigate("Parent")
        }, 3000)
    }, [])

    return (
        <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
            <Image
                source={require("../../img/logo.png")}
                style={{ width: 150, height: 50 }}
            />
        </View>
    );
};

export default Splash