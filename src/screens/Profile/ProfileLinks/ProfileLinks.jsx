import React from 'react';
import { Card } from 'components/general/Layout/Layout';
import { Title } from 'components/general/Typography/Typography';
import { Octicons } from '@expo/vector-icons';
import { Linking } from 'react-native';
import {
  FAQ,
  LEGALISIERUNG,
  NEWS,
  PREISE,
  TRANSLATION,
  VERSAND,
  VIP_TOUREN,
} from 'res/constants/links';
import { LinkWrapper } from './ProfileLinks.styled';

const externalLink = url => {
  Linking.openURL(url).catch(error => {
    console.error('Failed opening page because:', error);
    alert('Failed to open page');
  });
};

export const ProfileLinks = () => {
  return (
    <Card>
      <LinkWrapper onPress={() => externalLink(FAQ)}>
        <Title>FAQ</Title>
        <Octicons name="link" size={24} color="black" />
      </LinkWrapper>
      <LinkWrapper onPress={() => externalLink(NEWS)}>
        <Title>News</Title>
        <Octicons name="link" size={24} color="black" />
      </LinkWrapper>
      <LinkWrapper onPress={() => externalLink(VIP_TOUREN)}>
        <Title>VIP Touren</Title>
        <Octicons name="link" size={24} color="black" />
      </LinkWrapper>
      <LinkWrapper onPress={() => externalLink(VERSAND)}>
        <Title>Versand</Title>
        <Octicons name="link" size={24} color="black" />
      </LinkWrapper>
      <LinkWrapper onPress={() => externalLink(PREISE)}>
        <Title>Preise</Title>
        <Octicons name="link" size={24} color="black" />
      </LinkWrapper>
      <LinkWrapper onPress={() => externalLink(TRANSLATION)}>
        <Title>Übersetzungen</Title>
        <Octicons name="link" size={24} color="black" />
      </LinkWrapper>
      <LinkWrapper onPress={() => externalLink(LEGALISIERUNG)}>
        <Title>Legalisierung</Title>
        <Octicons name="link" size={24} color="black" />
      </LinkWrapper>
    </Card>
  );
};
