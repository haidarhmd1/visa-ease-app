import React, { useEffect, useState } from 'react';

import * as SecureStore from 'expo-secure-store';

import { StatusBar } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { useAuthStore } from 'store/zustand';
import { USER_DATA } from 'res/constants/global';
import { MainStack } from './MainStack';
import { AuthStack } from './AuthStack';

const RootStack = () => {
  const [isUserLoggedIn, setIsUserLoggedIn] = useState(false);
  const user = useAuthStore(state => state.user);

  useEffect(() => {
    SecureStore.getItemAsync(USER_DATA)
      .then(response => {
        setIsUserLoggedIn(JSON.parse(response).isLoggedIn);
      })
      .catch(() => setIsUserLoggedIn(false));
  }, [user]);

  return (
    <NavigationContainer>
      <StatusBar barStyle="dark-content" translucent={false} hidden={false} />
      {isUserLoggedIn ? <MainStack /> : <AuthStack />}
    </NavigationContainer>
  );
};

export default React.memo(RootStack);
