import React from 'react';
import {StackScreenProps} from '@react-navigation/stack';
import {IOnboardingStackParamList} from '../../navigation/interfaces';

export type ILandingScreenProps = React.FC<
  StackScreenProps<IOnboardingStackParamList, 'Landing'> & {}
>;
