import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View, Button, SafeAreaView } from 'react-native';
import WelcomeScreen from './src/screens/WelcomeScreen';
import ViewImageScreen from './src/screens/ViewImageScreen';
import AppText from './src/components/AppText/AppText';
import { MaterialCommunityIcons } from '@expo/vector-icons';
import AppButton from './src/components/AppButton';
import Card from './src/components/Card';
import ListingDetailsScreen from './src/screens/ListingDetailsScreen';

const App = () => {
  return (
    <ViewImageScreen />
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