import React from 'react';
import { StyledCard } from 'components/general/Layout/Layout';
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
import { List } from 'react-native-paper';

const RightContent = properties => <List.Icon {...properties} icon="link" />;

const externalLink = url => {
  Linking.openURL(url).catch(error => {
    console.error('Failed opening page because:', error);
    alert('Failed to open page');
  });
};

export const AccountLinks = () => {
  return (
    <StyledCard>
      <List.Section>
        <List.Subheader>External Links</List.Subheader>
        <List.Item
          onPress={() => externalLink(FAQ)}
          title="FAQ"
          right={RightContent}
        />
        <List.Item
          onPress={() => externalLink(NEWS)}
          title="News"
          right={RightContent}
        />
        <List.Item
          onPress={() => externalLink(VIP_TOUREN)}
          title="VIP Touren"
          right={RightContent}
        />
        <List.Item
          onPress={() => externalLink(VERSAND)}
          title="Versand"
          right={RightContent}
        />
        <List.Item
          onPress={() => externalLink(PREISE)}
          title="Preise"
          right={RightContent}
        />
        <List.Item
          onPress={() => externalLink(TRANSLATION)}
          title="Übersetzungen"
          right={RightContent}
        />
        <List.Item
          onPress={() => externalLink(LEGALISIERUNG)}
          title="Legalisierung"
          right={RightContent}
        />
      </List.Section>
    </StyledCard>
  );
};
