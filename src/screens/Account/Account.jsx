import React from 'react';
import { AppHeader } from 'components/general/AppHeader';
import { ScrollView } from 'react-native';
import { Layout, StyledCard } from 'components/general/Layout/Layout';
import { DangerButton } from 'components/general/Buttons';
import { useAuthenticationStore } from 'store/zustand';
import { ProfileOverview } from './ProfileOverview';
import { VisaStatus } from './VisaStatus';
import { AccountLinks } from './AccountLinks';
import { ContactLinks } from './ContactLinks';
import { SocialMediaLinks } from './SocialMediaLinks';

export const Account = ({ navigation }) => {
  const userAuth = useAuthenticationStore(state => state.userAuth);
  const onLogoutHandler = () => {
    userAuth('', false);
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
          <VisaStatus />
          <AccountLinks />
          <ContactLinks />
          <SocialMediaLinks />
          <StyledCard>
            <StyledCard.Content>
              <DangerButton onPress={onLogoutHandler}>Log out</DangerButton>
            </StyledCard.Content>
          </StyledCard>
        </Layout>
      </ScrollView>
    </>
  );
};
