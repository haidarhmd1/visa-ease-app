import React from 'react';

import { StatusBar } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { useAuthenticationStore } from 'store/zustand';
import { MainStack } from './MainStack';
import { AuthStack } from './AuthStack';

const isLoggedIn = true;

const RootStack = () => {
  // const isLoggedIn = useAuthenticationStore(state => state.isLoggedIn);
  // const getItem = async () => {
  //   const value = await AsyncStorage.getItem('authentication-store');
  //   console.log(JSON.parse(value).state.id);
  // };

  // useEffect(() => {
  //   getItem();
  // }, []);

  return (
    <NavigationContainer>
      <StatusBar barStyle="dark-content" translucent={false} hidden={false} />
      {isLoggedIn ? <MainStack /> : <AuthStack />}
    </NavigationContainer>
  );
};

export default React.memo(RootStack);
