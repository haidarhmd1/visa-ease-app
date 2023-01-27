import React from 'react';
import { useIntl } from 'react-intl';
import { View } from 'react-native';

import { StyledCard } from 'components/general/Layout/Layout';
import { Divider, Text } from 'react-native-paper';

export const Header = () => {
  const intl = useIntl();

  return (
    <View>
      <StyledCard>
        <StyledCard.Content>
          <Text variant="headlineLarge">
            {intl.formatMessage({ id: 'visastar.home.welcome.title' })}
          </Text>
          <Divider style={{ marginTop: 16, marginBottom: 16 }} />
          <Text>
            {intl.formatMessage({ id: 'visastar.home.welcome.description' })}
          </Text>
        </StyledCard.Content>
      </StyledCard>
    </View>
  );
};
