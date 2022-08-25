import React from 'react';
import { Card } from 'components/general/Layout/Layout';
import { Title } from 'components/general/Typography/Typography';
import { Entypo, Fontisto } from '@expo/vector-icons';
import { Linking } from 'react-native';
import { LinkWrapper } from '../AccountLinks/AccountLinks.styled';

const externalLink = (type, value) => {
  const typeValue = type === 'email' ? `mailTo:${value}` : `tel:${value}`;
  Linking.openURL(typeValue).catch(error => {
    console.error('Failed opening page because:', error);
    alert('Failed to open page');
  });
};

export const ContactLinks = () => {
  return (
    <Card>
      <LinkWrapper onPress={() => externalLink('phone', '+49 030 27578642')}>
        <Title>+49 030 27578642</Title>
        <Entypo name="phone" size={24} color="black" />
      </LinkWrapper>
      <LinkWrapper onPress={() => externalLink('phone', '+49 170 8 90 8 770')}>
        <Title>+49 170 8 90 8 770</Title>
        <Fontisto name="mobile" size={24} color="black" />
      </LinkWrapper>
      <LinkWrapper
        onPress={() => externalLink('email', 'contactus@visastar.de')}
      >
        <Title>contactus@visastar.de</Title>
        <Entypo name="mail" size={24} color="black" />
      </LinkWrapper>
    </Card>
  );
};
