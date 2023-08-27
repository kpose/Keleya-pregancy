import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {OnboardingStack} from './OnboardingStack';

export function AppNavigator() {
  return (
    <NavigationContainer>
      <OnboardingStack />
    </NavigationContainer>
  );
}
