import {StyleSheet, Image, Text, ScrollView, View} from 'react-native';
import React, {useCallback, useState} from 'react';
import {INameScreenProps} from './interfaces';
import Screen from '../../components/Screen/Screen';
import {colors} from '../../configs/colors.config';
import Input from '../../components/Input/Input';
import Button from '../../components/Button/Button';
import {HeaderBackButton} from '@react-navigation/elements';
import {useLocale} from '../../providers/LocaleContext';

const Name: INameScreenProps = ({navigation}) => {
  const [name, setName] = useState('');
  const [loading, setIsLoading] = useState(false);
  const {translate} = useLocale();

  const updateForm = useCallback((v: string) => {
    return setName(v);
  }, []);

  const handleContinue = useCallback(() => {
    setIsLoading(true);
    const timeout = setTimeout(() => {
      setIsLoading(false);
      navigation.navigate('DueDate', {name});
    }, 1000);

    return () => clearTimeout(timeout);
  }, [name, navigation]);

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
          <HeaderBackButton onPress={handleBackPress} />
        </View>

        <Image
          style={styles.firstImage}
          resizeMode="cover"
          source={require('../../assets/images/couch_smile.jpg')}
        />

        <Text style={styles.title}>{translate({key: 'it-is-great'})}</Text>

        <Input
          placeholder={translate({key: 'your-name'})}
          value={name}
          onChangeText={v => updateForm(v)}
        />

        <View style={styles.buttonContainer}>
          <Button
            title={translate({key: 'continue-in'})}
            loading={loading}
            disabled={name.length < 3}
            onPress={handleContinue}
          />
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
