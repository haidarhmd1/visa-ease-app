import React from 'react';
import { View, Dimensions } from 'react-native';
import { TouchableIconCardOpacity } from '../Layout/Layout';

import { StyledBodyText, StyledTitleBold } from './TouchableCard.styled';

const { width } = Dimensions.get('window');

export const TouchableIconCard = ({ title, description, onPress }) => {
  return (
    <TouchableIconCardOpacity screenWidth={width} onPress={onPress}>
      <View style={{ flex: 1, paddingRight: 15 }}>
        <StyledTitleBold>{title}</StyledTitleBold>
        <StyledBodyText>{description}</StyledBodyText>
      </View>
    </TouchableIconCardOpacity>
  );
};
