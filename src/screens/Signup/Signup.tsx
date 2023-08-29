import {StyleSheet, Image, Text, ScrollView, View} from 'react-native';
import React, {useState} from 'react';
import {ISignupScreenProps} from './interfaces';
import Screen from '../../components/Screen/Screen';
import {colors} from '../../configs/colors.config';
import Input from '../../components/Input/Input';
import CheckBox from '@react-native-community/checkbox';
import Button from '../../components/Button/Button';

const Signup: ISignupScreenProps = ({navigation}) => {
  const [email, setEmail] = React.useState('');
  const [isPrivacyAccepted, setIsPrivacyAccepted] = useState(false);
  const [isTermsAccepted, setisTermsAccepted] = useState(false);

  const [password, setPassword] = React.useState('');
  return (
    <Screen>
      <ScrollView>
        <Image
          style={styles.firstImage}
          resizeMode="cover"
          source={require('../../assets/images/auth.jpg')}
        />

        <Text style={styles.title}>
          Add your details below to set up an account
        </Text>

        <Input
          placeholder="example@gmail.com"
          value={email}
          onChange={() => setEmail}
          errorMessage="Incorrect password"
        />
        <Input
          placeholder="Enter a password"
          value={password}
          onChange={() => setPassword}
          secureTextEntry={true}
          errorMessage="Incorrect password"
        />

        <View style={styles.termsContainer}>
          <CheckBox
            value={isPrivacyAccepted}
            tintColor={colors.lightTeal}
            onValueChange={v => setIsPrivacyAccepted(v)}
            boxType="square"
            onCheckColor={colors.lightTeal}
            onTintColor={colors.lightTeal}
          />
          <Text style={styles.terms}>I've read the privacy policy</Text>
        </View>

        <View style={styles.termsContainer}>
          <CheckBox
            value={isTermsAccepted}
            tintColor={colors.lightTeal}
            onValueChange={v => setisTermsAccepted(v)}
            boxType="square"
            onCheckColor={colors.lightTeal}
            onTintColor={colors.lightTeal}
          />
          <Text style={styles.terms}>
            I accept the terms & conditions and Keleya's advice
          </Text>
        </View>

        <View style={styles.buttonContainer}>
          <Button title="Create account" />
        </View>
      </ScrollView>
    </Screen>
  );
};

export default Signup;

const styles = StyleSheet.create({
  firstImage: {
    height: 400,
    width: '100%',
  },
  title: {
    color: colors.greyishBrown,
    fontWeight: '400',
    fontSize: 24,
    textAlign: 'center',
    alignSelf: 'center',
    marginTop: 20,
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
