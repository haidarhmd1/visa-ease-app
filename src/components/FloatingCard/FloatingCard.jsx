import React from 'react';
import { Dimensions, View } from 'react-native';
import { Card } from 'react-native-paper';
import { themeStyle } from 'styles';

export const FloatingCard = ({ children }) => {
  return (
    <View
      style={{
        position: 'absolute',
        top: 175,
        width: Dimensions.get('window').width,
      }}
    >
      <Card
        mode="contained"
        style={[
          themeStyle.shadow,
          {
            height: 140,
            marginLeft: 24,
            marginRight: 24,
            backgroundColor: 'white',
          },
        ]}
      >
        {children}
      </Card>
    </View>
  );
};
