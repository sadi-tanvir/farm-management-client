import { View, Text, Image, StyleSheet, TextInput, Button } from 'react-native'
import React, { useEffect, useState } from 'react'
import styles from "../../styles/signUpStyle"
import TextInputField from '../common/TextInputField'
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import CustomButton from '../common/CustomButton';
import { gql, useMutation } from '@apollo/client';

const signUpMutation = gql`
mutation createUser($info:UserSignUpInputs!) {
    signUpUser(data:$info){
        status
        message
    }
}
`;


const SignUp = () => {
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [phone, setPhone] = useState("");
    const [password, setPassword] = useState("");
console.warn(name, email, phone, password);

    const [handleSignUpMUtation, { data, loading, error }] = useMutation(signUpMutation);

    const handlePress = () => {

        handleSignUpMUtation({
            variables: {
                info: {
                    name,
                    email,
                    password,
                    phone
                }
            }
        });
    };


    // const handleChange = (e: string) => {

    // }

    useEffect(() => {
        console.log('from signup', data);
    }, [data])

    return (
        <View style={styles.container}>
            <View style={styles.logoContainer}>
                <Image
                    source={require("./../../img/logo.png")}
                    style={styles.logo}
                />
            </View>

            <View style={styles.formsContainer}>
                <Text style={styles.header}>Sign Up</Text>
                <View style={styles.inputFields}>
                    <TextInputField
                        handleChange={(e: string) => setName(e)}
                        icon={<MaterialCommunityIcons style={{ marginRight: 6, marginLeft: 4 }} name="account-circle" color={'#f53b57'} size={22} />}
                        placeholder="Name"
                        type="text"
                        inputModeType="text"
                    />
                    <TextInputField
                        handleChange={(e: string) => setEmail(e)}
                        icon={<MaterialCommunityIcons style={{ marginRight: 6, marginLeft: 4 }} name="email" color={'#f53b57'} size={22} />}
                        placeholder="Email"
                        type="email"
                        inputModeType="text"
                    />
                    <TextInputField
                        handleChange={(e: string) => setPhone(e)}
                        icon={<MaterialCommunityIcons style={{ marginRight: 6, marginLeft: 4 }} name="phone-classic" color={'#f53b57'} size={22} />}
                        placeholder="Phone"
                        type="number"
                        inputModeType="numeric"
                    />
                    <TextInputField
                        handleChange={(e: string) => setPassword(e)}
                        icon={<MaterialCommunityIcons style={{ marginRight: 6, marginLeft: 4 }} name="lock" color={'#f53b57'} size={22} />}
                        placeholder="Password"
                        type="password"
                        inputModeType="text"
                    />
                    <CustomButton
                        handlePress={handlePress}
                        title="Sign Up"
                    />
                </View>
            </View>
        </View>
    )
}

export default SignUp

