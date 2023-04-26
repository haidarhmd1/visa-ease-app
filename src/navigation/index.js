import React from 'react';

import { StatusBar } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { useAuthStore } from 'store/zustand';
import { MainStack } from './MainStack';
import { AuthStack } from './AuthStack';

const RootStack = () => {
  const user = useAuthStore(state => state.user);
  return (
    <NavigationContainer>
      <StatusBar barStyle="dark-content" translucent={false} hidden={false} />
      {user.isLoggedIn ? <MainStack /> : <AuthStack />}
    </NavigationContainer>
  );
};

export default React.memo(RootStack);
