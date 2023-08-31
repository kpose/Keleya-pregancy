/* Onboarding stack */
export type IOnboardingStackParamList = {
  Landing: undefined;
  Signup: {tag: 'signup' | 'signin'};
  Name: undefined;
  DueDate: {name: string};
  WorkoutPlan: undefined;
  Success: undefined;
};
