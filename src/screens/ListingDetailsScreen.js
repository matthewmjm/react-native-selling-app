import React from 'react';
import { View, Image, StyleSheet, Text } from 'react-native';
import AppText from '../components/AppText/AppText'
import colors from '../config/colors';
import ListItem from '../components/ListItem';

const ListingDetailsScreen = (props) => {
    return ( 
        <View style={styles.detailsContainer}>
            <Image style={styles.image} source={require('../assets/jacket.jpg')} />
            <View>
                <AppText style={styles.title}>Red Jacket For Sale</AppText>
                <AppText style={styles.price}>$100</AppText>
                <View style={styles.userContainer}>
                    <ListItem 
                        image={require("../assets/matthewmjm.jpg")}
                        title="Matthew Malecki"
                        subTitle="5 Listings"
                    />
                </View>
            </View>
        </View>
    );
};


const styles = StyleSheet.create({
    detailsContainer: {
        padding: 20,
    },
    image: {
        width: '100%',
        height: 300,
    },
    price: {
        color: colors.secondary,
        fontWeight: 'bold',
        fontSize: 20,
        marginVertical: 10,
    },
    title: {
        fontSize: 24,
        fontWeight: '500',
    },
    userContainer: {
        marginVertical: 40,
    },
})


export default ListingDetailsScreen;
