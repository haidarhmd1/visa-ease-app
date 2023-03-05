import React from 'react';
import { Layout } from 'components/general/Layout/Layout';
import { ScrollView } from 'react-native';
import { AppHeader } from 'components/general/AppHeader';
import { ProfileDetails } from './ProfileDetails';
import { AccountDelete } from './AccountDelete';

export const Profile = ({ navigation }) => {
  return (
    <>
      <AppHeader
        navigation={navigation}
        goBack={() => navigation.goBack()}
        title="Profile"
      />
      <ScrollView>
        <Layout>
          <ProfileDetails />
          <AccountDelete />
        </Layout>
      </ScrollView>
    </>
  );
};
