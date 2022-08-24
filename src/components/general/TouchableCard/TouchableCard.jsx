import React from 'react';
import { View } from 'react-native';
import { TouchableCardOpacity } from '../Layout/Layout';

import {
  StyledBodyText,
  StyledImage,
  StyledRightCircle,
  StyledTitleBold,
  TextWrapper,
} from './TouchableCard.styled';

export const TouchableCard = ({
  backgroundImage,
  title,
  description,
  onPress,
}) => {
  return (
    <TouchableCardOpacity onPress={onPress}>
      <StyledImage source={backgroundImage} />
      <TextWrapper>
        <View style={{ flex: 1, paddingRight: 15 }}>
          <StyledTitleBold>{title}</StyledTitleBold>
          <StyledBodyText>{description}</StyledBodyText>
        </View>
        <StyledRightCircle name="rightcircleo" size={24} />
      </TextWrapper>
    </TouchableCardOpacity>
  );
};
