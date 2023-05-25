import React from 'react'
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native'

const CustomButton = ({ title, backgroundColor, handlePress }: { title: string, backgroundColor?: string, handlePress: any }) => {
    return (
        <TouchableOpacity onPress={handlePress} style={{ ...styles.button, backgroundColor: backgroundColor ? backgroundColor : '#f53b57' }}>
            <Text style={styles.buttonText}>{title}</Text>
        </TouchableOpacity>
    )
}

export default CustomButton

const styles = StyleSheet.create({
    button: {
        borderRadius: 4,
        paddingHorizontal: 150,
        paddingVertical: 10,
    },
    buttonText: {
        color: '#fff',
        fontSize: 16,
        fontWeight: 'bold',
        textAlign: 'center',
    },
});