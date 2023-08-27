import {StyleSheet, Text, View} from 'react-native';
import React from 'react';
import Screen from './components/screen/Screen';
import {NavigationContainer} from '@react-navigation/native';

const App = () => {
  return (
    <NavigationContainer>
      <Screen>
        <View style={styles.container}>
          <Text>App</Text>
        </View>
      </Screen>
    </NavigationContainer>
  );
};

export default App;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
});
