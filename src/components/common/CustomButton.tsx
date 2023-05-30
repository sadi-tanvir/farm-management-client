import React from 'react'
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native'

const CustomButton = ({ title, backgroundColor, handlePress, width, height, restStyle }: { title: string, backgroundColor?: string, handlePress: () => void, width?: number, height?: number, restStyle?: any }) => {
    return (
        <TouchableOpacity onPress={handlePress} style={{
            ...styles.button,
            paddingHorizontal: width ? width : 150,
            paddingVertical: height ? height : 10,
            backgroundColor: backgroundColor ? backgroundColor : '#f53b57',
            ...restStyle
        }}>
            <Text style={styles.buttonText}>{title}</Text>
        </TouchableOpacity>
    )
}

export default CustomButton

const styles = StyleSheet.create({
    button: {
        borderRadius: 4,
    },
    buttonText: {
        color: '#fff',
        fontSize: 16,
        fontWeight: 'bold',
        textAlign: 'center',
    },
});