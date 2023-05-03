import { DangerButton } from 'components/general/Buttons';
import { StyledCard } from 'components/general/Layout/Layout';
import React from 'react';
import { useIntl } from 'react-intl';
import { Alert } from 'react-native';
import { Card } from 'react-native-paper';

export const AccountDelete = () => {
  const { formatMessage } = useIntl();

  const deleteUser = () => {
    Alert.alert(
      formatMessage({ id: 'button.delete' }),
      formatMessage({ id: 'general.deleteConfirmation' }),
      [
        {
          text: formatMessage({ id: 'button.delete' }),
          onPress: () => {
            // removeUserInfo();
            // signOut();
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
        <DangerButton onPress={deleteUser}>
          {formatMessage({ id: 'screen.profile.deleteAccount' })}
        </DangerButton>
      </Card.Content>
    </StyledCard>
  );
};
