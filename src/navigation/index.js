import React from 'react';

import { StatusBar } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { useSelector } from 'react-redux';
import { selectIsLoggedIn } from 'redux/slices/authSlice';
import { MainStack } from './MainStack';
import { AuthStack } from './AuthStack';

const RootStack = () => {
  const isLoggedIn = useSelector(selectIsLoggedIn);

  return (
    <NavigationContainer>
      <StatusBar barStyle="dark-content" translucent={false} hidden={false} />
      {isLoggedIn ? <MainStack /> : <AuthStack />}
    </NavigationContainer>
  );
};

export default React.memo(RootStack);
