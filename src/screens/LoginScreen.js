import React from 'react'
import { View, Image, StyleSheet } from 'react-native';
import{ Formik } from 'formik';
import AppTextInput from '../components/AppTextInput';
import Screen from '../components/Screen';
import AppButton from '../components/AppButton';

const LoginScreen = (props) => {

    return (
        <Screen style={styles.container}>
            <Image 
                source={require("../assets/logo-red.png")}
                style={styles.logo}
            />
            <Formik
                initialValues={{ email: '', password: ''}}
                onSubmit={(values) => console.log(values)}
            >
                { ({ handleChange, handleSubmit }) => (
                    <>
                        <AppTextInput 
                            autoCapitalize="none"
                            autoCorrect={false}
                            icon="email"
                            keyboardType="email-address"
                            onChangeText={handleChange("email")}
                            placeholder="Email"
                            textContentType="emailAddress"
                        />
                        <AppTextInput 
                            autoCapitalize="none"
                            autoCorrect={false}
                            icon="lock"
                            onChangeText={handleChange("password")}
                            placeholder="Password"
                            secureTextEntry={true}
                            textContentType="password"
                        />
                        <AppButton 
                            title="Login" 
                            onPress={handleSubmit} 
                        />
                    </>
                )}
            </Formik>
        </Screen>
    );
};

const styles = StyleSheet.create({
    container: {
        padding: 10,
    },
    logo: {
        width: 80,
        height: 80,
        alignSelf: 'center',
        marginTop: 50,
        marginBottom: 20,
    },
});

export default LoginScreen;