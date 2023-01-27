import React from 'react';
import { View } from 'react-native';
import { useIntl } from 'react-intl';
import { ROUTES } from 'res/constants/routes';
import { TouchableIconCard } from 'components/general/TouchableCard/TouchableCard';
import { Text } from 'react-native-paper';

const mainServices = [
  {
    id: 1,
    title: 'visastar.home.services.visa',
    route: ROUTES.VISA_HOME,
    icon: '',
  },
];

const services = [
  {
    id: 2,
    title: 'visastar.home.services.legalization',
    route: ROUTES.LEGALIZATION,
    icon: '',
  },
  {
    id: 3,
    title: 'Übersetzungen',
    route: ROUTES.TRANSLATION,
    icon: '',
  },
  {
    id: 4,
    title: 'Preise',
    route: ROUTES.RATES,
    icon: '',
  },
];

export const ServiceItems = ({ navigation }) => {
  const intl = useIntl();

  const onPressViaHandler = route => {
    navigation.navigate(route);
  };

  return (
    <View style={{ marginTop: 21, marginBottom: 21 }}>
      <Text variant="titleLarge" style={{ paddingBottom: 16 }}>
        Main Services
      </Text>
      <View
        style={{
          flexWrap: 'wrap',
          flexDirection: 'row',
          justifyContent: 'space-between',
        }}
      >
        {mainServices.map(({ id, title, route }) => (
          <TouchableIconCard
            key={id}
            title={intl.formatMessage({ id: title })}
            onPress={() => onPressViaHandler(route)}
          />
        ))}
      </View>

      <Text variant="titleLarge" style={{ paddingBottom: 16 }}>
        Other{' '}
        {intl.formatMessage({
          id: 'visastar.home.services.headline',
        })}
      </Text>
      <View
        style={{
          flexWrap: 'wrap',
          flexDirection: 'row',
          justifyContent: 'space-between',
        }}
      >
        {services.map(({ id, title, route }) => (
          <TouchableIconCard
            key={id}
            title={intl.formatMessage({ id: title })}
            onPress={() => onPressViaHandler(route)}
          />
        ))}
      </View>
    </View>
  );
};
