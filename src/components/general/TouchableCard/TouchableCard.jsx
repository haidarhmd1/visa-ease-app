import React from 'react';
import { View } from 'react-native';

import {
  StyledBodyText,
  StyledImage,
  StyledRightCircle,
  StyledTitleBold,
  StyledTouchableOpacity,
  TextWrapper,
} from './TouchableCard.styled';

export const TouchableCard = ({
  backgroundImage,
  Title: ComponentTitle,
  isFullWidth = true,
  onPress,
}) => {
  return (
    <StyledTouchableOpacity isFullWidth onPress={onPress}>
      <StyledImage source={backgroundImage} />
      <TextWrapper>
        <View style={{ flex: 1 }}>
          <StyledTitleBold>{ComponentTitle}</StyledTitleBold>
          <StyledBodyText>
            Apply for a Visa in either Express or Standard
          </StyledBodyText>
        </View>
        <StyledRightCircle name="rightcircleo" size={24} />
      </TextWrapper>
    </StyledTouchableOpacity>
  );
};
