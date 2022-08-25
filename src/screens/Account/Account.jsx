import React from 'react';
import { HeadlineBold } from 'components/general/Typography/Typography';
import { Header } from 'components/general/Header';
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
      <Header navigation={navigation} title="Account" />
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
