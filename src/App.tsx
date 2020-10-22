import 'react-native-gesture-handler';

import React from 'react';

import { NavigationContainer } from '@react-navigation/native';
import { StatusBar } from 'react-native';
import Routes from './routes';

const App = () => {
  return (
    <NavigationContainer>
      <StatusBar backgroundColor="#6548A3" />
      <Routes />
    </NavigationContainer>
  );
};

export default App;
