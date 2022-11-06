import React from 'react';

import { ROUTES } from 'res/constants/routes';
import { VisaStarLogo } from 'assets/images';
import {
  HeaderLogo,
  StyledBackIcon,
  StyledHeaderWrapper,
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
  const onProfileHandler = () => {
    navigation.navigate(ROUTES.PROFILE);
  };

  if (isMain) {
    return (
      <StyledHeaderWrapper>
        <HeaderLogo source={VisaStarLogo} />
        <StyledTouchableOpacity onPress={onProfileHandler}>
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
    </StyledHeaderWrapper>
  );
};
