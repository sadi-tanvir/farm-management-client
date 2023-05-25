import { View, Text, Image, StyleSheet, TextInput, Button } from 'react-native'
import React, { useState } from 'react'
import styles from "../../styles/LoginStyle"
import TextInputField from '../common/TextInputField'
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import CustomButton from '../common/CustomButton';

const Login = () => {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    const handlePress = (): void => {
        console.warn(email, password);
    }

    return (
        <View style={styles.container}>
            <View style={styles.logoContainer}>
                <Image
                    source={require("./../../img/logo.png")}
                    style={styles.logo}
                />
            </View>

            <View style={styles.formsContainer}>
                <Text style={styles.header}>Login</Text>
                <View style={styles.inputFields}>
                    <TextInputField
                        icon={<MaterialCommunityIcons style={{ marginRight: 6, marginLeft: 4 }} name="email" color={'#f53b57'} size={22} />}
                        placeholder="Email"
                        type="email"
                        inputModeType="text"
                    />
                    <TextInputField
                        icon={<MaterialCommunityIcons style={{ marginRight: 6, marginLeft: 4 }} name="lock" color={'#f53b57'} size={22} />}
                        placeholder="Password"
                        type="password"
                        inputModeType="text"
                    />
                    <CustomButton title="Login" />
                </View>
            </View>
        </View>
    )
}

export default Login

