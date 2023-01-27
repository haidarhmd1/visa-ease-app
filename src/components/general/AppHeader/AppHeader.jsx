import React from 'react';

import { ROUTES } from 'res/constants/routes';
import { VisaStarLogo } from 'assets/images';
import { Appbar } from 'react-native-paper';
import { HeaderLogo } from './AppHeader.styled';

export const AppHeader = ({ goBack = () => {}, title, navigation, role }) => {
  const onProfileHandler = () => {
    navigation.navigate(ROUTES.PROFILE);
  };

  if (role === 'main') {
    return (
      <Appbar.Header statusBarHeight={0}>
        <Appbar.Content title={<HeaderLogo source={VisaStarLogo} />} />
        <Appbar.Action icon="account-outline" onPress={onProfileHandler} />
      </Appbar.Header>
    );
  }

  return (
    <Appbar.Header statusBarHeight={0}>
      <Appbar.BackAction onPress={goBack} />
      <Appbar.Content title={title} />
    </Appbar.Header>
  );
};
