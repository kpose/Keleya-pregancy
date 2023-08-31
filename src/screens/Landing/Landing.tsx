import {
  StyleSheet,
  View,
  Image,
  Text,
  ScrollView,
  Pressable,
} from 'react-native';
import React, {useCallback, useState} from 'react';
import Screen from '../../components/Screen/Screen';
import {colors} from '../../configs/colors.config';
import {ILandingScreenProps} from './interfaces';
import Button from '../../components/Button/Button';
import {useSafeAreaInsets} from 'react-native-safe-area-context';
import {useLocale} from '../../providers/LocaleContext';

const Landing: ILandingScreenProps = ({navigation}) => {
  const {top} = useSafeAreaInsets();
  const [loading, setIsLoading] = useState(false);
  const {translate} = useLocale();

  const handleContinue = useCallback(
    (tag: 'signin' | 'signup') => {
      setIsLoading(true);
      const timeout = setTimeout(() => {
        setIsLoading(false);
        navigation.navigate('Signup', {tag});
      }, 1000);

      return () => clearTimeout(timeout);
    },
    [navigation],
  );

  return (
    <Screen>
      <ScrollView style={styles.container} showsVerticalScrollIndicator={false}>
        <View style={[styles.logoContainer, {paddingTop: top}]}>
          <Image
            style={styles.logo}
            resizeMode="contain"
            source={require('../../assets/images/keleya-logo.png')}
          />
          <Text style={styles.slogan}>
            {translate({key: 'keleya-fit-and-relaxed'})}
          </Text>

          <Image
            style={styles.firstImage}
            resizeMode="cover"
            source={require('../../assets/images/first_image.png')}
          />
        </View>

        <Button
          title={translate({key: 'keleya-get-started'})}
          onPress={() => handleContinue('signup')}
          loading={loading}
        />

        <Pressable
          style={styles.login}
          onPress={() => handleContinue('signin')}>
          <Text style={styles.loginText}>{translate({key: 'or-login'})}</Text>
        </Pressable>
      </ScrollView>
    </Screen>
  );
};

export default Landing;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingHorizontal: 16,
  },
  logo: {
    width: 100,
    height: 100,
  },
  logoContainer: {
    marginTop: 30,
    alignItems: 'center',
  },
  slogan: {
    paddingTop: 15,
    textAlign: 'center',
    fontSize: 20,
    color: colors.greyishBrown,
  },
  firstImage: {
    height: 550,
    width: '100%',
  },
  getStartedText: {
    color: colors.white,
    fontWeight: '500',
    fontSize: 18,
  },
  button: {
    alignSelf: 'center',
    marginTop: 20,
    height: 50,
    width: 300,
    backgroundColor: colors.lightTeal,
    borderRadius: 6,
    alignItems: 'center',
    justifyContent: 'center',
  },
  login: {
    marginTop: 20,
    marginBottom: 60,
    alignSelf: 'center',
  },
  loginText: {
    fontWeight: 'bold',
  },
});
