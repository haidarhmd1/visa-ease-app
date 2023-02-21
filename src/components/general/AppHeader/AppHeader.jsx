import React from 'react';

import { ROUTES } from 'res/constants/routes';
import { VisaStarLogo } from 'assets/images';
import { Appbar, Badge, Text } from 'react-native-paper';
import { View } from 'react-native';
import { HeaderLogo } from './AppHeader.styled';
import { ModalSheet } from '../ModalSheet';

export const AppHeader = ({
  goBack = () => {},
  openNotification = () => {},
  title,
  navigation,
  role,
}) => {
  const onProfileHandler = () => {
    navigation.navigate(ROUTES.ACCOUNT);
  };

  if (role === 'main') {
    return (
      <Appbar.Header
        elevated
        statusBarHeight={0}
        style={{ backgroundColor: 'white' }}
      >
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
          <View style={{ position: 'relative' }}>
            <Appbar.Action icon="bell-outline" onPress={openNotification} />
            <Badge style={{ position: 'absolute' }}>3</Badge>
          </View>
          <Appbar.Action icon="cog-outline" onPress={onProfileHandler} />
        </View>
      </Appbar.Header>
    );
  }

  return (
    <Appbar.Header
      elevated
      statusBarHeight={0}
      style={{ backgroundColor: 'white' }}
    >
      <Appbar.Action icon="arrow-left" onPress={goBack} />
      <Appbar.Content title={<Text variant="titleMedium">{title}</Text>} />
    </Appbar.Header>
  );
};
