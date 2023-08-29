import React from 'react';
import {StackScreenProps} from '@react-navigation/stack';
import {IOnboardingStackParamList} from '../../navigation/interfaces';

export type IWorkoutPlanScreenProps = React.FC<
  StackScreenProps<IOnboardingStackParamList, 'WorkoutPlan'> & {}
>;
