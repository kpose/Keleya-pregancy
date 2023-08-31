import {StyleSheet, Image, Text, ScrollView, View} from 'react-native';
import React, {useCallback, useState} from 'react';
import {ISignupScreenProps} from './interfaces';
import Screen from '../../components/Screen/Screen';
import {colors} from '../../configs/colors.config';
import Input from '../../components/Input/Input';
import CheckBox from '@react-native-community/checkbox';
import Button from '../../components/Button/Button';
import {HeaderBackButton} from '@react-navigation/elements';
import {useLocale} from '../../providers/LocaleContext';

const Signup: ISignupScreenProps = ({navigation, route}) => {
  const [email, setEmail] = React.useState('');
  const [password, setPassword] = React.useState('');
  const [loading, setIsLoading] = useState(false);
  const [isPrivacyAccepted, setIsPrivacyAccepted] = useState(false);
  const [isTermsAccepted, setisTermsAccepted] = useState(false);
  const {translate} = useLocale();

  const isSignUp = route.params.tag === 'signup';

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
          {isSignUp
            ? translate({key: 'add-details-below'})
            : translate({key: 'welcome-back'})}
        </Text>

        <Input
          placeholder="example@gmail.com"
          value={email}
          onChangeText={v => updateForm(v, 'email')}
          keyboardType="email-address"
        />
        <Input
          placeholder={translate({key: 'enter-a-password'})}
          value={password}
          onChangeText={v => updateForm(v, 'password')}
          secureTextEntry={true}
        />

        {isSignUp ? (
          <View style={styles.termsContainer}>
            <CheckBox
              value={isPrivacyAccepted}
              tintColor={colors.lightTeal}
              onValueChange={v => setIsPrivacyAccepted(v)}
              boxType="square"
              onCheckColor={colors.lightTeal}
              onTintColor={colors.lightTeal}
            />
            <Text style={styles.terms}>{translate({key: 'read-privacy'})}</Text>
          </View>
        ) : null}

        {isSignUp ? (
          <View style={styles.termsContainer}>
            <CheckBox
              value={isTermsAccepted}
              tintColor={colors.lightTeal}
              onValueChange={v => setisTermsAccepted(v)}
              boxType="square"
              onCheckColor={colors.lightTeal}
              onTintColor={colors.lightTeal}
            />
            <Text style={styles.terms}>{translate({key: 'accept-terms'})}</Text>
          </View>
        ) : null}

        {!isSignUp ? (
          <Text style={styles.forgotPassword}>
            {translate({key: 'forgotten-password'})}{' '}
          </Text>
        ) : null}

        <View style={styles.buttonContainer}>
          <Button
            title={
              isSignUp
                ? translate({key: 'create-account'})
                : translate({key: 'Log-in'})
            }
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
  forgotPassword: {
    color: colors.greyishBrown,
    fontWeight: '400',
    fontSize: 24,
    textAlign: 'center',
    alignSelf: 'center',
    marginTop: 100,
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
    marginVertical: 20,
  },
});
