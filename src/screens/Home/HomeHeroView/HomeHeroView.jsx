import React from 'react';
import { PalmImage } from 'assets/images';
import { ImageBackground, View } from 'react-native';
import { Text } from 'react-native-paper';
import { ROUTES } from 'helpers/constants/routes';
import navigation from 'navigation';
import { useIntl } from 'react-intl';
import { MyTheme } from 'styles/theme/theme.extended';

export const HomeHeroView = () => {
  const { formatMessage } = useIntl();
  const onPressHandler = route => {
    navigation.navigate(route);
  };

  return (
    <View
      onPress={() => {
        onPressHandler(ROUTES.VISA_HOME);
      }}
      style={{
        height: 175,
        position: 'relative',
        borderBottomEndRadius: 24,
        borderBottomStartRadius: 24,
        overflow: 'hidden',
        backgroundColor: MyTheme.colors.black,
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
            color: MyTheme.colors.white,
            fontWeight: 'bold',
          }}
        >
          VisaEase
        </Text>
        <Text
          variant="bodyMedium"
          style={{
            color: MyTheme.colors.white,
          }}
        >
          {formatMessage({ id: 'screen.main.startVisaJourney' })}
        </Text>
      </View>
    </View>
  );
};
