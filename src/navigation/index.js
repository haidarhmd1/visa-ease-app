import React from 'react';

import { StatusBar } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { useAuthenticationStore } from 'store/zustand';
import { MainStack } from './MainStack';
import { AuthStack } from './AuthStack';

const RootStack = () => {
  const isLoggedIn = useAuthenticationStore(state => state.isLoggedIn);
  return (
    <NavigationContainer>
      <StatusBar barStyle="dark-content" translucent={false} hidden={false} />
      {isLoggedIn ? <MainStack /> : <AuthStack />}
    </NavigationContainer>
  );
};

export default React.memo(RootStack);
