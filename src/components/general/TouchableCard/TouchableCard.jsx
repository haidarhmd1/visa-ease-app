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
  console.log('backgroundImage', backgroundImage);
  return (
    <TouchableCardOpacity onPress={onPress}>
      <StyledImage
        style={{ backgroundColor: 'lightgrey' }}
        source={{ uri: backgroundImage }}
      />
      <TextWrapper>
        <View style={{ flex: 1, paddingRight: 15 }}>
          <StyledTitleBold>{title}</StyledTitleBold>
          <StyledBodyText>{description}</StyledBodyText>
        </View>
        <StyledRightCircle name="arrow-forward-outlines" size={24} />
      </TextWrapper>
    </TouchableCardOpacity>
  );
};
