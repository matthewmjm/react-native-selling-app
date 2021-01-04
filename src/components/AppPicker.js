import React, { useState } from 'react'
import { Text, View, StyleSheet, TextInput, TouchableWithoutFeedback, Modal, Button, FlatList } from 'react-native';
import { MaterialCommunityIcons } from '@expo/vector-icons';
import colors from '../config/colors';
import defaultStyles from '../config/styles';
import AppText from './AppText';
import Screen from './Screen';
import PickerItem from './PickerItem';

const AppPicker = ({ icon, items, placeholder }) => {
    const [modalVisible, setModalVisible] = useState(false)
    return (
        <React.Fragment>
            <TouchableWithoutFeedback onPress={() => setModalVisible(true)}>
                <View style={styles.container}>
                    {icon && (
                        <MaterialCommunityIcons 
                            name={icon} 
                            size={20} 
                            color={colors.medium} 
                            style={styles.icon}
                        />
                    )}
                    <AppText style={styles.text} >{placeholder}</AppText>
                    <MaterialCommunityIcons 
                            name="chevron-down"
                            size={20} 
                            color={colors.medium} 
                        />
                </View>
            </TouchableWithoutFeedback>
            <Modal visible={modalVisible} animationType="slide" >
                <Screen>
                    <Button title="Close" onPress={() => setModalVisible(false)} /> 
                    <FlatList 
                        data={items}
                        keyExtractor={item => item.value.toString()}
                        renderItem={({ item }) => 
                            <PickerItem 
                                label={item.label}
                                onPress={() => console.log(item)}
                            />}
                    />
                </Screen>
            </Modal>
        </React.Fragment>
    );
};

const styles = StyleSheet.create({
    container: {
        backgroundColor: colors.light,
        borderRadius: 25,
        flexDirection: "row",
        width: "100%",
        padding: 15,
        marginVertical: 10,
    },
    icon: {
        marginRight: 10,
    },
    text: {
        flex: 1,
    }
});

export default AppPicker;