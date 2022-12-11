import React from 'react';
import { useIntl } from 'react-intl';
import { View } from 'react-native';

import {
  Headline,
  SubHeadline,
} from 'components/general/Typography/Typography';
import { StyledSubHeadline } from './Header.styled';

export const Header = () => {
  const intl = useIntl();

  return (
    <View>
      <Headline>
        {intl.formatMessage({ id: 'visastar.home.welcome.title' })}
      </Headline>
      <StyledSubHeadline>
        {intl.formatMessage({ id: 'visastar.home.welcome.description' })}
      </StyledSubHeadline>
      <SubHeadline>
        {intl.formatMessage({
          id: 'visastar.home.welcome.subDescription',
        })}
      </SubHeadline>
    </View>
  );
};
