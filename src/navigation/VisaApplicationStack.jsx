import React from 'react';

import { createStackNavigator } from '@react-navigation/stack';
import { ROUTES } from 'res/constants/routes';
import { VisaApplication } from 'screens';
import { StatusBar } from 'react-native';

const Stack = createStackNavigator();

export const VisaApplicationStack = () => {
  return (
    <>
      <StatusBar barStyle="dark-content" translucent={false} hidden={false} />
      <Stack.Navigator
        initialRouteName={ROUTES.VISA_APP}
        screenOptions={{ headerShown: false }}
      >
        <Stack.Screen name={ROUTES.VISA_APP} component={VisaApplication} />
      </Stack.Navigator>
    </>
  );
};
