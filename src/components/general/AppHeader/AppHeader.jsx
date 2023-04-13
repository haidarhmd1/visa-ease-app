import React from 'react';

import { ROUTES } from 'res/constants/routes';
import { Appbar, Text } from 'react-native-paper';
import { View } from 'react-native';

export const AppHeader = ({ goBack = () => {}, title, navigation, role }) => {
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
          Hello, Haidar
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

  return (
    <Appbar.Header statusBarHeight={0} style={{ backgroundColor: 'white' }}>
      <Appbar.Action icon="arrow-left" onPress={goBack} />
      <Appbar.Content title={title} />
    </Appbar.Header>
  );
};
