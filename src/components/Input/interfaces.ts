import React from 'react';
import {TextInputProps} from 'react-native';

export type ITextInputProps = React.FC<
  TextInputProps & {
    errorMessage?: string;
  }
>;
