import React from 'react';
import {ViewStyle, StyleProp, StatusBarStyle} from 'react-native';

export type IScreenProps = React.FC<{
  statusbarStyle?: StatusBarStyle;
  style?: StyleProp<ViewStyle>;
  statusbarColor?: string;
  noKeyboardAvoidingView?: boolean;
  keyboardOffset?: number;
  children: React.ReactNode;
}>;
