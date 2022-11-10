import React from 'react';
import { Wrapper } from 'components/general/Layout/Layout';
import { PrimaryButton } from 'components/general/Buttons';
import { useIntl } from 'react-intl';
import HTMLView from 'react-native-htmlview';
import {
  ImageBackgroundText,
  ImageTextWrapper,
  StyledImageBackground,
  StyledInformationCard,
  StyledSubHeadlineBold,
  StyledWarningInformationCard,
} from './Information.styled';

export const Information = ({ next, visaCountryData }) => {
  const intl = useIntl();

  return (
    <>
      <StyledImageBackground
        style={{ backgroundColor: 'lightgrey' }}
        source={{ uri: visaCountryData?.better_featured_image.source_url }}
      >
        <ImageTextWrapper>
          <ImageBackgroundText>
            {visaCountryData?.title.rendered}
          </ImageBackgroundText>
        </ImageTextWrapper>
      </StyledImageBackground>
      <Wrapper>
        {visaCountryData?.acf?.notice ? (
          <StyledWarningInformationCard>
            <StyledSubHeadlineBold>
              {intl.formatMessage({
                id: 'visaApplication.steps.information.note',
              })}
            </StyledSubHeadlineBold>
            <HTMLView value={visaCountryData?.acf?.notice} />
          </StyledWarningInformationCard>
        ) : null}

        {visaCountryData?.acf?.Information ? (
          <StyledInformationCard>
            <StyledSubHeadlineBold>
              {intl.formatMessage({
                id: 'visaApplication.steps.information.infoTitle',
              })}
            </StyledSubHeadlineBold>
            <HTMLView value={visaCountryData?.acf?.Information} />
          </StyledInformationCard>
        ) : null}

        {visaCountryData?.acf?.what_we_need ? (
          <StyledInformationCard>
            <StyledSubHeadlineBold>
              {intl.formatMessage({
                id: 'visaApplication.steps.information.whatWeNeedBox.title',
              })}
            </StyledSubHeadlineBold>
            <HTMLView value={visaCountryData?.acf?.what_we_need} />
          </StyledInformationCard>
        ) : null}

        <StyledInformationCard>
          <StyledSubHeadlineBold>
            {intl.formatMessage({
              id: 'visaApplication.steps.information.processing.title',
            })}
          </StyledSubHeadlineBold>
          <PrimaryButton
            onPress={() =>
              next({
                visaType: 'express',
                selectedCountry: visaCountryData.slug,
              })
            }
            style={{ marginBottom: 10 }}
          >
            {intl.formatMessage({
              id: 'visaApplication.general.visaType.express',
            })}
          </PrimaryButton>
          <PrimaryButton
            onPress={() =>
              next({
                visaType: 'standard',
                selectedCountry: visaCountryData.slug,
              })
            }
          >
            {intl.formatMessage({
              id: 'visaApplication.general.visaType.standard',
            })}
          </PrimaryButton>
        </StyledInformationCard>
      </Wrapper>
    </>
  );
};
