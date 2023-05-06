/* eslint-disable sonarjs/no-identical-functions */
import React from 'react';
import {
  View,
  ImageBackground,
  Dimensions,
  FlatList,
  TouchableWithoutFeedback,
} from 'react-native';
import { useIntl } from 'react-intl';
import { ROUTES } from 'res/constants/routes';
import { List, Text } from 'react-native-paper';
import { PriceTag } from 'assets/icons';
import { colorPalette } from 'styles/theme/theme.extended';
import { VisaStatus } from 'components/VisaStatus';

const visaCountries = [
  { id: 1, title: 'UAE', image: '' },
  { id: 2, title: 'China', image: '' },
  { id: 3, title: 'Cuba', image: '' },
];

const services = [
  {
    id: 1,
    title: 'visastar.home.services.visa',
    route: ROUTES.VISA_HOME,
    icon: 'file-document-multiple-outline',
  },
  {
    id: 2,
    title: 'visastar.home.services.legalization',
    route: ROUTES.LEGALIZATION,
    icon: 'file-document-multiple-outline',
  },
  {
    id: 3,
    title: 'visastar.home.services.translations',
    route: ROUTES.TRANSLATION,
    icon: 'translate',
  },
  {
    id: 4,
    title: 'visastar.home.services.prices',
    route: ROUTES.RATES,
    icon: PriceTag,
  },
];

export const ServiceItems = ({ navigation }) => {
  const { formatMessage } = useIntl();

  const onPressRouteNavigationHandler = route => {
    navigation.navigate(route);
  };

  const onPressHandler = id => {
    navigation.navigate(ROUTES.VISA_APP, {
      id,
    });
  };

  return (
    <View style={{ marginBottom: 21 }}>
      <Text variant="titleLarge" style={{ paddingBottom: 16 }}>
        {formatMessage({ id: 'screen.main.ourServices' })}
      </Text>

      <FlatList
        horizontal
        data={services}
        showsHorizontalScrollIndicator={false}
        style={{
          paddingBottom: 25,
        }}
        renderItem={({ item }) => (
          <TouchableWithoutFeedback
            screenWidth={Dimensions.get('window')}
            onPress={() => {
              onPressRouteNavigationHandler(item.route);
            }}
          >
            <View
              style={{
                flex: 1,
                padding: 5,
                height: 75,
                width: 120,
                marginRight: 10,
                marginLeft: 10,
                borderRadius: 14,
                backgroundColor: colorPalette.gray.g100,
              }}
            >
              <List.Icon
                icon={item.icon}
                style={{
                  justifyContent: 'center',
                  marginTop: 7,
                }}
              />
              <Text
                variant="labelMedium"
                style={{ marginTop: 'auto', textAlign: 'center' }}
              >
                {formatMessage({
                  id: item.title,
                })}
              </Text>
            </View>
          </TouchableWithoutFeedback>
        )}
        keyExtractor={item => item.id}
      />
      <View>
        <Text variant="titleLarge" style={{ paddingBottom: 16 }}>
          {formatMessage({ id: 'screen.main.topVisaServices' })}
        </Text>
        <FlatList
          horizontal
          data={visaCountries}
          showsHorizontalScrollIndicator={false}
          renderItem={({ item }) => (
            <TouchableWithoutFeedback
              onPress={() => {
                onPressHandler(item.id);
              }}
            >
              <View
                style={{
                  height: 150,
                  width: 250,
                  marginRight: 20,
                  position: 'relative',
                  borderRadius: 14,
                  overflow: 'hidden',
                  backgroundColor: 'black',
                }}
              >
                <ImageBackground
                  source={{ uri: 'https://picsum.photos/700' }}
                  style={{
                    height: 150,
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
                    style={{ color: 'white', fontWeight: 'bold' }}
                  >
                    {item.title}
                  </Text>
                  <Text variant="bodyMedium" style={{ color: 'white' }}>
                    {formatMessage({ id: 'screen.main.startVisaJourney' })}
                  </Text>
                </View>
              </View>
            </TouchableWithoutFeedback>
          )}
          keyExtractor={item => item.id}
        />
      </View>
    </View>
  );
};
