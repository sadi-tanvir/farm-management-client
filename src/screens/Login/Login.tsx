import { View, Text, Image, StyleSheet, TextInput, Button, TouchableOpacity } from 'react-native'
import React, { useEffect, useState } from 'react'
import styles from "../../styles/LoginStyle"
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import { useMutation } from '@apollo/client';
import { loginMutation } from '../../gql/mutations/userMutation';
import AsyncStorage from '@react-native-async-storage/async-storage';
import CustomButton from '../../components/common/CustomButton';
import TextInputField from '../../components/common/TextInputField';
import CustomMessageAlert from '../../components/common/CustomMessageAlert';
import CustomErrorMessage from '../../components/common/CustomErrorMessage';
import { useAppDispatch } from '../../redux/hooks/hooks';

const Login = ({ navigation }) => {
    // state management
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [showMessageAlert, setShowMessageAlert] = useState(false);
    const [showErrorMessageAlert, setShowErrorMessageAlert] = useState(false);
    const [errorMessage, setErrorMessage] = useState("")

    console.log('email', email);
    console.log('password', password);


    // redux
    const dispatch = useAppDispatch();

    // mutations 
    const [handleLoginMUtation, { data, loading, error }] = useMutation(loginMutation);

    // handle login
    const handleLogin = (): void => {
        if (email && password) {
            handleLoginMUtation({
                variables: {
                    info: {
                        email,
                        password
                    }
                }
            });
        } else {
            setShowErrorMessageAlert(true);
            setErrorMessage("Sorry! You can't leave empty input field");
        };
    };


    useEffect(() => {
        // error message
        if (error?.message) {
            setErrorMessage(error?.message)
            setShowErrorMessageAlert(!showErrorMessageAlert);
            console.log('errorMessage', error);

        }

        // confirmation message
        if (data?.loginUser.status) {
            // showing alert
            setShowMessageAlert(!showMessageAlert)

            // set data to async storage
            const localStorage = async () => {
                await AsyncStorage.setItem("accessToken", data?.loginUser.token)
                await AsyncStorage.setItem("role", data?.loginUser.user.role)
                await AsyncStorage.setItem("accountStatus", data?.loginUser.user.accountStatus)
                await AsyncStorage.setItem("ownerInfo", JSON.stringify({
                    _id: data.loginUser.user._id,
                    name: data.loginUser.user.name,
                    email: data.loginUser.user.email,
                    phone: data.loginUser.user.phone,
                    image: data.loginUser.user.image,
                    gender: data.loginUser.user.gender,
                    currentAddress: data.loginUser.user.currentAddress,
                    permanentAddress: data.loginUser.user.permanentAddress,
                    dateOfBirth: data.loginUser.user.dateOfBirth,
                    createdAt: data.loginUser.user.createdAt,
                    updatedAt: data.loginUser.user.updatedAt,
                }))
            }
            localStorage()

            // set data to redux store
            dispatch({ type: 'loginUser' })
            dispatch({ type: 'accountStatus', payload: data?.loginUser.user.accountStatus })
            dispatch({ type: 'userRole', payload: data?.loginUser.user.role })
            dispatch({ type: 'accessToken', payload: data?.loginUser.token })
            dispatch({
                type: 'setOwnerInfo', payload: {
                    _id: data.loginUser.user._id,
                    name: data.loginUser.user.name,
                    email: data.loginUser.user.email,
                    phone: data.loginUser.user.phone,
                    image: data.loginUser.user.image,
                    gender: data.loginUser.user.gender,
                    currentAddress: data.loginUser.user.currentAddress,
                    permanentAddress: data.loginUser.user.permanentAddress,
                    dateOfBirth: data.loginUser.user.dateOfBirth,
                    createdAt: data.loginUser.user.createdAt,
                    updatedAt: data.loginUser.user.updatedAt,
                }
            })
            if (data?.loginUser.user.role === 'admin') {
                dispatch({ type: 'accessAdmin' })
            } else if (data?.loginUser.user.role === 'user') {
                dispatch({ type: 'accessUser' })
            }

        };



    }, [data, error]);

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
                        handleChange={(e: string) => setEmail(e)}
                    />
                    <TextInputField
                        icon={<MaterialCommunityIcons style={{ marginRight: 6, marginLeft: 4 }} name="lock" color={'#f53b57'} size={22} />}
                        placeholder="Password"
                        type="password"
                        inputModeType="text"
                        handleChange={(e: string) => setPassword(e)}
                    />
                    <CustomButton
                        handlePress={handleLogin}
                        title="Login"
                    />
                    <View style={{ display: 'flex', flexDirection: 'row', justifyContent: 'flex-end', alignItems: 'center', marginTop: 10 }}>
                        <Text>don't have an account?</Text>
                        <TouchableOpacity onPress={() => navigation.navigate("Sign Up")}>
                            <Text style={{ color: '#ff3f34', marginLeft: 3 }}>Register</Text>
                        </TouchableOpacity>
                    </View>
                </View>
            </View>

            {/* success message */}
            <CustomMessageAlert
                showMessageAlert={showMessageAlert}
                setShowMessageAlert={setShowMessageAlert}
                title="Success Message"
                message={data?.loginUser.message}
            />

            {/* success message */}
            <CustomErrorMessage
                showMessageAlert={showErrorMessageAlert}
                setShowMessageAlert={setShowErrorMessageAlert}
                title="Error Message"
                message={errorMessage}
            />
        </View>
    )
}

export default Login

