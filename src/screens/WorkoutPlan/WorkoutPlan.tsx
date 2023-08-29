import {StyleSheet, Image, Text, ScrollView, View} from 'react-native';
import React, {useState} from 'react';
import {IWorkoutPlanScreenProps} from './interfaces';
import Screen from '../../components/Screen/Screen';
import {colors} from '../../configs/colors.config';
import Input from '../../components/Input/Input';
import Button from '../../components/Button/Button';
import {useSafeAreaInsets} from 'react-native-safe-area-context';

const WorkoutPlan: IWorkoutPlanScreenProps = ({navigation}) => {
  const [name, setName] = useState('');
  const {top} = useSafeAreaInsets();

  return (
    <Screen>
      <ScrollView>
        <Image
          style={styles.firstImage}
          resizeMode="cover"
          source={require('../../assets/images/workout.jpg')}
        />

        <Text style={[styles.title, {paddingTop: top + 30}]}>
          How many times a week do you want to be active?
        </Text>

        <Input
          placeholder="example@gmail.com"
          value={name}
          onChange={() => setName}
          errorMessage="Enter a valid name"
        />

        <View style={styles.buttonContainer}>
          <Button title="Continue" />
        </View>
      </ScrollView>
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
});
