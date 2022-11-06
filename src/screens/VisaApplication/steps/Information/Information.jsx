import React from 'react';

import { EmiratesCardImage } from 'assets/images';
import { Wrapper } from 'components/general/Layout/Layout';
import { PrimaryButton } from 'components/general/Buttons';
import { useIntl } from 'react-intl';
import {
  ImageBackgroundText,
  ImageTextWrapper,
  StyledBodyText,
  StyledImageBackground,
  StyledInformationCard,
  StyledSubHeadlineBold,
  StyledWarningInformationCard,
} from './Information.styled';

export const Information = ({ next }) => {
  const intl = useIntl();

  return (
    <>
      <StyledImageBackground
        style={{ backgroundColor: 'lightgrey' }}
        source={EmiratesCardImage}
      >
        <ImageTextWrapper>
          <ImageBackgroundText>
            {intl.formatMessage({
              id: 'visaApplication.steps.information.imageTitle',
            })}
          </ImageBackgroundText>
        </ImageTextWrapper>
      </StyledImageBackground>
      <Wrapper>
        <StyledWarningInformationCard>
          <StyledSubHeadlineBold>
            {intl.formatMessage({
              id: 'visaApplication.steps.information.note',
            })}
          </StyledSubHeadlineBold>
          <StyledBodyText>
            {intl.formatMessage({
              id: 'visaApplication.steps.information.note.description',
            })}
          </StyledBodyText>
        </StyledWarningInformationCard>

        <StyledInformationCard>
          <StyledSubHeadlineBold>
            {intl.formatMessage({
              id: 'visaApplication.steps.information.infoTitle',
            })}
          </StyledSubHeadlineBold>
          <StyledBodyText>
            {intl.formatMessage({
              id: 'visaApplication.steps.information.infoBox.info1',
            })}
          </StyledBodyText>
          <StyledBodyText>
            {intl.formatMessage({
              id: 'visaApplication.steps.information.infoBox.info2',
            })}
          </StyledBodyText>
          <StyledBodyText>
            {intl.formatMessage({
              id: 'visaApplication.steps.information.infoBox.info3',
            })}
          </StyledBodyText>
          <StyledBodyText>
            {intl.formatMessage({
              id: 'visaApplication.steps.information.infoBox.info4',
            })}
          </StyledBodyText>
        </StyledInformationCard>

        <StyledInformationCard>
          <StyledSubHeadlineBold>
            {intl.formatMessage({
              id: 'visaApplication.steps.information.whatWeNeedBox.title',
            })}
          </StyledSubHeadlineBold>
          <StyledBodyText>
            {intl.formatMessage({
              id: 'visaApplication.steps.information.whatWeNeedBox.info1',
            })}
          </StyledBodyText>
          <StyledBodyText>
            {intl.formatMessage({
              id: 'visaApplication.steps.information.whatWeNeedBox.info2',
            })}
          </StyledBodyText>
          <StyledBodyText>
            {intl.formatMessage({
              id: 'visaApplication.steps.information.whatWeNeedBox.info3',
            })}
          </StyledBodyText>
          <StyledBodyText>
            {intl.formatMessage({
              id: 'visaApplication.steps.information.whatWeNeedBox.info4',
            })}
          </StyledBodyText>
        </StyledInformationCard>

        <StyledInformationCard>
          <StyledSubHeadlineBold>
            {intl.formatMessage({
              id: 'visaApplication.steps.information.processing.title',
            })}
          </StyledSubHeadlineBold>
          <PrimaryButton
            onPress={() => next({ visaType: 'express' })}
            style={{ marginBottom: 10 }}
          >
            {intl.formatMessage({
              id: 'visaApplication.general.visaType.express',
            })}
          </PrimaryButton>
          <PrimaryButton onPress={() => next({ visaType: 'standard' })}>
            {intl.formatMessage({
              id: 'visaApplication.general.visaType.standard',
            })}
          </PrimaryButton>
        </StyledInformationCard>
      </Wrapper>
    </>
  );
};
