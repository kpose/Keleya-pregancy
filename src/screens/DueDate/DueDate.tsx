import {StyleSheet, Image, Text, ScrollView, View} from 'react-native';
import React, {useState} from 'react';
import {IDueDateScreenProps} from './interfaces';
import Screen from '../../components/Screen/Screen';
import {colors} from '../../configs/colors.config';
import Input from '../../components/Input/Input';
import Button from '../../components/Button/Button';

const DueDate: IDueDateScreenProps = ({navigation}) => {
  const [name, setName] = useState('');

  return (
    <Screen>
      <ScrollView>
        <Image
          style={styles.firstImage}
          resizeMode="cover"
          source={require('../../assets/images/due-date.jpg')}
        />

        <Text style={styles.title}>When is your baby due, Sam?</Text>

        <Input
          placeholder="example@gmail.com"
          value={name}
          onChange={() => setName}
          errorMessage="Enter a valid name"
        />

        <View style={styles.buttonContainer}>
          <Button
            title="Continue"
            onPress={() => navigation.navigate('WorkoutPlan')}
          />
        </View>
      </ScrollView>
    </Screen>
  );
};

export default DueDate;

const styles = StyleSheet.create({
  firstImage: {
    height: 550,
    width: '100%',
  },
  title: {
    color: colors.greyishBrown,
    fontWeight: '400',
    fontSize: 24,
    textAlign: 'center',
    alignSelf: 'center',
    marginVertical: 30,
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
