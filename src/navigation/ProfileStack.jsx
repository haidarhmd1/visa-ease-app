/* eslint-disable import/no-cycle */
import React from 'react';

import { createStackNavigator } from '@react-navigation/stack';
import { ROUTES } from 'res/constants/routes';
import { Profile } from 'screens';
import { noHeader, stackScreenOptions } from 'navigation';

const Stack = createStackNavigator();

export const ProfileStack = () => {
  return (
    <Stack.Navigator screenOptions={noHeader}>
      <Stack.Screen
        name={ROUTES.PROFILE}
        component={Profile}
        options={stackScreenOptions}
      />
    </Stack.Navigator>
  );
};
