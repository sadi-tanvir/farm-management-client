import { View, Text, Image, StyleSheet, TextInput, Button } from 'react-native'
import React, { useState } from 'react'
import styles from "../../styles/Login/LoginStyle"
import TextInputField from '../common/TextInputField'

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
                        // placeholder={'example@email.com'}
                        // handleInput={(e: string) => setEmail(e)}
                        type='passwords'
                        icon={require("../../img/password.png")}
                    />
                    {/* 
                    <TextInputField
                        placeholder={'type password'}
                        marginTop={10}
                        handleInput={(e: string) => setPassword(e)}
                    /> */}
                </View>

                <Button onPress={handlePress} title='Submit'></Button>
            </View>
        </View>
    )
}

export default Login

