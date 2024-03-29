import React from 'react';
import { View } from 'react-native';
import { Avatar, Text } from 'react-native-paper';
import { MyTheme } from 'styles/theme/theme.extended';

export const IconView = ({ icon, size, title }) => {
  return (
    <View
      style={{
        alignItems: 'center',
        width: '48%',
        height: 64,
        marginBottom: 22,
      }}
    >
      <Avatar.Icon
        icon={icon}
        size={size}
        style={{ backgroundColor: MyTheme.colors.primaryBrand }}
      />
      <Text variant="labelLarge" style={{ textAlign: 'center', marginTop: 8 }}>
        {title}
      </Text>
    </View>
  );
};
