import React from 'react';

import { createStackNavigator } from '@react-navigation/stack';
import { ROUTES } from 'res/constants/routes';
import { Home, VisaApplication } from 'screens';
import { StatusBar } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { modalScreenOptions, noHeader } from 'utils/screenOptions';
import { Visa } from 'screens/Visa';
import { ProfileStack } from './AccountStack';
// import { VisaApplicationStack } from './VisaApplicationStack';

const Stack = createStackNavigator();

const RootStack = () => {
  return (
    <NavigationContainer>
      <StatusBar barStyle="dark-content" translucent={false} hidden={false} />
      <Stack.Navigator screenOptions={{ ...noHeader }}>
        <Stack.Screen name={ROUTES.MAIN} component={Home} />
        <Stack.Screen name={ROUTES.VISA_HOME} component={Visa} />
        <Stack.Group screenOptions={modalScreenOptions}>
          <Stack.Screen name={ROUTES.VISA_APP} component={VisaApplication} />
        </Stack.Group>
        <Stack.Screen name={ROUTES.PROFILE} component={ProfileStack} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default React.memo(RootStack);
