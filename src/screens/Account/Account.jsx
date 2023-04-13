import React from 'react';
import { AppHeader } from 'components/general/AppHeader';
import { ScrollView } from 'react-native';
import { Layout, StyledCard } from 'components/general/Layout/Layout';
import { DangerButton } from 'components/general/Buttons';
import { useAuthenticationStore } from 'store/zustand';
import { Card } from 'react-native-paper';
import { ProfileOverview } from './ProfileOverview';
import { AccountLinks } from './AccountLinks';
import { ContactLinks } from './ContactLinks';
import { SocialMediaLinks } from './SocialMediaLinks';

export const Account = ({ navigation }) => {
  const userLogout = useAuthenticationStore(state => state.userLogout);

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
              <DangerButton onPress={() => userLogout()}>Log out</DangerButton>
            </Card.Content>
          </StyledCard>
        </Layout>
      </ScrollView>
    </>
  );
};
