import React from 'react';
import { HeadlineBold } from 'components/general/Typography/Typography';
import { Header } from 'components/general/Header';
import { ScrollView } from 'react-native';
import { Layout } from 'components/general/Layout/Layout';
import { ProfileOverview } from './ProfileOverview';
import { VisaStatus } from './VisaStatus';
import { ProfileLinks } from './ProfileLinks';
import { ContactLinks } from './ContactLinks';
import { SocialMediaLinks } from './SocialMediaLinks';

export const Profile = ({ navigation }) => {
  return (
    <>
      <Header navigation={navigation} title="Account" />
      <ScrollView>
        <Layout>
          <HeadlineBold> Profile </HeadlineBold>
          <ProfileOverview navigation={navigation} />
          <VisaStatus />
          <ProfileLinks />
          <ContactLinks />
          <SocialMediaLinks />
        </Layout>
      </ScrollView>
    </>
  );
};
