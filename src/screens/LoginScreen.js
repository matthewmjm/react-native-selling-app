import React from 'react'
import { Image, StyleSheet } from 'react-native';
import * as Yup from 'yup'
import Screen from '../components/Screen';
import { Form, FormField, SubmitButton } from '../components/forms';

const validationSchema = Yup.object().shape({
    email: Yup.string().required().email().label("Email"),
    password: Yup.string().required().min(4).label("Password"),
})

const LoginScreen = (props) => {

    return (
        <Screen style={styles.container}>
            <Image 
                source={require("../assets/logo-red.png")}
                style={styles.logo}
            />
            <Form
                initialValues={{ email: '', password: ''}}
                onSubmit={(values) => console.log(values)}
                validationSchema={validationSchema}
            >
                <FormField 
                    autoCapitalize="none"
                    autoCorrect={false}
                    icon="email"
                    keyboardType="email-address"
                    name="email"
                    placeholder="Email"
                    textContentType="emailAddress"
                />
                <FormField 
                    autoCapitalize="none"
                    autoCorrect={false}
                    icon="lock"
                    name="password"
                    placeholder="Password"
                    secureTextEntry={true}
                    textContentType="password"
                />
                <SubmitButton title="Login" />
            </Form>
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