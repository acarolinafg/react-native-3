import React from 'react';
import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';

import Acceleration from './src/screens/Acceleration';
import Profile from './src/screens/Profile';

const AplicationStack = createStackNavigator(
  {
    Acceleration: Acceleration,
    Profile: Profile
  },
  {
    initialRouteName: "Acceleration",
    headerMode: "none"
  }
);

const App = createAppContainer(AplicationStack);

export default App;
