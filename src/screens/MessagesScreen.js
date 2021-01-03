import React, { useState } from 'react'
import { View, Text, StyleSheet, FlatList } from 'react-native';
import ListItem from '../components/ListItem';
import ListItemDeleteAction from '../components/ListItemDeleteAction';
import ListItemSeparator from '../components/ListItemSeparator';
import Screen from '../components/Screen';

const initialMessages = [
    {
        id: 1,
        title: 'T1',
        description: 'D1',
        image: require('../assets/mosh.jpg')
    },
    {
        id: 2,
        title: 'T2',
        description: 'D2',
        image: require('../assets/mosh.jpg')
    },
]

const MessagesScreen = (props) => {

    const [messages, setMessages] = useState(initialMessages);

    const handleDelete = message => {
        // Delete message from messages array
        const newMessages = messages.filter(m => m.id !== message.id);
        setMessages(newMessages);

        // Delete message from the server (which we will do later)
    }
    return (
        <Screen>
            <FlatList 
                data={messages}
                keyExtractor={message => message.id.toString()}
                renderItem={({ item }) => (
                    <ListItem
                        title={item.title}
                        subTitle={item.description}
                        image={item.image}
                        onPress={() => console.log("message selected", item)}
                        renderRightActions={() => (
                            <ListItemDeleteAction onPress={() => handleDelete(item)} />
                        )}
                    /> 
                )}
                ItemSeparatorComponent={ListItemSeparator}
            />
        </Screen>
    );
};

const styles = StyleSheet.create({
})

export default MessagesScreen;
