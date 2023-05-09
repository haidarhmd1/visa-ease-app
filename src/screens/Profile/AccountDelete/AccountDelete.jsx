import { DangerButton } from 'components/general/Buttons';
import { StyledCard } from 'components/general/Layout/Layout';
import { deleteUser } from 'network/api';
import React from 'react';
import { useIntl } from 'react-intl';
import { Alert } from 'react-native';
import { Card } from 'react-native-paper';
import { useMutation } from 'react-query';
import { useAuthStore, useUserStore } from 'store/zustand';

export const AccountDelete = () => {
  const { formatMessage } = useIntl();

  const removeUserInfo = useUserStore(state => state.removeUserInfo);
  const signOut = useAuthStore(state => state.signOut);

  const { mutate, isLoading } = useMutation({
    mutationFn: deleteUser,
    onSuccess: () => {
      removeUserInfo();
      signOut();
    },
    onError: () => {
      Alert.alert(formatMessage({ id: 'general.error.message' }));
    },
  });

  const deleteUserHandler = () => {
    Alert.alert(
      formatMessage({ id: 'button.delete' }),
      formatMessage({ id: 'general.deleteConfirmation' }),
      [
        {
          text: formatMessage({ id: 'button.delete' }),
          onPress: () => {
            mutate();
          },
        },
        {
          text: formatMessage({ id: 'general.cancel' }),
          onPress: () => {},
          style: 'cancel',
        },
      ],
      { cancelable: false }
    );
  };

  return (
    <StyledCard>
      <Card.Content>
        <DangerButton isLoading={isLoading} onPress={deleteUserHandler}>
          {formatMessage({ id: 'screen.profile.deleteAccount' })}
        </DangerButton>
      </Card.Content>
    </StyledCard>
  );
};
