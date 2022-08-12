import React from 'react';

import { createStackNavigator } from '@react-navigation/stack';
import { ROUTES } from 'res/constants/routes';
import { Home, Profile } from 'screens';
import { StatusBar } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { VisaApplicationStack } from './VisaApplicationStack';

const Stack = createStackNavigator();

const RootStack = () => {
  return (
    <NavigationContainer>
      <StatusBar barStyle="dark-content" translucent={false} hidden={false} />

      <Stack.Navigator
        initialRouteName={ROUTES.MAIN}
        screenOptions={{ headerShown: false }}
      >
        <Stack.Screen name={ROUTES.MAIN} component={Home} />
        <Stack.Group screenOptions={{ presentation: 'modal' }}>
          <Stack.Screen
            name={ROUTES.VISA_APP}
            component={VisaApplicationStack}
          />
        </Stack.Group>
        <Stack.Screen name={ROUTES.PROFILE} component={Profile} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default React.memo(RootStack);
