import React from 'react';

import { ROUTES } from 'res/constants/routes';
import { Appbar, Text } from 'react-native-paper';
import { Dimensions, View } from 'react-native';
import { useUserStore } from 'store/zustand';

export const AppHeader = ({ goBack = () => {}, title, navigation, role }) => {
  const userInfo = useUserStore();
  const onProfileHandler = () => {
    navigation.navigate(ROUTES.ACCOUNT);
  };

  if (role === 'main') {
    return (
      <Appbar.Header statusBarHeight={0} style={{ backgroundColor: 'white' }}>
        <Text
          style={{ fontWeight: 'bold', paddingLeft: 16 }}
          variant="headlineSmall"
        >
          Hello, {userInfo.userData.fullname}
        </Text>
        <View
          style={{
            flexDirection: 'row',
            alignSelf: 'center',
            marginLeft: 'auto',
          }}
        >
          <Appbar.Action icon="cog-outline" onPress={onProfileHandler} />
        </View>
      </Appbar.Header>
    );
  }

  if (role === 'secondary') {
    return (
      <Appbar.Header
        style={{
          backgroundColor: 'transparent',
          position: 'absolute',
          top: 0,
          width: Dimensions.get('window').width,
          zIndex: 1,
        }}
      >
        <Appbar.Action
          icon="arrow-left"
          onPress={goBack}
          style={{ backgroundColor: 'white' }}
        />
        <Appbar.Content
          title={title}
          color="white"
          titleStyle={{
            color: 'white',
          }}
        />
      </Appbar.Header>
    );
  }

  return (
    <Appbar.Header
      statusBarHeight={0}
      style={{
        backgroundColor: 'white',
      }}
    >
      <Appbar.Action icon="arrow-left" onPress={goBack} />
      <Appbar.Content title={title} />
    </Appbar.Header>
  );
};
