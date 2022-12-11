import React from 'react';
import { View, Dimensions } from 'react-native';
import {
  TouchableCardOpacity,
  TouchableIconCardOpacity,
} from '../Layout/Layout';

import {
  StyledBodyText,
  StyledImage,
  StyledRightCircle,
  StyledTitleBold,
  TextWrapper,
} from './TouchableCard.styled';

const { width } = Dimensions.get('window');

export const TouchableCard = ({
  backgroundImage,
  title,
  description,
  onPress,
}) => {
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
        <StyledRightCircle name="rightcircleo" size={24} />
      </TextWrapper>
    </TouchableCardOpacity>
  );
};

export const TouchableIconCard = ({ title, description, onPress }) => {
  return (
    <TouchableIconCardOpacity screenWidth={width} onPress={onPress}>
      <TextWrapper>
        <View style={{ flex: 1, paddingRight: 15 }}>
          <StyledTitleBold>{title}</StyledTitleBold>
          <StyledBodyText>{description}</StyledBodyText>
        </View>
      </TextWrapper>
    </TouchableIconCardOpacity>
  );
};
