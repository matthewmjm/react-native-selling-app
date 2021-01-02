import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View, Button, SafeAreaView } from 'react-native';
import WelcomeScreen from './src/screens/WelcomeScreen';
import ViewImageScreen from './src/screens/ViewImageScreen';
import AppText from './src/components/AppText/AppText';
import { MaterialCommunityIcons } from '@expo/vector-icons';
import AppButton from './src/components/AppButton';

export default function App() {
  return (
    <View style={styles.container}>
      <AppText>I love React Native</AppText>
      <AppButton 
        title="Login"
        onPress={() => console.log("Tapped")}
      ></AppButton>
    </View>

  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
