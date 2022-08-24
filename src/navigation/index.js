/* eslint-disable import/no-cycle */
import React from 'react';

import {
  createStackNavigator,
  TransitionPresets,
} from '@react-navigation/stack';
import { ROUTES } from 'res/constants/routes';
import { Home } from 'screens';
import { StatusBar } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { ProfileStack } from 'navigation/ProfileStack';
import { VisaApplicationStack } from 'navigation/VisaApplicationStack';
import { isIOS } from 'res/constants/header';
import { Account } from 'screens/Account';

const Stack = createStackNavigator();

export const stackScreenOptions = {
  headerShown: false,
  ...TransitionPresets.SlideFromRightIOS,
};

export const noHeader = {
  headerShown: false,
};

export const noGestures = {
  gestureEnabled: false,
};

export const modalScreenOptions = {
  cardOverlayEnabled: true,
  gestureEnabled: true,
  headerShown: false,
  presentation: 'modal',
  ...(isIOS
    ? { ...TransitionPresets.ModalPresentationIOS }
    : {
        ...TransitionPresets.DefaultTransition,
        cardOverlayEnabled: false,
      }),
};

const RootStack = () => {
  return (
    <NavigationContainer>
      <StatusBar barStyle="dark-content" translucent={false} hidden={false} />
      <Stack.Navigator screenOptions={{ ...noHeader }}>
        <Stack.Screen name={ROUTES.MAIN} component={Home} />
        <Stack.Group screenOptions={modalScreenOptions}>
          <Stack.Screen
            name={ROUTES.VISA_APP}
            component={VisaApplicationStack}
          />
        </Stack.Group>
        <Stack.Screen name={ROUTES.PROFILE} component={ProfileStack} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default React.memo(RootStack);
