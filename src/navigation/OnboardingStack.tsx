import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import {IOnboardingStackParamList} from './interfaces';

import Landing from '../screens/Landing/Landing';

const Stack = createStackNavigator<IOnboardingStackParamList>();

export function OnboardingStack() {
  return (
    <Stack.Navigator screenOptions={{headerShown: false}}>
      <Stack.Screen name="Landing" component={Landing} />
    </Stack.Navigator>
  );
}
