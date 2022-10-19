import React from 'react';
import { HeadlineBold } from 'components/general/Typography/Typography';
import { Layout } from 'components/general/Layout/Layout';
import { ScrollView } from 'react-native';
import { Header } from 'components/general/Header';
import { ProfileName } from './ProfileName/ProfileName';
import { AccountDelete } from './AccountDelete';

export const Profile = ({ navigation }) => {
  return (
    <>
      <Header navigation={navigation} title="Profile" />
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
