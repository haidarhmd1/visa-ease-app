import React from 'react';
import { Layout } from 'components/general/Layout/Layout';
import { ScrollView } from 'react-native';
import { AppHeader } from 'components/general/AppHeader';
import { useIntl } from 'react-intl';
import { ProfileDetails } from './ProfileDetails';
import { AccountDelete } from './AccountDelete';

export const Profile = ({ navigation }) => {
  const { formatMessage } = useIntl();
  return (
    <>
      <AppHeader
        navigation={navigation}
        goBack={() => navigation.goBack()}
        title={formatMessage({ id: 'screen.profile.title' })}
      />
      <ScrollView style={{ backgroundColor: 'white' }}>
        <Layout>
          <ProfileDetails />
          <AccountDelete />
        </Layout>
      </ScrollView>
    </>
  );
};
