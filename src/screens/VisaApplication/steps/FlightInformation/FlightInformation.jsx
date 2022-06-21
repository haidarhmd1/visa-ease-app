import React, { useState } from 'react';
import { Button, View } from 'react-native';
import { Formik } from 'formik';
import { Picker } from '@react-native-picker/picker';
import { RegularCaption } from 'components/general/Typography/Typography';

import { ErrorText, StyledTextInputMask } from 'components/general/Form';
import { FormInputWrapper } from '../RegisterForm/RegisterForm.styled';

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
    <View>
      <Formik initialValues={data} onSubmit={values => next(values)}>
        {({
          handleChange,
          handleBlur,
          handleSubmit,
          setFieldValue,
          values,
          errors,
          touched,
          isValid,
        }) => (
          <>
            <FormInputWrapper>
              <RegularCaption>Flight start date</RegularCaption>
              <StyledTextInputMask
                name="travelStartDate"
                type="datetime"
                placeholder="YYYY-MM-dd"
                options={{
                  format: 'YYYY-MM-dd',
                }}
                onChangeText={handleChange('travelStartDate')}
                onBlur={handleBlur('travelStartDate')}
                value={values.travelStartDate}
                keyboardType="numeric"
              />
              {errors.travelStartDate && touched.travelStartDate && (
                <ErrorText>{errors.travelStartDate}</ErrorText>
              )}
            </FormInputWrapper>

            <FormInputWrapper>
              <RegularCaption>Return Flight Date</RegularCaption>
              <StyledTextInputMask
                name="returnFlightDate"
                type="datetime"
                placeholder="YYYY-MM-dd"
                options={{
                  format: 'YYYY-MM-dd',
                }}
                onChangeText={handleChange('returnFlightDate')}
                onBlur={handleBlur('returnFlightDate')}
                value={values.returnFlightDate}
                keyboardType="numeric"
              />
              {errors.returnFlightDate && touched.returnFlightDate && (
                <ErrorText>{errors.returnFlightDate}</ErrorText>
              )}
            </FormInputWrapper>

            <FormInputWrapper>
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
            </FormInputWrapper>

            <FormInputWrapper>
              <RegularCaption>
                Invoice Recipient is same as Aplicant?
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
            </FormInputWrapper>

            <FormInputWrapper>
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
            </FormInputWrapper>
            <FormInputWrapper>
              <Button onPress={handleSubmit} title="Next" />
              <Button onPress={prev} title="Back" />
            </FormInputWrapper>
          </>
        )}
      </Formik>
    </View>
  );
};
