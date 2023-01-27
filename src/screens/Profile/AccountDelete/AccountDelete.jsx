import { DangerButton } from 'components/general/Buttons';
import { StyledCard } from 'components/general/Layout/Layout';
import React from 'react';

export const AccountDelete = () => {
  return (
    <StyledCard>
      <StyledCard.Content>
        <DangerButton>Delete Account</DangerButton>
      </StyledCard.Content>
    </StyledCard>
  );
};
