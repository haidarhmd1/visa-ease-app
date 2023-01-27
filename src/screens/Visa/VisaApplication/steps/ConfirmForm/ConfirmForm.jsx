import { PrimaryButton, SecondaryButton } from 'components/general/Buttons';
import { StyledCard, Wrapper } from 'components/general/Layout/Layout';
import { addVisaApplication } from 'network/api';
import React from 'react';

export const ConfirmForm = ({ data, next, editFromBeginning }) => {
  const onSubmit = async () => {
    try {
      console.log('data', data);
      await addVisaApplication(data);
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <Wrapper>
      <StyledCard>
        <StyledCard.Content>
          <PrimaryButton onPress={onSubmit} style={{ marginBottom: 10 }}>
            Confirm your Information
          </PrimaryButton>

          <SecondaryButton onPress={editFromBeginning}>Edit</SecondaryButton>
        </StyledCard.Content>
      </StyledCard>
    </Wrapper>
  );
};
