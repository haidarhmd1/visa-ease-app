import { PrimaryButton, SecondaryButton } from 'components/general/Buttons';
import { CardWrapper, Wrapper } from 'components/general/Layout/Layout';
import {
  SubHeadline,
  SubHeadlineBold,
} from 'components/general/Typography/Typography';
import React from 'react';
import { Image } from 'react-native';
import { StyledSignaturePreview, TextWrapper } from './ConfirmForm.styled';

export const ConfirmForm = ({ data, next, editFromBeginning }) => {
  const {
    visaType,
    fullname,
    gender,
    street,
    streetNr,
    zipCode,
    city,
    country,
    email,
    phone,
    fax,
    hasCruise,
    citizenship,
    occupation,
    destinationCountry,
    kindOfVisa,
    travelStartDate,
    returnFlightDate,
    arrivalSameasDepartureAirport,
    invoiceRecipientSameAsApplicant,
    entireTravelInUAE,
    place,
    dateOfSignature,
    signature,
    passportImage,
    residencePermitImage,
  } = data;

  return (
    <Wrapper>
      <CardWrapper>
        <SubHeadlineBold>Type of Visa: </SubHeadlineBold>
        <SubHeadline>{visaType}</SubHeadline>
      </CardWrapper>

      <CardWrapper>
        <TextWrapper>
          <SubHeadlineBold>fullname: </SubHeadlineBold>
          <SubHeadline>{fullname}</SubHeadline>
        </TextWrapper>
        <TextWrapper>
          <SubHeadlineBold>gender: </SubHeadlineBold>
          <SubHeadline>{gender}</SubHeadline>
        </TextWrapper>
        <TextWrapper>
          <SubHeadlineBold>Street: </SubHeadlineBold>
          <SubHeadline>
            {street}, {streetNr}
          </SubHeadline>
        </TextWrapper>
        <TextWrapper>
          <SubHeadlineBold>zipCode: </SubHeadlineBold>
          <SubHeadline>{zipCode}</SubHeadline>
        </TextWrapper>
        <TextWrapper>
          <SubHeadlineBold>city: </SubHeadlineBold>
          <SubHeadline>{city}</SubHeadline>
        </TextWrapper>

        <TextWrapper>
          <SubHeadlineBold>country: </SubHeadlineBold>
          <SubHeadline>{country}</SubHeadline>
        </TextWrapper>

        <TextWrapper>
          <SubHeadlineBold>email: </SubHeadlineBold>
          <SubHeadline>{email}</SubHeadline>
        </TextWrapper>

        <TextWrapper>
          <SubHeadlineBold>phone: </SubHeadlineBold>
          <SubHeadline>{phone}</SubHeadline>
        </TextWrapper>

        <TextWrapper>
          <SubHeadlineBold>fax: </SubHeadlineBold>
          <SubHeadline>{fax}</SubHeadline>
        </TextWrapper>
      </CardWrapper>

      <CardWrapper>
        <TextWrapper>
          <SubHeadlineBold>hasCruise: </SubHeadlineBold>
          <SubHeadline>{hasCruise}</SubHeadline>
        </TextWrapper>
        <TextWrapper>
          <SubHeadlineBold>citizenship: </SubHeadlineBold>
          <SubHeadline>{citizenship}</SubHeadline>
        </TextWrapper>

        <TextWrapper>
          <SubHeadlineBold>occupation: </SubHeadlineBold>
          <SubHeadline>{occupation}</SubHeadline>
        </TextWrapper>

        <TextWrapper>
          <SubHeadlineBold>destinationCountry: </SubHeadlineBold>
          <SubHeadline>{destinationCountry}</SubHeadline>
        </TextWrapper>

        <TextWrapper>
          <SubHeadlineBold>kindOfVisa: </SubHeadlineBold>
          <SubHeadline>{kindOfVisa}</SubHeadline>
        </TextWrapper>
      </CardWrapper>

      <CardWrapper>
        <TextWrapper>
          <SubHeadlineBold>travelStartDate: </SubHeadlineBold>
          <SubHeadline>{travelStartDate}</SubHeadline>
        </TextWrapper>
        <TextWrapper>
          <SubHeadlineBold>returnFlightDate: </SubHeadlineBold>
          <SubHeadline>{returnFlightDate}</SubHeadline>
        </TextWrapper>
        <TextWrapper>
          <SubHeadlineBold>arrivalSameasDepartureAirport: </SubHeadlineBold>
          <SubHeadline>{arrivalSameasDepartureAirport}</SubHeadline>
        </TextWrapper>
        <TextWrapper>
          <SubHeadlineBold>invoiceRecipientSameAsApplicant: </SubHeadlineBold>
          <SubHeadline>{invoiceRecipientSameAsApplicant}</SubHeadline>
        </TextWrapper>
        <TextWrapper>
          <SubHeadlineBold>entireTravelInUAE: </SubHeadlineBold>
          <SubHeadline>{entireTravelInUAE}</SubHeadline>
        </TextWrapper>
        <TextWrapper>
          <SubHeadlineBold>entireTravelInUAE: </SubHeadlineBold>
          <SubHeadline>{entireTravelInUAE}</SubHeadline>
        </TextWrapper>
      </CardWrapper>

      <CardWrapper>
        <Image
          source={{ uri: passportImage }}
          style={{ alignSelf: 'center', width: 300, height: 325 }}
        />
      </CardWrapper>

      <CardWrapper>
        <Image
          source={{ uri: residencePermitImage }}
          style={{ alignSelf: 'center', width: 300, height: 325 }}
        />
      </CardWrapper>
      <CardWrapper>
        <TextWrapper>
          <SubHeadlineBold>date and place: </SubHeadlineBold>
          <SubHeadline>
            {dateOfSignature} {place}
          </SubHeadline>
        </TextWrapper>
        <StyledSignaturePreview source={{ uri: signature }} />
      </CardWrapper>

      <CardWrapper>
        <PrimaryButton onPress={next} style={{ marginBottom: 10 }}>
          Confirm your Information
        </PrimaryButton>

        <SecondaryButton onPress={editFromBeginning}>Edit</SecondaryButton>
      </CardWrapper>
    </Wrapper>
  );
};
