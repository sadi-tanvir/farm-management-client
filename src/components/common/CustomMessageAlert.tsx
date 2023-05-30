import { View, Text } from 'react-native'
import React from 'react'
import AwesomeAlert from 'react-native-awesome-alerts';




const CustomMessageAlert = ({ showMessageAlert, setShowMessageAlert, title, message }: { showMessageAlert: boolean, setShowMessageAlert: (args: boolean) => void, title: string, message: string }) => {
    return (
        <AwesomeAlert
            show={showMessageAlert}

            title={title}
            titleStyle={{ fontSize: 22, color: "#3ae374", fontWeight: 'bold' }}

            showConfirmButton={true}
            confirmText="Ok"
            confirmButtonStyle={{ backgroundColor: "#3ae374", paddingHorizontal: 23 }}
            confirmButtonTextStyle={{ fontSize: 17 }}
            onConfirmPressed={() => setShowMessageAlert(false)}

            // showProgress={true}
            // progressColor="red"
            // progressSize={40}

            closeOnTouchOutside={false} // default true
            closeOnHardwareBackPress={false} // default true
            onDismiss={() => console.log('Dismiss Called.')}

            customView={
                <View style={{ backgroundColor: '#3ae374', padding: 10, marginVertical: 8, borderRadius: 10, width: '100%' }}>
                    <Text style={{ color: "#fff", fontSize: 18, fontWeight: 'bold' }}>
                        {message}
                    </Text>
                </View>
            }
        />
    )
};

export default CustomMessageAlert;