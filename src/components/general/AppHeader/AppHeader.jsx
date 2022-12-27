import React from 'react';

import { ROUTES } from 'res/constants/routes';
import { VisaStarLogo } from 'assets/images';
import { FontAwesome5, Ionicons } from '@expo/vector-icons';
import {
  HeaderLogo,
  StyledHeaderWrapper,
  StyledText,
  StyledTouchableOpacity,
} from './AppHeader.styled';

export const AppHeader = ({ goBack = () => {}, title, navigation, role }) => {
  const onProfileHandler = () => {
    navigation.navigate(ROUTES.PROFILE);
  };

  if (role === 'main') {
    return (
      <StyledHeaderWrapper>
        <HeaderLogo source={VisaStarLogo} />
        <StyledTouchableOpacity onPress={onProfileHandler}>
          <FontAwesome5 name="user" size={24} color="black" />
        </StyledTouchableOpacity>
      </StyledHeaderWrapper>
    );
  }

  return (
    <StyledHeaderWrapper>
      <StyledTouchableOpacity onPress={goBack}>
        <Ionicons name="ios-arrow-back-sharp" size={24} color="black" />
      </StyledTouchableOpacity>
      <StyledText>{title}</StyledText>
    </StyledHeaderWrapper>
  );
};
