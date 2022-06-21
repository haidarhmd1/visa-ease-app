import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import { ROUTES } from 'res/constants/routes';
import { Profile, VisaApplication } from 'screens';
import { MainScreenTabNavigation } from './MainScreenTabNavigation';

const { Navigator, Screen } = createNativeStackNavigator();

export const Navigation = () => {
  return (
    <Navigator initialRouteName={ROUTES.MAIN}>
      <Screen name="test" component={MainScreenTabNavigation} />
      <Screen name={ROUTES.VISA_APP} component={VisaApplication} />
      <Screen name={ROUTES.PROFILE} component={Profile} />
    </Navigator>
  );
};
