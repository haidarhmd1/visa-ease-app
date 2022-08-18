import React from 'react';
import { View } from 'react-native';
import { themeStyle } from 'styles';
import { Title } from '../Typography/Typography';

export const SectionHeader = ({ title }) => {
  return (
    <View>
      <Title style={themeStyle.sectionTitle}>{title}</Title>
    </View>
  );
};
