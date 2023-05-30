import { View, Text, Image, StyleSheet, TextInput, Button, Alert } from 'react-native'
import React, { useEffect, useState } from 'react'
import styles from "../../styles/signUpStyle"
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import { useMutation } from '@apollo/client';
import { signUpMutation } from '../../gql/mutations/userMutation';
import CustomButton from '../../components/common/CustomButton';
import TextInputField from '../../components/common/TextInputField';
import CustomMessageAlert from '../../components/common/CustomMessageAlert';
import CustomErrorMessage from '../../components/common/CustomErrorMessage';
import CustomWarningAlert from '../../components/common/CustomWarningAlert';
import { TouchableOpacity } from 'react-native-gesture-handler';


const SignUp = ({ navigation }) => {
    const [showAlert, setShowAlert] = useState(false);
    const [showMessageAlert, setShowMessageAlert] = useState(false);
    const [showErrorMessageAlert, setShowErrorMessageAlert] = useState(false);
    const [errorMessage, setErrorMessage] = useState("")
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [phone, setPhone] = useState("");
    const [password, setPassword] = useState("");

    // mutations 
    const [handleSignUpMUtation, { data, loading, error }] = useMutation(signUpMutation);

    // handle submit function
    const handleSignUp = () => {
        if (name && email && phone && password) {
            // SignUp mutation
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
            setShowAlert(false)
        } else {
            setShowErrorMessageAlert(true)
            setErrorMessage("Sorry! You can't leave empty input field")
        }
    };

    useEffect(() => {
        // error message
        if (error?.message) {
            setErrorMessage(error?.message)
            setShowErrorMessageAlert(!showErrorMessageAlert);
        }

        // confirmation message
        if (data?.signUpUser.message) {
            setShowMessageAlert(!showMessageAlert)
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
                        handlePress={() => setShowAlert(!showAlert)}
                        title="Sign Up"
                    />
                    <View style={{ display: 'flex', flexDirection: 'row', justifyContent: 'flex-end', alignItems: 'center', marginTop: 10 }}>
                        <Text>Already have an account?</Text>
                        <TouchableOpacity onPress={() => navigation.navigate("Login")}>
                            <Text style={{ color: '#ff3f34', marginLeft: 3 }}>Login</Text>
                        </TouchableOpacity>
                    </View>
                </View>
            </View>

            {/* success message */}
            <CustomMessageAlert
                showMessageAlert={showMessageAlert}
                setShowMessageAlert={setShowMessageAlert}
                title="Success Message"
                message={data?.signUpUser.message}
            />

            {/* success message */}
            <CustomErrorMessage
                showMessageAlert={showErrorMessageAlert}
                setShowMessageAlert={setShowErrorMessageAlert}
                title="Error Message"
                message={errorMessage}
            />

            {/* warning message */}
            <CustomWarningAlert
                showAlert={showAlert}
                setShowAlert={setShowAlert}
                handleSubmit={handleSignUp}
            />
        </View>
    )
}

export default SignUp

