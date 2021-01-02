import React from 'react';
import { Image, View, Text, StyleSheet } from 'react-native';
import colors from '../config/colors';

const ViewImageScreen = (props) => {
    return (
        <View style={styles.container}>
            <View style={styles.closeIcon}></View>
            <View style={styles.deleteIcon}></View>
                <Image 
                    source={require('../assets/chair.jpg')} 
                    style={styles.image} 
                    resizeMode='contain' 
                />
        </View>
    );
};

const styles = StyleSheet.create({
    closeIcon: {
        width: 50,
        height: 50,
        backgroundColor: colors.primary,
        position: 'absolute',
        top: 40,
        left: 30,
    },
    container: {
        backgroundColor: colors.black,
        flex: 1,
    },
    deleteIcon: {
        width: 50,
        height: 50,
        backgroundColor: colors.secondary,
        position: 'absolute',
        top: 40,
        right: 30,
    },
    image: {
        width: '100%',
        height: '100%',
    },
});

export default ViewImageScreen;
