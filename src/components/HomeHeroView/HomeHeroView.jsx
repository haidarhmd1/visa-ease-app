import React from 'react';
import { PalmImage } from 'assets/images';
import { ImageBackground, TouchableOpacity, View } from 'react-native';
import { Text } from 'react-native-paper';
import { ROUTES } from 'res/constants/routes';
import navigation from 'navigation';

export const HomeHeroView = () => {
  const onPressHandler = route => {
    navigation.navigate(route);
  };

  return (
    <View>
      <TouchableOpacity
        onPress={() => {
          onPressHandler(ROUTES.VISA_HOME);
        }}
        style={{
          height: 175,
          position: 'relative',
          borderBottomEndRadius: 24,
          borderBottomStartRadius: 24,
          overflow: 'hidden',
          backgroundColor: 'black',
        }}
      >
        <ImageBackground
          source={PalmImage}
          style={{
            height: 175,
            width: '100%',
            opacity: 0.7,
            position: 'absolute',
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
            style={{
              color: 'white',
              fontWeight: 'bold',
            }}
          >
            Visa
          </Text>
          <Text
            variant="bodyMedium"
            style={{
              color: 'white',
            }}
          >
            Start your Visa Journey!
          </Text>
        </View>
      </TouchableOpacity>
    </View>
  );
};
