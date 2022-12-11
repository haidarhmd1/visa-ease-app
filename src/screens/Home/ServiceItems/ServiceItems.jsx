import React from 'react';
import { View } from 'react-native';
import { useIntl } from 'react-intl';
import { ROUTES } from 'res/constants/routes';
import { TouchableIconCard } from 'components/general/TouchableCard/TouchableCard';
import { SectionHeader } from 'components/general/SectionHeader';

const services = [
  {
    id: 1,
    title: 'visastar.home.services.visa',
    route: ROUTES.VISA_HOME,
    icon: '',
  },
  {
    id: 2,
    title: 'visastar.home.services.legalization',
    route: ROUTES.VISA_HOME,
    icon: '',
  },
];

export const ServiceItems = ({ navigation }) => {
  const intl = useIntl();

  const onPressViaHandler = route => {
    navigation.navigate(route);
  };

  return (
    <>
      <SectionHeader
        title={intl.formatMessage({
          id: 'visastar.home.services.headline',
        })}
      />
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
    </>
  );
};
