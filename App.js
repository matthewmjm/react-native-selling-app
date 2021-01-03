import React from 'react';
import { StyleSheet, Text, View, Button, SafeAreaView } from 'react-native';
import { MaterialCommunityIcons } from '@expo/vector-icons';
import Constants from 'expo-constants';
import WelcomeScreen from './src/screens/WelcomeScreen';
import ViewImageScreen from './src/screens/ViewImageScreen';
import AppText from './src/components/AppText/AppText';
import AppButton from './src/components/AppButton';
import Card from './src/components/Card';
import ListingDetailsScreen from './src/screens/ListingDetailsScreen';
import MessagesScreen from './src/screens/MessagesScreen';

const App = () => {
  return (
    <MessagesScreen />
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
  },
});

export default App;