import React from 'react';
import { StyledCard } from 'components/general/Layout/Layout';
import { Linking } from 'react-native';
import { List } from 'react-native-paper';

const InstagramIcon = properties => (
  <List.Icon {...properties} icon="instagram" />
);
const FacebookIcon = properties => (
  <List.Icon {...properties} icon="facebook" />
);

const externalLink = (type, value) => {
  const typeValue = type === 'email' ? `mailTo:${value}` : `tel:${value}`;
  Linking.openURL(typeValue).catch(error => {
    console.error('Failed opening page because:', error);
    alert('Failed to open page');
  });
};

export const SocialMediaLinks = () => {
  return (
    <StyledCard>
      <List.Section>
        <List.Subheader>Social Media</List.Subheader>
        <List.Item
          onPress={() => externalLink('phone', '+49 030 27578642')}
          title="Visit us on Instagram"
          right={InstagramIcon}
        />
        <List.Item
          onPress={() => externalLink('phone', '+49 170 8 90 8 770')}
          title="Visit us on Facebook"
          right={FacebookIcon}
        />
      </List.Section>
    </StyledCard>
  );
};
