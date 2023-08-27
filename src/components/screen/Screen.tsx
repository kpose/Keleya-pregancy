import React, {useCallback, useEffect, useMemo} from 'react';
import {
  KeyboardAvoidingView,
  Platform,
  StyleSheet,
  StatusBar,
  View,
  StatusBarStyle,
} from 'react-native';
import {useIsFocused} from '@react-navigation/native';
import {IScreenProps} from './interfaces';
import {colors} from '../../configs/colors.config';
import {useSafeAreaInsets} from 'react-native-safe-area-context';
/**
 * This component is used to configure screens.
 * @param props IScreenProps
 * @returns React.ReactElement
 */
const Screen: IScreenProps = function Screen({
  children,
  style,
  noKeyboardAvoidingView,
  keyboardOffset,
  ...props
}) {
  const isFocused = useIsFocused();
  const {top} = useSafeAreaInsets();

  const statusbarStyle = useMemo((): StatusBarStyle | null => {
    if (props.statusbarStyle) {
      return props.statusbarStyle;
    }
    return 'dark-content';
  }, [props.statusbarStyle]);

  const androidStatusbarBackgroundColor = useMemo(() => {
    if (props.statusbarColor) {
      return props.statusbarColor;
    }

    return colors.white;
  }, [props.statusbarColor]);

  const setStatusBarBackgroundColor = useCallback(() => {
    if (Platform.OS === 'android' && androidStatusbarBackgroundColor) {
      StatusBar.setBackgroundColor(androidStatusbarBackgroundColor);
    }
  }, [androidStatusbarBackgroundColor]);

  const setBarStyle = useCallback(() => {
    if (statusbarStyle) {
      StatusBar.setBarStyle(statusbarStyle);
    }
  }, [statusbarStyle]);

  useEffect(
    function onFocusDidUpdate() {
      if (isFocused) {
        setStatusBarBackgroundColor();
        setBarStyle();
      }
      return function onFocusDidUpdateCleanUp() {};
    },
    [isFocused, setBarStyle, setStatusBarBackgroundColor, statusbarStyle],
  );

  return (
    <>
      {noKeyboardAvoidingView ? (
        <View style={[styles.container, style, {paddingTop: top}]}>
          {children}
        </View>
      ) : (
        <KeyboardAvoidingView
          keyboardVerticalOffset={keyboardOffset}
          style={[styles.container, style, {paddingTop: top}]}
          behavior={Platform.select({ios: 'padding', android: undefined})}>
          {children}
        </KeyboardAvoidingView>
      )}
    </>
  );
};

const styles = StyleSheet.create({
  bgContainer: {
    position: 'absolute',
    flexDirection: 'row',
    left: 0,
    top: 0,
    bottom: 0,
    right: 0,
    justifyContent: 'center',
  },
  container: {
    flex: 1,
    backgroundColor: colors.white,
  },
});

// export Screen component as the modules default
export default Screen;
