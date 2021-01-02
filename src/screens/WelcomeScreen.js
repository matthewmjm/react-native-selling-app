import React from 'react';
import { StyleSheet, View, Text, ImageBackground, Image } from 'react-native';

const WelcomeScreen = (props) => {
    return (
        <ImageBackground 
            source={require('../assets/background.jpg')} 
            style={styles.background}
        >
            <View style={styles.logoContainer}>
                <Image style={styles.logo} source={require('../assets/logo-red.png')} />
                <Text>Sell What You Don't Need</Text>
            </View>

        </ImageBackground>
    );
}

const styles = StyleSheet.create({
    background: {
        flex: 1,
        justifyContent: "flex-end",
        alignItems: 'center',
    },
    logo: {
        width: 100,
        height: 100,
    },
    logoContainer: {
        position: 'absolute',
        top: 70,
        alignItems: 'center',
    },
    registerButton: {
        width: "100%",
        height: 70,
        backgroundColor: '#4ecdc4',
    },
});


export default WelcomeScreen;