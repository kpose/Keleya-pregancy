import {StyleSheet, Image, Text, ScrollView, View} from 'react-native';
import React from 'react';
import Screen from '../../components/Screen/Screen';
import {colors} from '../../configs/colors.config';

import Button from '../../components/Button/Button';
import {useSafeAreaInsets} from 'react-native-safe-area-context';
import {ISuccessScreenProps} from './interfaces';
import {useLocale} from '../../providers/LocaleContext';

const Success: ISuccessScreenProps = ({navigation}) => {
  const {top, bottom} = useSafeAreaInsets();
  const {translate} = useLocale();

  return (
    <Screen>
      <ScrollView showsVerticalScrollIndicator={false}>
        <Text style={[{paddingTop: top + 20}, styles.heading]}>
          {translate({key: 'get-notifications'})}
        </Text>
        <Image
          style={styles.firstImage}
          resizeMode="cover"
          source={require('../../assets/images/notifications.jpg')}
        />

        <View style={[styles.footer, {bottom: bottom}]}>
          <Text style={styles.skip}> {translate({key: 'skip-notifs'})}</Text>

          <View style={styles.buttonContainer}>
            <Button title={translate({key: 'allow-notifs'})} />
          </View>
        </View>
      </ScrollView>
    </Screen>
  );
};

export default Success;

const styles = StyleSheet.create({
  firstImage: {
    height: 800,
    width: '100%',
  },
  skip: {
    alignSelf: 'center',
    fontSize: 20,
    fontWeight: '400',
    marginTop: 40,
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
    marginBottom: 20,
    marginTop: 8,
  },
  heading: {
    alignSelf: 'center',
    fontWeight: '300',
    fontSize: 30,
    textAlign: 'center',
  },
  footer: {
    position: 'absolute',
    left: 16,
    right: 16,
    alignItems: 'center',
  },
});
