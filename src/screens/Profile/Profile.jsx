import React from 'react';
import { HeadlineBold } from 'components/general/Typography/Typography';
import { Layout } from 'components/general/Layout/Layout';
import { ScrollView } from 'react-native';
import { AppHeader } from 'components/general/AppHeader';
import { ProfileName } from './ProfileName/ProfileName';
import { AccountDelete } from './AccountDelete';

export const Profile = ({ navigation }) => {
  return (
    <>
      <AppHeader navigation={navigation} title="Profile" />
      <ScrollView>
        <Layout>
          <HeadlineBold> Profile </HeadlineBold>
          <ProfileName />
          <AccountDelete />
        </Layout>
      </ScrollView>
    </>
  );
};
