import React from 'react';
import { View } from 'react-native';
import { StyledImageBackground } from './ImageSlider.styled';
import { VisaStarHeroImage } from 'assets/images';

export const ImageSlider = () => {
    return (
        <View>
            <StyledImageBackground
                source={VisaStarHeroImage}
                resizeMode='cover'
            />
        </View>
    );
};
