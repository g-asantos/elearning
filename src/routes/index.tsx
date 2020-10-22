import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';

import Initial from '../pages/Initial';
import SignIn from '../pages/SignIn';
import Choice from '../pages/Choice';
import Home from '../pages/Home';
import CreateAcc from '../pages/CreateAcc';
import ForgotPass from '../pages/ForgotPass';

const ELearning = createStackNavigator();

const Routes = () => (
  <ELearning.Navigator
    initialRouteName="Initial"
    screenOptions={{
      headerShown: false,
    }}
  >
    <ELearning.Screen name="Initial" component={Initial} />
    <ELearning.Screen name="SignIn" component={SignIn} />
    <ELearning.Screen name="Choice" component={Choice} />
    <ELearning.Screen name="Home" component={Home} />
    <ELearning.Screen name="CreateAcc" component={CreateAcc} />
    <ELearning.Screen name="ForgotPass" component={ForgotPass} />
  </ELearning.Navigator>
);

export default Routes;
