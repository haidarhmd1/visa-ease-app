import React, { useMemo, useState } from 'react';
import { Formik } from 'formik';

import { StyledTextInput } from 'components/general/Form';
import { StyledCard, Wrapper } from 'components/general/Layout/Layout';
import { PrimaryButton, SecondaryButton } from 'components/general/Buttons';
import { HelperText, RadioButton, Text } from 'react-native-paper';
import { flightInformationValidationSchema } from './FlightInformation.schema';

export const FlightInformation = ({ next, prev, data }) => {
  const [
    selectedArrivalSameasDepartureAirport,
    setSelectedArrivalSameasDepartureAirport,
  ] = useState('yes');
  const [
    selectedInvoiceRecipientSameAsApplicant,
    setSelectedInvoiceRecipientSameAsApplicant,
  ] = useState('yes');
  const [selectedEntireTravelInUAE, setSelectedEntireTravelInUAE] = useState(
    'yes'
  );

  return (
    <Wrapper>
      <Formik
        initialValues={useMemo(() => data, [data])}
        // validationSchema={flightInformationValidationSchema}
        onSubmit={values => next(values)}
      >
        {({
          handleChange,
          handleBlur,
          handleSubmit,
          setFieldValue,
          values,
          errors,
          touched,
        }) => (
          <StyledCard>
            <StyledCard.Content style={{ marginBottom: 16 }}>
              <StyledTextInput
                mode="outlined"
                name="travelStartDate"
                type="datetime"
                label="Flight start Date"
                placeholder="dd/MM/YYYY"
                options={{
                  format: 'dd/MM/YYYY',
                }}
                onChangeText={handleChange('travelStartDate')}
                onBlur={handleBlur('travelStartDate')}
                value={values.travelStartDate}
                keyboardType="numeric"
                isError={errors.travelStartDate && touched.travelStartDate}
              />
              {errors.travelStartDate && touched.travelStartDate && (
                <HelperText type="error">{errors.travelStartDate}</HelperText>
              )}
            </StyledCard.Content>
            <StyledCard.Content style={{ marginBottom: 16 }}>
              <StyledTextInput
                mode="outlined"
                name="returnFlightDate"
                type="datetime"
                label="Return Flight Date"
                placeholder="dd/MM/YYYY"
                options={{
                  format: 'dd/MM/YYYY',
                }}
                onChangeText={handleChange('returnFlightDate')}
                onBlur={handleBlur('returnFlightDate')}
                value={values.returnFlightDate}
                keyboardType="numeric"
                isError={errors.returnFlightDate && touched.returnFlightDate}
              />
              {errors.returnFlightDate && touched.returnFlightDate && (
                <HelperText type="error">{errors.returnFlightDate}</HelperText>
              )}
            </StyledCard.Content>
            <StyledCard.Content style={{ marginBottom: 16 }}>
              <Text variant="labelMedium">
                Arrival airport is the same as departure airport?
              </Text>

              <RadioButton.Group
                onValueChange={(itemValue, itemIndex) => {
                  setFieldValue('arrivalSameasDepartureAirport', itemValue);
                  setSelectedArrivalSameasDepartureAirport(itemValue);
                }}
                value={selectedArrivalSameasDepartureAirport}
              >
                <RadioButton.Item color="#00bf80" label="Yes" value="yes" />
                <RadioButton.Item color="#00bf80" label="No" value="no" />
              </RadioButton.Group>
            </StyledCard.Content>
            <StyledCard.Content style={{ marginBottom: 16 }}>
              <Text variant="labelMedium">
                Invoice Recipient is same as Applicant?
              </Text>

              <RadioButton.Group
                onValueChange={(itemValue, itemIndex) => {
                  setFieldValue('invoiceRecipientSameAsApplicant', itemValue);
                  setSelectedInvoiceRecipientSameAsApplicant(itemValue);
                }}
                value={selectedInvoiceRecipientSameAsApplicant}
              >
                <RadioButton.Item color="#00bf80" label="Yes" value="yes" />
                <RadioButton.Item color="#00bf80" label="No" value="no" />
              </RadioButton.Group>
            </StyledCard.Content>
            <StyledCard.Content style={{ marginBottom: 16 }}>
              <Text variant="labelMedium">
                Will you spend the entire travel period exclusively in the
                United Arab Emirates?
              </Text>

              <RadioButton.Group
                onValueChange={(itemValue, itemIndex) => {
                  setFieldValue('entireTravelInUAE', itemValue);
                  setSelectedEntireTravelInUAE(itemValue);
                }}
                value={selectedEntireTravelInUAE}
              >
                <RadioButton.Item color="#00bf80" label="Yes" value="yes" />
                <RadioButton.Item color="#00bf80" label="No" value="no" />
              </RadioButton.Group>
            </StyledCard.Content>

            <StyledCard.Content>
              <PrimaryButton
                onPress={handleSubmit}
                style={{ marginBottom: 10 }}
              >
                Next
              </PrimaryButton>
              <SecondaryButton onPress={prev}>Back</SecondaryButton>
            </StyledCard.Content>
          </StyledCard>
        )}
      </Formik>
    </Wrapper>
  );
};
