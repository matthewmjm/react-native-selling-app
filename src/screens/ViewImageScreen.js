import React from 'react';
import { Image, View, Text, StyleSheet } from 'react-native';

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
        backgroundColor: '#fc5c65',
        position: 'absolute',
        top: 40,
        left: 30,
    },
    container: {
        backgroundColor: 'black',
        flex: 1,
    },
    deleteIcon: {
        width: 50,
        height: 50,
        backgroundColor: '#4ecdc4',
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
