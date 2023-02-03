import React from 'react';
import { useIntl } from 'react-intl';
import { View } from 'react-native';

import Slideshow from 'react-native-image-slider-show';

const dataSource = [
  {
    title: 'VISA SERVICE',
    caption: 'Your Visa are a couple of steps away!',
    url:
      'https://visastar.de/wp-content/uploads/brizy/8/assets/images/iW=991&iH=1020&oX=91&oY=345&cW=870&cH=268/element5-digital-uE2T1tCFsn8-unsplash-1-scaled.jpg',
  },
  {
    title: 'VIP TOUREN',
    caption: 'Discover our VIP TOURS',
    url:
      'http://ktimorocco.com/wp-content/uploads/2016/11/morocco-123978-1030x685.jpg',
  },
  {
    title: 'LEGALISIERUNG',
    caption: 'Legalize your paper here!',
    url:
      'https://visastar.de/wp-content/uploads/brizy/16/assets/images/iW=160&iH=217&oX=0&oY=48&cW=160&cH=160/administrate-4916652_1280.jpg',
  },
];

export const Header = () => {
  const intl = useIntl();

  return (
    <View style={{ borderRadius: 8, overflow: 'hidden' }}>
      <Slideshow
        scrollEnabled
        overlay
        titleStyle={{ fontSize: 21, fontWeight: 'bold', color: 'white' }}
        captionStyle={{ fontSize: 16, color: 'white' }}
        arrowSize={0}
        dataSource={dataSource}
      />
    </View>
  );
};
