import { View, Text, StyleSheet, Image, TextInput } from 'react-native';
import React from 'react';
// import styles from '../../styles/Login/LoginStyle';
import { TextInputFieldType } from '../../types/common/TextInputField';




const TextInputField = ({ type, icon }: { type?: string, icon?:string }) => {
  return (
    <View style={styles.container}>
      <Image style={styles.icon} source={icon} />
      <TextInput style={{
        width: '100%'
      }} placeholder='type password - 2'
        keyboardType={'phone-pad'}
        cursorColor={'red'}
        enterKeyHint={'done'}
        inputMode='numeric'
        placeholderTextColor={'red'}
        secureTextEntry={type === 'password' ? true : false}
      />
    </View>
  );
};

export default TextInputField;

const styles = StyleSheet.create({
  container: {
    width: '95%',
    borderWidth: 1,
    borderColor: '#485460',
    borderRadius: 10,
    height: 'auto',
    paddingVertical: 8,
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    overflow: 'hidden'
  },
  icon: {
    width: 30,
    height: 30,
    marginLeft: 8
  }
})