import React, { useEffect, useState } from 'react';

import * as SecureStore from 'expo-secure-store';

import { StatusBar } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { useAuthStore } from 'store/zustand';
import { USER_DATA } from 'res/constants/global';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { noHeader } from 'utils/screenOptions';
import { MainStack } from './MainStack';
import { AuthStack } from './AuthStack';

const RootStackScreen = createNativeStackNavigator();

const RootStack = () => {
  const [isUserLoggedIn, setIsUserLoggedIn] = useState(false);
  const user = useAuthStore(state => state.user);

  useEffect(() => {
    SecureStore.getItemAsync(USER_DATA)
      .then(response => {
        setIsUserLoggedIn(JSON.parse(response).isLoggedIn);
      })
      .catch(() => {
        setIsUserLoggedIn(false);
      });
  }, [user]);

  return (
    <NavigationContainer>
      <StatusBar barStyle="dark-content" translucent={false} hidden={false} />
      <RootStackScreen.Navigator
        screenOptions={{
          ...noHeader,
        }}
      >
        {isUserLoggedIn ? (
          <RootStackScreen.Screen name="MAIN" component={MainStack} />
        ) : (
          <RootStackScreen.Screen name="AUTHENTICATION" component={AuthStack} />
        )}
      </RootStackScreen.Navigator>
    </NavigationContainer>
  );
};

export default React.memo(RootStack);
