import React from 'react';
import { ImageBackground, TouchableOpacity, View } from 'react-native';
import { Text } from 'react-native-paper';

export const VisaApplyButton = ({
  setVisible,
  imageSrc,
  height = 150,
  title,
  description,
}) => {
  return (
    <TouchableOpacity onPress={() => setVisible(true)}>
      <View
        style={{
          height,
          marginBottom: 24,
          position: 'relative',
          borderRadius: 14,
          overflow: 'hidden',
          backgroundColor: 'white',
          borderStyle: 'solid',
          borderColor: 'lightgrey',
          borderWidth: 2,
        }}
      >
        <ImageBackground
          source={imageSrc}
          style={{
            height,
            width: 150,
            position: 'absolute',
            right: 0,
          }}
        />
        <View
          style={{
            flex: 1,
            marginLeft: 15,
            marginBottom: 5,
            justifyContent: 'flex-end',
          }}
        >
          <Text
            variant="headlineSmall"
            style={{ color: 'black', fontWeight: 'bold' }}
          >
            {title}
          </Text>
          <Text variant="bodyMedium" style={{ color: 'black' }}>
            {description}
          </Text>
        </View>
      </View>
    </TouchableOpacity>
  );
};
