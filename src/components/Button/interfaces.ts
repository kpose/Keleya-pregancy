import React from 'react';
import {PressableProps} from 'react-native';

export type IButtonProps = React.FC<
  PressableProps & {
    title: string;
    loading?: boolean;
    disabled?: boolean;
    onPress?: (ev?: any) => void;
  }
>;
