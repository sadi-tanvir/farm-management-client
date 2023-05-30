import { View, Text } from 'react-native'
import React from 'react'
import AwesomeAlert from 'react-native-awesome-alerts';




const CustomWarningAlert = ({ showAlert, setShowAlert, handleSubmit }: { showAlert: boolean, setShowAlert: (args:boolean) => void, handleSubmit: () => void }) => {
    return (
        <AwesomeAlert
            show={showAlert}

            title="Are You Sure You Want Create This Account ?"
            titleStyle={{ fontSize: 22, color: "red", fontWeight: 'bold' }}

            showCancelButton={true}
            cancelText="Cancel"
            cancelButtonStyle={{ backgroundColor: "red", paddingHorizontal: 23 }}
            cancelButtonTextStyle={{ fontSize: 17 }}
            onCancelPressed={() => {
                console.log('Cancel button pressed')
                setShowAlert(false)
            }}

            showConfirmButton={true}
            confirmText="Submit"
            confirmButtonStyle={{ backgroundColor: "#3ae374", paddingHorizontal: 23 }}
            confirmButtonTextStyle={{ fontSize: 17 }}
            onConfirmPressed={handleSubmit}

            // showProgress={true}
            // progressColor="red"
            // progressSize={40}

            closeOnTouchOutside={false} // default true
            closeOnHardwareBackPress={false} // default true
            onDismiss={() => console.log('Dismiss Called.')}

            customView={
                <View style={{ backgroundColor: '#ff7979', padding: 10, marginVertical: 8, borderRadius: 10, width: '100%' }}>
                    <Text style={{ color: "red", fontSize: 16, fontWeight: 'bold' }}>
                        You can't revert this after confirmation!
                    </Text>
                </View>
            }
        />
    )
};

export default CustomWarningAlert;