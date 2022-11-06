import React from 'react';

import { createStackNavigator } from '@react-navigation/stack';
import { ROUTES } from 'res/constants/routes';
import { Account, Profile } from 'screens';
import {
  modalScreenOptions,
  noHeader,
  stackScreenOptions,
} from 'utils/screenOptions';

const Stack = createStackNavigator();

export const ProfileStack = () => {
  return (
    <Stack.Navigator screenOptions={noHeader}>
      <Stack.Screen
        name={ROUTES.ACCOUNT}
        component={Account}
        options={stackScreenOptions}
      />
      <Stack.Group screenOptions={modalScreenOptions}>
        <Stack.Screen
          name={ROUTES.PROFILE}
          component={Profile}
          options={stackScreenOptions}
        />
      </Stack.Group>
    </Stack.Navigator>
  );
};
