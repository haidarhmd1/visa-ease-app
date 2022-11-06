import React from 'react';
import { useIntl } from 'react-intl';

import { View } from 'react-native';
import { TouchableCard } from 'components/general/TouchableCard';
import { ROUTES } from 'res/constants/routes';

export const VisumApplyCard = ({ visaCountries, navigation }) => {
  const intl = useIntl();

  const onPressHandler = async () => {
    navigation.navigate(ROUTES.VISA_APP);
  };

  return (
    <View>
      {visaCountries?.map(vCountry => {
        const imageUrl = vCountry.better_featured_image.source_url;
        return (
          <TouchableCard
            key={vCountry.id}
            backgroundImage={imageUrl}
            title={vCountry.title.rendered}
            description={intl.formatMessage({
              id: 'home.visa.applyCard.description',
            })}
            onPress={onPressHandler}
          />
        );
      })}
    </View>
  );
};
