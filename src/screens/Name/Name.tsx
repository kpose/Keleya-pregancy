import {StyleSheet, Image, Text, ScrollView, View} from 'react-native';
import React, {useCallback, useState} from 'react';
import {INameScreenProps} from './interfaces';
import Screen from '../../components/Screen/Screen';
import {colors} from '../../configs/colors.config';
import Input from '../../components/Input/Input';
import Button from '../../components/Button/Button';

const Name: INameScreenProps = ({navigation}) => {
  const [name, setName] = useState('');
  const [loading, setIsLoading] = useState(false);

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
          placeholder="Your Name"
          value={name}
          onChangeText={v => updateForm(v)}
          keyboardType="email-address"
        />

        <View style={styles.buttonContainer}>
          <Button
            title="Continue"
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
