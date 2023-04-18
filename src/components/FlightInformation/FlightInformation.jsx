import React, { useState } from 'react';
import { Formik } from 'formik';

import { StyledTextInput } from 'components/general/Form';
import { Spacer, Wrapper } from 'components/general/Layout/Layout';
import { PrimaryButton } from 'components/general/Buttons';
import { Card, HelperText, RadioButton, Text } from 'react-native-paper';
import { AppHeader } from 'components/general/AppHeader';
import { ScrollView, View } from 'react-native';
import { NotificationToast } from 'components/general/NotificationToast';
import { useQuery, useQueryClient } from 'react-query';
import { getFlightInformation, setFlightInformation } from 'network/api';
import { useAuthenticationStore } from 'store/zustand';
import { flightInformationValidationSchema } from './FlightInformation.schema';

const processTime = [
  {
    id: '1',
    icon: 'email-fast-outline',
    title: 'Express',
    text: '3 Werktage',
  },
  {
    id: '2',
    icon: 'warehouse',
    title: 'Standard',
    text: '7-10 Werktage',
  },
];

export const FlightInformation = ({ navigation }) => {
  const userId = useAuthenticationStore(state => state.id);
  const queryClient = useQueryClient();
  const [showToast, setShowToast] = useState(false);
  const [error, setError] = useState(false);
  const [success, setSuccess] = useState(false);
  const [isLoading, setIsLoading] = useState(false);

  const [selectedInvoiceRecipient, setSelectedInvoiceRecipient] =
    useState('yes');
  const [selectedHasCruise, setSelectedHasCruise] = useState('yes');
  const [selectedKindOfVisa, setSelectedKindOfVisa] = useState('single_entry');

  const { data: getVisaFlightInformation } = useQuery(
    ['getVisaFlightInformation', userId],
    () => getFlightInformation(userId)
  );

  const handleFormSubmit = async values => {
    setShowToast(true);
    setIsLoading(true);
    try {
      const response = await setFlightInformation(userId, values);
      if (response.status !== 200) throw Error;
      queryClient.invalidateQueries('getVisaFlightInformation', userId);
      queryClient.invalidateQueries('getCompletedLists');

      setIsLoading(false);
      setSuccess(true);
      setTimeout(() => {
        navigation.goBack();
      }, 1600);
    } catch {
      setIsLoading(false);
      setError(true);
      setTimeout(() => {
        setError(false);
      }, 1600);
    }
  };

  return (
    <>
      <AppHeader
        navigation={navigation}
        goBack={() => navigation.goBack()}
        title="Flight Information"
      />
      <Formik
        enableReinitialize
        validationSchema={flightInformationValidationSchema}
        initialValues={{
          travelStartDate: getVisaFlightInformation?.data.travelStartDate ?? '',
          returnFlightDate:
            getVisaFlightInformation?.data.returnFlightDate ?? '',
          invoiceRecipientSameAsApplicant:
            getVisaFlightInformation?.data.invoiceRecipientSameAsApplicant ??
            'yes',
          invoiceAddress: getVisaFlightInformation?.data.invoiceAddress ?? '',
          cruise: getVisaFlightInformation?.data.cruise ?? 'yes',
          kindOfVisa:
            getVisaFlightInformation?.data.kindOfVisa ?? 'single_entry',
        }}
        onSubmit={handleFormSubmit}
      >
        {({
          handleChange,
          handleBlur,
          setFieldValue,
          handleSubmit,
          values,
          errors,
          touched,
        }) => (
          <View style={{ flex: 1, position: 'relative' }}>
            <ScrollView
              style={{
                backgroundColor: 'white',
              }}
            >
              <Wrapper>
                <View>
                  <StyledTextInput
                    mode="outlined"
                    name="travelStartDate"
                    type="datetime"
                    label="Expected flight start date"
                    placeholder="dd/MM/YYYY"
                    options={{
                      format: 'dd/MM/YYYY',
                    }}
                    onChangeText={handleChange('travelStartDate')}
                    onBlur={handleBlur('travelStartDate')}
                    value={values?.travelStartDate}
                    keyboardType="numeric"
                    isError={errors.travelStartDate && touched.travelStartDate}
                  />
                  {errors.travelStartDate && touched.travelStartDate && (
                    <HelperText type="error">
                      {errors.travelStartDate}
                    </HelperText>
                  )}
                  <Spacer />
                  <StyledTextInput
                    mode="outlined"
                    name="returnFlightDate"
                    type="datetime"
                    label="Expected return flight date"
                    placeholder="dd/MM/YYYY"
                    options={{
                      format: 'dd/MM/YYYY',
                    }}
                    onChangeText={handleChange('returnFlightDate')}
                    onBlur={handleBlur('returnFlightDate')}
                    value={values?.returnFlightDate}
                    keyboardType="numeric"
                    isError={
                      errors.returnFlightDate && touched.returnFlightDate
                    }
                  />
                  {errors.returnFlightDate && touched.returnFlightDate && (
                    <HelperText type="error">
                      {errors.returnFlightDate}
                    </HelperText>
                  )}
                  <Spacer />
                  <Text variant="labelMedium">Cruise</Text>
                  <RadioButton.Group
                    onValueChange={itemValue => {
                      setFieldValue('cruise', itemValue);
                      setSelectedHasCruise(itemValue);
                    }}
                    value={selectedHasCruise}
                  >
                    <RadioButton.Item color="#00bf80" label="Yes" value="yes" />
                    <RadioButton.Item color="#00bf80" label="No" value="no" />
                  </RadioButton.Group>
                  <Spacer />
                  <Text variant="labelMedium">Kind of Visa</Text>
                  <RadioButton.Group
                    onValueChange={itemValue => {
                      setFieldValue('kindOfVisa', itemValue);
                      setSelectedKindOfVisa(itemValue);
                    }}
                    value={selectedKindOfVisa}
                  >
                    <RadioButton.Item
                      color="#00bf80"
                      label="Single Entry"
                      value="single_entry"
                    />
                    <RadioButton.Item
                      color="#00bf80"
                      label="Multiple Entry"
                      value="multiple_entry"
                    />
                  </RadioButton.Group>
                  <Spacer />
                  <Text variant="labelMedium">
                    Invoice Recipient same as Applicant?
                  </Text>
                  <RadioButton.Group
                    onValueChange={(itemValue, itemIndex) => {
                      setFieldValue(
                        'invoiceRecipientSameAsApplicant',
                        itemValue
                      );
                      setSelectedInvoiceRecipient(itemValue);
                    }}
                    value={selectedInvoiceRecipient}
                  >
                    <RadioButton.Item color="#00bf80" label="Yes" value="yes" />
                    <RadioButton.Item color="#00bf80" label="No" value="no" />
                  </RadioButton.Group>
                  {selectedInvoiceRecipient === 'no' && (
                    <View>
                      <StyledTextInput
                        mode="outlined"
                        label="Invoice Recipient Address"
                        name="invoiceAddress"
                        placeholder="Friedrichstr. 95, 10117 Berlin"
                        value={values?.invoiceAddress}
                        onChangeText={handleChange('invoiceAddress')}
                        onBlur={handleBlur('invoiceAddress')}
                        isError={
                          errors.invoiceAddress && touched.invoiceAddress
                        }
                      />
                      {errors.invoiceAddress && touched.invoiceAddress && (
                        <HelperText type="error">
                          {errors.invoiceAddress}
                        </HelperText>
                      )}
                    </View>
                  )}
                </View>
              </Wrapper>
            </ScrollView>
            <Card mode="elevated" style={{ backgroundColor: 'white' }}>
              <Card.Content>
                <PrimaryButton onPress={handleSubmit}>Submit</PrimaryButton>
              </Card.Content>
            </Card>
          </View>
        )}
      </Formik>
      <NotificationToast
        type="Top"
        error={error}
        isLoading={isLoading}
        success={success}
        showToast={showToast}
      />
    </>
  );
};
