import {
  createStackNavigator,
  TransitionPresets
} from '@react-navigation/stack';
import * as React from 'react';
import { Strings } from '../constants';
import PeopleScreen from '../modules/PeopleScreen';
import PeopleDetailsScreen from '../modules/PeopleDetailsScreen';

const TransitionScreenOptions = {
  ...TransitionPresets.SlideFromRightIOS,
  headerShown: false
};

// Main Stack Navigator
const MainStack = createStackNavigator();
const MainNavigation = () => (
  <MainStack.Navigator
    initialRouteName={Strings.peopleList}
    screenOptions={TransitionScreenOptions}
  >
    <MainStack.Screen name={Strings.peopleList} component={PeopleScreen} />
    <MainStack.Screen
      name={Strings.peopleDetail}
      component={PeopleDetailsScreen}
    />
  </MainStack.Navigator>
);

export { MainNavigation };
