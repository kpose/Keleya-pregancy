import {
  StyleSheet,
  Image,
  View,
  Text,
  TextInput,
  ScrollView,
} from 'react-native';
import React from 'react';
import {ISignupScreenProps} from './interfaces';
import Screen from '../../components/Screen/Screen';
import {colors} from '../../configs/colors.config';
import Input from '../../components/Input/Input';

const Signup: ISignupScreenProps = ({navigation}) => {
  const [email, setEmail] = React.useState('');
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
});
