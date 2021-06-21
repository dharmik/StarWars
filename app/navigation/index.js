import { NavigationContainer } from '@react-navigation/native';
import {
  createStackNavigator,
  TransitionPresets
} from '@react-navigation/stack';
import React from 'react';
import { Strings } from '../constants';
import { MainNavigation } from './AppNavigation';
import { navigationRef } from './NavigationService';

const TransitionScreenOptions = {
  ...TransitionPresets.SlideFromRightIOS,
  headerShown: false
};

// Navigation Container with Root Navigator routes
export default function Navigation() {
  return (
    <NavigationContainer ref={navigationRef}>
      <RootNavigator />
    </NavigationContainer>
  );
}

// Declaration of Stack navigator
const Stack = createStackNavigator();

// Root Navigator with routes
const RootNavigator = () => (
  <Stack.Navigator screenOptions={TransitionScreenOptions}>
    <Stack.Screen name={Strings.root} component={MainNavigation} />
  </Stack.Navigator>
);
