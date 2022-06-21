import React from 'react';
import { View } from 'react-native';
import { VisaStarHeroImage } from 'assets/images';
import { StyledImageBackground } from './ImageSlider.styled';

export const ImageSlider = () => {
  return (
    <View>
      <StyledImageBackground source={VisaStarHeroImage} resizeMode="cover" />
    </View>
  );
};
