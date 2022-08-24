import React from 'react';
import { Card } from 'components/general/Layout/Layout';
import { Title } from 'components/general/Typography/Typography';
import { Entypo } from '@expo/vector-icons';
import { Linking } from 'react-native';
import { LinkWrapper } from '../ProfileLinks/ProfileLinks.styled';

const externalLink = (type, value) => {
  const typeValue = type === 'email' ? `mailTo:${value}` : `tel:${value}`;
  Linking.openURL(typeValue).catch(error => {
    console.error('Failed opening page because:', error);
    alert('Failed to open page');
  });
};

export const SocialMediaLinks = () => {
  return (
    <Card>
      <LinkWrapper onPress={() => externalLink('phone', '+49 030 27578642')}>
        <Title>Visit us on Instagram</Title>
        <Entypo name="instagram" size={24} color="black" />
      </LinkWrapper>
      <LinkWrapper onPress={() => externalLink('phone', '+49 170 8 90 8 770')}>
        <Title>Visit us on Facebook</Title>
        <Entypo name="facebook" size={24} color="black" />
      </LinkWrapper>
    </Card>
  );
};
