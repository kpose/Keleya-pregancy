import React from 'react';
import 'react-native-gesture-handler';
import {SafeAreaProvider} from 'react-native-safe-area-context';
import {AppNavigator} from './navigation/AppNavigator';
import LocaleProvider from './providers/LocaleProvider';

const App = () => {
  return (
    <LocaleProvider>
      <SafeAreaProvider>
        <AppNavigator />
      </SafeAreaProvider>
    </LocaleProvider>
  );
};

export default App;
