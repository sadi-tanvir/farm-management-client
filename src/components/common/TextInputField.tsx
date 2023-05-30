import { View, Text, StyleSheet } from 'react-native'
import React from 'react'
import { TextInput } from 'react-native-gesture-handler'


const TextInputField = ({ icon, type, placeholder, inputModeType, handleChange }: { icon: JSX.Element, type?: string, placeholder: string, inputModeType: any, handleChange: any }) => {



  return (
    <View style={styles.container}>
      {/* icon component */}
      {icon}

      {/* input field */}
      <TextInput
        onChangeText={handleChange}
        style={styles.input}
        placeholder={placeholder}
        keyboardType='phone-pad'
        cursorColor={'#808e9b'}
        enterKeyHint={'done'}
        inputMode={inputModeType}
        placeholderTextColor={'#808e9b'}
        secureTextEntry={type === 'password' ? true : false}
      />
    </View>
  )
}

export default TextInputField

const styles = StyleSheet.create({
  container: {
    width: '95%',
    height: 45,
    marginBottom: 16,
    paddingHorizontal: 12,
    borderWidth: 1,
    borderColor: '#ccc',
    borderRadius: 6,
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    overflow: 'hidden'
  },
  input: {
    width: '100%'
  }
})