import React from 'react';
import { View, Dimensions } from 'react-native';
import { Text } from 'react-native-paper';
import { TouchableIconCardOpacity } from '../Layout/Layout';

const { width } = Dimensions.get('window');

export const TouchableIconCard = ({ title, description, style, onPress }) => {
  return (
    <TouchableIconCardOpacity
      screenWidth={width}
      style={style}
      onPress={onPress}
    >
      <View style={{ flex: 1, paddingRight: 15 }}>
        <Text variant="labelLarge">{title}</Text>
        <Text variant="bodyLarge">{description}</Text>
      </View>
    </TouchableIconCardOpacity>
  );
};
