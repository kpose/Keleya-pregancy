import {StyleSheet, Image, Text, ScrollView, View} from 'react-native';
import React, {useCallback, useState} from 'react';
import {ISignupScreenProps} from './interfaces';
import Screen from '../../components/Screen/Screen';
import {colors} from '../../configs/colors.config';
import Input from '../../components/Input/Input';
import CheckBox from '@react-native-community/checkbox';
import Button from '../../components/Button/Button';
import {HeaderBackButton} from '@react-navigation/elements';

const Signup: ISignupScreenProps = ({navigation}) => {
  const [email, setEmail] = React.useState('');
  const [password, setPassword] = React.useState('');
  const [loading, setIsLoading] = useState(false);
  const [isPrivacyAccepted, setIsPrivacyAccepted] = useState(false);
  const [isTermsAccepted, setisTermsAccepted] = useState(false);

  const isValid = useCallback(() => {
    const emailRegex = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/;
    return !!password && !emailRegex.test(email);
  }, [email, password]);

  const updateForm = useCallback((v: string, tag: 'email' | 'password') => {
    if (tag === 'email') {
      return setEmail(v);
    }
    return setPassword(v);
  }, []);

  const handleContinue = useCallback(() => {
    setIsLoading(true);
    const timeout = setTimeout(() => {
      setIsLoading(false);
      navigation.navigate('Name');
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
      <ScrollView>
        <View style={[styles.headerContainer, {}]}>
          <HeaderBackButton label="Hello" onPress={handleBackPress} />
        </View>

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
          onChangeText={v => updateForm(v, 'email')}
          keyboardType="email-address"
          // errorMessage="Incorrect password"
        />
        <Input
          placeholder="Enter a password"
          value={password}
          onChangeText={v => updateForm(v, 'password')}
          secureTextEntry={true}
          // errorMessage="Incorrect password"
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
          <Button
            title="Create account"
            disabled={!isValid()}
            loading={loading}
            onPress={handleContinue}
          />
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
  headerContainer: {
    position: 'absolute',
    left: 0,
    top: 0,
    zIndex: 1,
    marginTop: 40,
    paddingLeft: 16,
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
