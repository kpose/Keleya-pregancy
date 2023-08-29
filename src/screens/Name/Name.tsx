import {StyleSheet, Image, Text, ScrollView, View} from 'react-native';
import React, {useState} from 'react';
import {INameScreenProps} from './interfaces';
import Screen from '../../components/Screen/Screen';
import {colors} from '../../configs/colors.config';
import Input from '../../components/Input/Input';
import Button from '../../components/Button/Button';

const Name: INameScreenProps = ({navigation}) => {
  const [name, setName] = useState('');

  return (
    <Screen>
      <ScrollView>
        <Image
          style={styles.firstImage}
          resizeMode="cover"
          source={require('../../assets/images/couch_smile.jpg')}
        />

        <Text style={styles.title}>
          It's great that you are here! First things first, what should we call
          you
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

export default Name;

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
