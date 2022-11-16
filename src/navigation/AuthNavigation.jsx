import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { ROUTES } from 'res/constants/routes';
import { Login } from 'screens/Auth/Login';
import { Registration } from 'screens/Auth/Registration';

const Stack = createNativeStackNavigator();

const AuthNavigationRaw = () => {
  return (
    <Stack.Navigator initialRouteName={ROUTES.LOGIN}>
      <Stack.Screen name={ROUTES.LOGIN} component={Login} />
      <Stack.Screen name={ROUTES.REGISTRATION} component={Registration} />
    </Stack.Navigator>
  );
};

export const AuthNavigation = React.memo(AuthNavigationRaw);
