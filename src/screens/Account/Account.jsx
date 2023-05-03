import React from 'react';
import { AppHeader } from 'components/general/AppHeader';
import { Alert, ScrollView } from 'react-native';
import { Layout, StyledCard } from 'components/general/Layout/Layout';
import { DangerButton } from 'components/general/Buttons';
import { Card } from 'react-native-paper';
import { useAuthStore, useUserStore } from 'store/zustand';
import { ProfileOverview } from './ProfileOverview';
import { AccountLinks } from './AccountLinks';
import { ContactLinks } from './ContactLinks';
import { SocialMediaLinks } from './SocialMediaLinks';

export const Account = ({ navigation }) => {
  const signOut = useAuthStore(state => state.signOut);
  const removeUserInfo = useUserStore(state => state.removeUserInfo);

  const logoutUser = () => {
    Alert.alert(
      'Logout',
      'Do you really want to logout?',
      [
        {
          text: 'Yes',
          onPress: () => {
            removeUserInfo();
            signOut();
          },
        },
        {
          text: 'No',
          onPress: () => {},
          style: 'cancel',
        },
      ],
      { cancelable: false }
    );
  };

  return (
    <>
      <AppHeader
        navigation={navigation}
        goBack={() => navigation.goBack()}
        title="Account"
      />
      <ScrollView>
        <Layout>
          <ProfileOverview navigation={navigation} />
          <AccountLinks />
          <ContactLinks />
          <SocialMediaLinks />
          <StyledCard>
            <Card.Content>
              <DangerButton onPress={logoutUser}>Log out</DangerButton>
            </Card.Content>
          </StyledCard>
        </Layout>
      </ScrollView>
    </>
  );
};
