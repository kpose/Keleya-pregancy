import {StyleSheet, Text, Pressable, ActivityIndicator} from 'react-native';
import React from 'react';
import {colors} from '../../configs/colors.config';
import {IButtonProps} from './interfaces';

/**
 * This component is used to render a button.
 * @param props IButtonProps
 * @returns React.ReactElement
 */
const Button: IButtonProps = ({onPress, title, loading, ...props}) => {
  return (
    <Pressable
      {...props}
      style={[
        styles.button,
        {backgroundColor: loading ? colors.warmGrey : colors.paleTeal},
      ]}
      onPress={onPress}>
      {loading ? (
        <ActivityIndicator color={colors.lightTeal} animating={true} />
      ) : (
        <Text style={styles.getStartedText}>{title}</Text>
      )}
    </Pressable>
  );
};

export default Button;

const styles = StyleSheet.create({
  button: {
    alignSelf: 'center',
    marginTop: 20,
    height: 50,
    width: 300,
    borderRadius: 6,
    alignItems: 'center',
    justifyContent: 'center',
  },
  getStartedText: {
    color: colors.white,
    fontWeight: '500',
    fontSize: 18,
  },
});
