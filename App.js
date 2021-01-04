import React, { useState } from 'react';
import { StyleSheet, Text, View, Button, SafeAreaView, TextInput, Switch } from 'react-native';
import { MaterialCommunityIcons } from '@expo/vector-icons';
import Constants from 'expo-constants';
import WelcomeScreen from './src/screens/WelcomeScreen';
import ViewImageScreen from './src/screens/ViewImageScreen';
import AppText from './src/components/AppText';
import AppButton from './src/components/AppButton';
import Card from './src/components/Card';
import ListingDetailsScreen from './src/screens/ListingDetailsScreen';
import MessagesScreen from './src/screens/MessagesScreen';
import Screen from './src/components/Screen';
import Icon from './src/components/Icon';
import ListItem from './src/components/ListItem';
import AccountScreen from './src/screens/AccountScreen';
import ListingsScreen from './src/screens/ListingsScreen';
import AppTextInput from './src/components/AppTextInput';
import AppPicker from './src/components/AppPicker';
import LoginScreen from './src/screens/LoginScreen';
import ListingEditScreen from './src/screens/ListingEditScreen';


const categories = [
  { label: "Furniture", value: 1 },
  { label: "Clothing", value: 2 },
  { label: "Cameras", value: 3 },
];


const App = () => {
  const [firstName, setFirstName] = useState('');
  const [isNew, setIsNew] = useState(false);
  const [category, setCategory] = useState(categories[0])

  return (
    <MessagesScreen />
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#ffffff',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
  },
});

export default App;