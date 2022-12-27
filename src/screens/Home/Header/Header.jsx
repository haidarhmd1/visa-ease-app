import React from 'react';
import { useIntl } from 'react-intl';
import { View } from 'react-native';

import { Headline } from 'components/general/Typography/Typography';
import { Card } from 'components/general/Layout/Layout';
import { StyledSubHeadline } from './Header.styled';

export const Header = () => {
  const intl = useIntl();

  return (
    <View>
      <Card>
        <View>
          <Headline>
            {intl.formatMessage({ id: 'visastar.home.welcome.title' })}
          </Headline>
          <StyledSubHeadline>
            {intl.formatMessage({ id: 'visastar.home.welcome.description' })}
          </StyledSubHeadline>
        </View>
      </Card>
    </View>
  );
};
