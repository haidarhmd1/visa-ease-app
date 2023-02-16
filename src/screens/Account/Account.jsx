import React from 'react';
import { AppHeader } from 'components/general/AppHeader';
import { ScrollView } from 'react-native';
import { Layout, StyledCard } from 'components/general/Layout/Layout';
import { DangerButton } from 'components/general/Buttons';
import { useDispatch } from 'react-redux';
import { setSignOut } from 'redux/slices/authSlice';
import { ProfileOverview } from './ProfileOverview';
import { VisaStatus } from './VisaStatus';
import { AccountLinks } from './AccountLinks';
import { ContactLinks } from './ContactLinks';
import { SocialMediaLinks } from './SocialMediaLinks';

export const Account = ({ navigation }) => {
  const dispatcher = useDispatch();
  const onLogoutHandler = () => {
    dispatcher(setSignOut());
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
