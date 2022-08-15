import React from 'react';

import { ROUTES } from 'res/constants/routes';
import { VisaStarLogo } from 'assets/images';
import { View } from 'react-native';
import {
  HeaderLogo,
  StyledBackIcon,
  StyledHeaderWrapper,
  StyledSettingsIcon,
  StyledText,
  StyledTouchableOpacity,
  StyledUserIcon,
} from './Header.styled';

export const Header = ({
  goBack = () => {},
  title,
  navigation,
  isMain = false,
}) => {
  const profile = () => {
    navigation.navigate(ROUTES.PROFILE);
  };

  if (isMain) {
    return (
      <StyledHeaderWrapper>
        <StyledTouchableOpacity onPress={() => console.log(1)}>
          <StyledSettingsIcon name="settings" size={24} />
        </StyledTouchableOpacity>
        <HeaderLogo source={VisaStarLogo} />
        <StyledTouchableOpacity onPress={profile}>
          <StyledUserIcon name="user" size={24} />
        </StyledTouchableOpacity>
      </StyledHeaderWrapper>
    );
  }

  return (
    <StyledHeaderWrapper>
      <StyledTouchableOpacity onPress={goBack}>
        <StyledBackIcon name="back" size={24} />
      </StyledTouchableOpacity>
      <StyledText>{title}</StyledText>
      <StyledTouchableOpacity onPress={profile}>
        <StyledUserIcon name="user" size={24} />
      </StyledTouchableOpacity>
    </StyledHeaderWrapper>
  );
};
