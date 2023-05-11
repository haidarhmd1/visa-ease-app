import React from 'react';
import { AppHeader } from 'components/general/AppHeader';
import { Alert, ScrollView } from 'react-native';
import { Layout, StyledCard } from 'components/general/Layout/Layout';
import { DangerButton } from 'components/general/Buttons';
import { Card } from 'react-native-paper';
import { useAuthStore, useUserStore } from 'store/zustand';
import { useIntl } from 'react-intl';
import { ROUTES } from 'res/constants/routes';
import { useQueryClient } from 'react-query';
import { ProfileOverview } from './ProfileOverview';
import { AccountLinks } from './AccountLinks';
import { ContactLinks } from './ContactLinks';
import { SocialMediaLinks } from './SocialMediaLinks';
import { AccountDelete } from './AccountDelete';

export const Account = ({ navigation }) => {
  const { formatMessage } = useIntl();

  return (
    <>
      <AppHeader
        navigation={navigation}
        goBack={() => navigation.goBack()}
        title={formatMessage({ id: 'screen.account.title' })}
      />
      <ScrollView>
        <Layout>
          <ProfileOverview navigation={navigation} />
          <AccountLinks />
          <ContactLinks />
          <SocialMediaLinks />
          <StyledCard>
            <AccountDelete />
          </StyledCard>
        </Layout>
      </ScrollView>
    </>
  );
};
