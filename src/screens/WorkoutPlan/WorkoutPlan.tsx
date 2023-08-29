import {StyleSheet, Image, Text, ScrollView, View} from 'react-native';
import React, {useState} from 'react';
import {IWorkoutPlanScreenProps} from './interfaces';
import Screen from '../../components/Screen/Screen';
import {colors} from '../../configs/colors.config';
import Input from '../../components/Input/Input';
import Button from '../../components/Button/Button';
import {useSafeAreaInsets} from 'react-native-safe-area-context';
import {Picker, DatePicker} from 'react-native-wheel-pick';

const WorkoutPlan: IWorkoutPlanScreenProps = ({navigation}) => {
  const [name, setName] = useState('');
  const {top} = useSafeAreaInsets();

  return (
    <Screen>
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
            console.log(value);
          }}
        />

        <View style={styles.buttonContainer}>
          <Button
            title="Continue"
            onPress={() => navigation.navigate('Success')}
          />
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
