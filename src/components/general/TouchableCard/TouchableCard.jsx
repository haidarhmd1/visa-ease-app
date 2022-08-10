import React from 'react';
import { SubHeadline } from 'components/general/Typography/Typography';
import {
  StyledImage,
  StyledTouchableOpacity,
  TextWrapper,
} from './TouchableCard.styled';

export const TouchableCard = ({
  backgroundImage,
  Title,
  isFullWidth = true,
  onPress,
}) => {
  return (
    <StyledTouchableOpacity isFullWidth onPress={onPress}>
      <StyledImage source={backgroundImage} />
      <TextWrapper>
        <SubHeadline>{Title}</SubHeadline>
      </TextWrapper>
    </StyledTouchableOpacity>
  );
};
