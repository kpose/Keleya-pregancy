import {StyleSheet, Text, TextInput, View} from 'react-native';
import React from 'react';
import {ITextInputProps} from './interfaces';
import {colors} from '../../configs/colors.config';

/**
 * This component is used to render a TextInput.
 * @param props ITextInputProps
 * @returns React.ReactElement
 */
const Input: ITextInputProps = ({
  errorMessage,
  value,
  onChangeText,
  ...props
}) => {
  return (
    <View style={styles.container}>
      <TextInput
        {...props}
        style={styles.input}
        value={value}
        onChangeText={onChangeText}
        placeholderTextColor={colors.warmGrey}
      />
      {errorMessage ? (
        <Text style={styles.errorMessage}>{errorMessage}</Text>
      ) : null}
    </View>
  );
};

export default Input;

const styles = StyleSheet.create({
  input: {
    height: 55,
    marginBottom: 12,
    borderBottomWidth: 0.5,
    padding: 10,
    width: '80%',
  },
  errorMessage: {
    color: 'red',
    fontSize: 12,
    fontWeight: '300',
  },
  container: {
    alignItems: 'center',
  },
});
