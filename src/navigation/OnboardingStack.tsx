import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import {IOnboardingStackParamList} from './interfaces';

import Landing from '../screens/Landing/Landing';
import Signup from '../screens/Signup/Signup';

const Stack = createStackNavigator<IOnboardingStackParamList>();

export function OnboardingStack() {
  return (
    <Stack.Navigator screenOptions={{headerShown: false}}>
      <Stack.Screen name="Landing" component={Landing} />
      <Stack.Screen name="Signup" component={Signup} />
    </Stack.Navigator>
  );
}
