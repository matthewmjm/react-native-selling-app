import React from 'react';
import { NavigationContainer } from "@react-navigation/native";

import navigationTheme from "./src/navigation/navigationTheme";
import AppNavigator from "./src/navigation/AppNavigator";

const App = () => {
  return (
    <NavigationContainer theme={navigationTheme}>
    <AppNavigator />
  </NavigationContainer>
  );
};

export default App;