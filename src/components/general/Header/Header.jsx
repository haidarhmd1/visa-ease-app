import React from 'react';

import { AntDesign, SimpleLineIcons } from '@expo/vector-icons';
import { ROUTES } from 'res/constants/routes';
import { Image } from 'react-native';
import { VisaStarLogo } from 'assets/images';
import {
  HeaderLogo,
  StyledHeaderWrapper,
  StyledText,
  StyledTouchableOpacity,
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
          <SimpleLineIcons name="settings" size={24} color="black" />
        </StyledTouchableOpacity>
        <HeaderLogo source={VisaStarLogo} />
        <StyledTouchableOpacity onPress={profile}>
          <AntDesign name="user" size={24} color="black" />
        </StyledTouchableOpacity>
      </StyledHeaderWrapper>
    );
  }

  return (
    <StyledHeaderWrapper>
      <StyledTouchableOpacity onPress={goBack}>
        <AntDesign name="back" size={24} color="black" />
      </StyledTouchableOpacity>
      <StyledText>{title}</StyledText>
      <StyledTouchableOpacity onPress={profile}>
        <AntDesign name="user" size={24} color="black" />
      </StyledTouchableOpacity>
    </StyledHeaderWrapper>
  );
};
