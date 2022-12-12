import React, { useMemo, useState } from 'react';
import { Formik } from 'formik';
import { Picker } from '@react-native-picker/picker';
import { RegularCaption } from 'components/general/Typography/Typography';

import { ErrorText, StyledTextInputMask } from 'components/general/Form';
import { Wrapper } from 'components/general/Layout/Layout';
import { PrimaryButton, SecondaryButton } from 'components/general/Buttons';
import { FormItemWrapper } from 'components/general/Form/Form';
import { FormInputWrapper } from '../RegisterForm/RegisterForm.styled';
import { flightInformationValidationSchema } from './FlightInformation.schema';

export const FlightInformation = ({ next, prev, data }) => {
  const [
    selectedArrivalSameasDepartureAirport,
    setSelectedArrivalSameasDepartureAirport,
  ] = useState();
  const [
    selectedInvoiceRecipientSameAsApplicant,
    setSelectedInvoiceRecipientSameAsApplicant,
  ] = useState();
  const [selectedEntireTravelInUAE, setSelectedEntireTravelInUAE] = useState();

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
          <FormInputWrapper>
            <FormItemWrapper>
              <RegularCaption>Flight start date</RegularCaption>
              <StyledTextInputMask
                name="travelStartDate"
                type="datetime"
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
                <ErrorText>{errors.travelStartDate}</ErrorText>
              )}
            </FormItemWrapper>
            <FormItemWrapper>
              <RegularCaption>Return Flight Date</RegularCaption>
              <StyledTextInputMask
                name="returnFlightDate"
                type="datetime"
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
                <ErrorText>{errors.returnFlightDate}</ErrorText>
              )}
            </FormItemWrapper>
            <FormItemWrapper>
              <RegularCaption>
                Arrival airport is the same as departure airport?
              </RegularCaption>
              <Picker
                selectedValue={selectedArrivalSameasDepartureAirport}
                onValueChange={(itemValue, itemIndex) => {
                  setFieldValue('arrivalSameasDepartureAirport', itemValue);
                  setSelectedArrivalSameasDepartureAirport(itemValue);
                }}
              >
                <Picker.Item label="Yes" value="yes" />
                <Picker.Item label="No" value="no" />
              </Picker>
            </FormItemWrapper>
            <FormItemWrapper>
              <RegularCaption>
                Invoice Recipient is same as Applicant?
              </RegularCaption>
              <Picker
                selectedValue={selectedInvoiceRecipientSameAsApplicant}
                onValueChange={(itemValue, itemIndex) => {
                  setFieldValue('invoiceRecipientSameAsApplicant', itemValue);
                  setSelectedInvoiceRecipientSameAsApplicant(itemValue);
                }}
              >
                <Picker.Item label="Yes" value="yes" />
                <Picker.Item label="No" value="no" />
              </Picker>
            </FormItemWrapper>
            <FormItemWrapper>
              <RegularCaption>
                Will you spend the entire travel period exclusively in the
                United Arab Emirates?
              </RegularCaption>
              <Picker
                selectedValue={selectedEntireTravelInUAE}
                onValueChange={(itemValue, itemIndex) => {
                  setFieldValue('entireTravelInUAE', itemValue);
                  setSelectedEntireTravelInUAE(itemValue);
                }}
              >
                <Picker.Item label="Yes" value="yes" />
                <Picker.Item label="No" value="no" />
              </Picker>
            </FormItemWrapper>
            <PrimaryButton onPress={handleSubmit} style={{ marginBottom: 10 }}>
              Next
            </PrimaryButton>
            <SecondaryButton onPress={prev}>Back</SecondaryButton>
          </FormInputWrapper>
        )}
      </Formik>
    </Wrapper>
  );
};
