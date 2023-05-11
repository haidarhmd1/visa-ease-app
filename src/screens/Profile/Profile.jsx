import React from 'react';
import { Layout, StyledScrollView } from 'components/general/Layout/Layout';
import { Alert, View } from 'react-native';
import { AppHeader } from 'components/general/AppHeader';
import { useIntl } from 'react-intl';
import { DangerButton } from 'components/general/Buttons';
import { useQueryClient } from 'react-query';
import { useAuthStore, useUserStore } from 'store/zustand';
import { ProfileDetails } from './ProfileDetails';

export const Profile = ({ navigation }) => {
  const { formatMessage } = useIntl();

  const queryClient = useQueryClient();
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
            queryClient.invalidateQueries();
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
    <View style={{ flex: 1 }}>
      <AppHeader
        navigation={navigation}
        showBackButton={false}
        title={formatMessage({ id: 'screen.profile.title' })}
      />
      <StyledScrollView>
        <Layout>
          <ProfileDetails />
          <DangerButton onPress={logoutUser}>
            {formatMessage({ id: 'button.logout' })}
          </DangerButton>
        </Layout>
      </StyledScrollView>
    </View>
  );
};
