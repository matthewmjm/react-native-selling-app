import React from 'react';
import { Text } from 'react-native';
import styles from './styles';

const AppText = (props) => {
    return (
        <Text style={styles.text}>{props.children}</Text>
    )
}




// const styles = StyleSheet.create({
//     text: {
//         color: 'tomato',
//         ...Platform.select({
//             ios: {
//                 fontSize: 20,
//                 fontFamily: 'Avenir',
//             },
//             android: {
//                 fontSize: 18, 
//                 fontFamily: 'Roboto',
//             }
//         })
//     }
// })

export default AppText;