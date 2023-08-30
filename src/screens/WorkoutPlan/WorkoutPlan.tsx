import {StyleSheet, Image, Text, View} from 'react-native';
import React, {useCallback, useState} from 'react';
import {IWorkoutPlanScreenProps} from './interfaces';
import Screen from '../../components/Screen/Screen';
import {colors} from '../../configs/colors.config';
import Button from '../../components/Button/Button';
import {useSafeAreaInsets} from 'react-native-safe-area-context';
import {Picker} from 'react-native-wheel-pick';
import {HeaderBackButton} from '@react-navigation/elements';

const WorkoutPlan: IWorkoutPlanScreenProps = ({navigation}) => {
  const [frequency, setFrequency] = useState('3 times a week');
  const [loading, setIsLoading] = useState(false);
  const {top} = useSafeAreaInsets();

  const handleContinue = useCallback(() => {
    setIsLoading(true);
    const timeout = setTimeout(() => {
      setIsLoading(false);
      navigation.navigate('Success');
    }, 1000);

    return () => clearTimeout(timeout);
  }, [navigation]);

  const handleBackPress = useCallback(() => {
    if (loading) {
      return;
    }
    navigation.goBack();
  }, [loading, navigation]);

  return (
    <Screen>
      <View style={[styles.headerContainer, {}]}>
        <HeaderBackButton label="Hello" onPress={handleBackPress} />
      </View>
      <View>
        <Image
          style={styles.firstImage}
          resizeMode="cover"
          source={require('../../assets/images/workout.jpg')}
        />

        <Text style={[styles.title, {paddingTop: top + 30}]}>
          How many times a week do you want to be active?
        </Text>

        <Picker
          style={styles.picker}
          selectedValue="3 times a week"
          pickerData={[
            'Once a week',
            '2 times a week',
            '3 times a week',
            '4 times a week',
            '5 times a week',
            '6 times a week',
            'Everyday',
          ]}
          onValueChange={value => {
            setFrequency(value);
          }}
        />

        <View style={styles.buttonContainer}>
          <Button title="Continue" loading={loading} onPress={handleContinue} />
        </View>
      </View>
    </Screen>
  );
};

export default WorkoutPlan;

const styles = StyleSheet.create({
  firstImage: {
    height: 550,
    width: '100%',
  },
  title: {
    position: 'absolute',
    left: 16,
    right: 16,
    color: colors.greyishBrown,
    fontWeight: '400',
    fontSize: 24,
    textAlign: 'center',
    alignSelf: 'center',
  },
  headerContainer: {
    position: 'absolute',
    left: 0,
    top: 0,
    zIndex: 1,
    marginTop: 40,
    paddingLeft: 16,
  },
  termsContainer: {
    flexDirection: 'row',
    marginTop: 20,
    paddingHorizontal: 16,
    alignItems: 'center',
  },
  terms: {
    marginLeft: 10,
  },
  buttonContainer: {
    marginVertical: 40,
  },
  picker: {
    backgroundColor: colors.white,
    alignSelf: 'center',
    width: '80%',
  },
});
