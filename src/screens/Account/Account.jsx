import React from 'react';
import { HeadlineBold } from 'components/general/Typography/Typography';
import { AppHeader } from 'components/general/AppHeader';
import { ScrollView } from 'react-native';
import { Layout } from 'components/general/Layout/Layout';
import { ProfileOverview } from './ProfileOverview';
import { VisaStatus } from './VisaStatus';
import { AccountLinks } from './AccountLinks';
import { ContactLinks } from './ContactLinks';
import { SocialMediaLinks } from './SocialMediaLinks';

export const Account = ({ navigation }) => {
  return (
    <>
      <AppHeader navigation={navigation} title="Account" />
      <ScrollView>
        <Layout>
          <HeadlineBold> Account </HeadlineBold>
          <ProfileOverview navigation={navigation} />
          <VisaStatus />
          <AccountLinks />
          <ContactLinks />
          <SocialMediaLinks />
        </Layout>
      </ScrollView>
    </>
  );
};
