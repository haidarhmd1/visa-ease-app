/* eslint-disable import/no-cycle */
import React from 'react';

import { createStackNavigator } from '@react-navigation/stack';
import { ROUTES } from 'res/constants/routes';
import { VisaApplication } from 'screens';
import { noGestures, noHeader } from 'navigation';

const Stack = createStackNavigator();

export const VisaApplicationStack = () => {
  return (
    <Stack.Navigator screenOptions={{ ...noHeader, ...noGestures }}>
      <Stack.Screen name={ROUTES.VISA_APP} component={VisaApplication} />
    </Stack.Navigator>
  );
};
