import { DangerButton } from 'components/general/Buttons';
import { StyledCard } from 'components/general/Layout/Layout';
import React from 'react';
import { Card } from 'react-native-paper';

export const AccountDelete = () => {
  return (
    <StyledCard>
      <Card.Content>
        <DangerButton>Delete Account</DangerButton>
      </Card.Content>
    </StyledCard>
  );
};
