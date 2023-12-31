import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import {IOnboardingStackParamList} from './interfaces';

import Landing from '../screens/Landing/Landing';
import Signup from '../screens/Signup/Signup';
import Name from '../screens/Name/Name';
import DueDate from '../screens/DueDate/DueDate';
import WorkoutPlan from '../screens/WorkoutPlan/WorkoutPlan';
import Success from '../screens/Success/Success';

const Stack = createStackNavigator<IOnboardingStackParamList>();

export function OnboardingStack() {
  return (
    <Stack.Navigator
      screenOptions={{headerShown: false, animationEnabled: false}}>
      <Stack.Screen name="Landing" component={Landing} />
      <Stack.Screen name="Signup" component={Signup} />
      <Stack.Screen name="Name" component={Name} />
      <Stack.Screen name="DueDate" component={DueDate} />
      <Stack.Screen name="WorkoutPlan" component={WorkoutPlan} />
      <Stack.Screen name="Success" component={Success} />
    </Stack.Navigator>
  );
}
