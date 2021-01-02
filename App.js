import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View, Button, SafeAreaView } from 'react-native';
import WelcomeScreen from './src/screens/WelcomeScreen';
import ViewImageScreen from './src/screens/ViewImageScreen';
import AppText from './src/components/AppText/AppText';
import { MaterialCommunityIcons } from '@expo/vector-icons';
import AppButton from './src/components/AppButton';
import Card from './src/components/Card';

const App = () => {
  return (
    <View style={{
      backgroundColor:'#f8f4f4',
      padding: 20,
      paddingTop: 100
    }}>
      <Card 
        title="Red Jacket for Sale"
        subTitle="$100"
        image={require("./src/assets/jacket.jpg")}
      />
    </View>
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