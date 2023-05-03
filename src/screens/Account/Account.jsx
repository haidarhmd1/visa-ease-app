import React from 'react';
import { AppHeader } from 'components/general/AppHeader';
import { Alert, ScrollView } from 'react-native';
import { Layout, StyledCard } from 'components/general/Layout/Layout';
import { DangerButton } from 'components/general/Buttons';
import { Card } from 'react-native-paper';
import { useAuthStore, useUserStore } from 'store/zustand';
import { useIntl } from 'react-intl';
import { ProfileOverview } from './ProfileOverview';
import { AccountLinks } from './AccountLinks';
import { ContactLinks } from './ContactLinks';
import { SocialMediaLinks } from './SocialMediaLinks';

export const Account = ({ navigation }) => {
  const { formatMessage } = useIntl();
  const signOut = useAuthStore(state => state.signOut);
  const removeUserInfo = useUserStore(state => state.removeUserInfo);

  const logoutUser = () => {
    Alert.alert(
      formatMessage({ id: 'button.logout' }),
      formatMessage({ id: 'general.logoutConfirmation' }),
      [
        {
          text: formatMessage({ id: 'general.yes' }),
          onPress: () => {
            removeUserInfo();
            signOut();
          },
        },
        {
          text: formatMessage({ id: 'general.no' }),
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
        title={formatMessage({ id: 'screen.account.title' })}
      />
      <ScrollView>
        <Layout>
          <ProfileOverview navigation={navigation} />
          <AccountLinks />
          <ContactLinks />
          <SocialMediaLinks />
          <StyledCard>
            <Card.Content>
              <DangerButton onPress={logoutUser}>
                {formatMessage({ id: 'button.logout' })}
              </DangerButton>
            </Card.Content>
          </StyledCard>
        </Layout>
      </ScrollView>
    </>
  );
};
