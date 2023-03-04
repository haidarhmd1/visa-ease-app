import React, { useState } from 'react';
import { Formik } from 'formik';

import { StyledTextInput } from 'components/general/Form';
import { StyledCard, Wrapper } from 'components/general/Layout/Layout';
import { PrimaryButton } from 'components/general/Buttons';
import { Card, HelperText, RadioButton, Text } from 'react-native-paper';
import { AppHeader } from 'components/general/AppHeader';
import { ScrollView } from 'react-native';
import { flightInformationValidationSchema } from './FlightInformation.schema';

export const FlightInformation = ({ navigation }) => {
  const [selectedInvoiceRecipient, setSelectedInvoiceRecipient] = useState(
    'yes'
  );

  return (
    <>
      <AppHeader
        navigation={navigation}
        goBack={() => navigation.goBack()}
        title="Flight Information"
      />
      <ScrollView>
        <Wrapper>
          <Formik
            // validationSchema={flightInformationValidationSchema}
            initialValues={{
              travelStartDate: '',
              returnFlightDate: '',
              isInvoiceRecipientSame: 'yes',
              invoiceAddress: '',
            }}
            onSubmit={values => console.log(1)}
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
                <Card.Content style={{ marginBottom: 16 }}>
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
                </Card.Content>
                <Card.Content style={{ marginBottom: 16 }}>
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
                </Card.Content>

                <Card.Content style={{ marginBottom: 16 }}>
                  <Text variant="labelMedium">
                    Invoice Recipient same as Applicant?
                  </Text>
                  <RadioButton.Group
                    onValueChange={(itemValue, itemIndex) => {
                      setFieldValue('isInvoiceRecipientSame', itemValue);
                      setSelectedInvoiceRecipient(itemValue);
                    }}
                    value={selectedInvoiceRecipient}
                  >
                    <RadioButton.Item color="#00bf80" label="Yes" value="yes" />
                    <RadioButton.Item color="#00bf80" label="No" value="no" />
                  </RadioButton.Group>
                </Card.Content>

                {selectedInvoiceRecipient === 'no' && (
                  <Card.Content style={{ marginBottom: 16 }}>
                    <StyledTextInput
                      mode="outlined"
                      label="Invoice Recipient Address"
                      name="invoiceAddress"
                      placeholder="Friedrichstr. 95, 10117 Berlin"
                      value={values?.invoiceAddress}
                      onChangeText={handleChange('invoiceAddress')}
                      onBlur={handleBlur('invoiceAddress')}
                      isError={errors.invoiceAddress && touched.invoiceAddress}
                    />
                    {errors.invoiceAddress && touched.invoiceAddress && (
                      <HelperText type="error">
                        {errors.invoiceAddress}
                      </HelperText>
                    )}
                  </Card.Content>
                )}

                <Card.Content>
                  <PrimaryButton
                    onPress={handleSubmit}
                    style={{ marginBottom: 10 }}
                  >
                    Next
                  </PrimaryButton>
                </Card.Content>
              </StyledCard>
            )}
          </Formik>
        </Wrapper>
      </ScrollView>
    </>
  );
};
