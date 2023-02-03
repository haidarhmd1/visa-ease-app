import React, { useState } from 'react';
import { Formik } from 'formik';

import { visaInformationValidationSchema } from 'screens/Visa/VisaApplication/steps/VisaInformation/VisaInformation.schema';
import { StyledCard, Wrapper } from 'components/general/Layout/Layout';
import { PrimaryButton } from 'components/general/Buttons';
import { HelperText, RadioButton, Text } from 'react-native-paper';
import { StyledTextInput } from 'components/general/Form';
import { AppHeader } from 'components/general/AppHeader';
import { ScrollView } from 'react-native';
import CountryPicker from 'react-native-country-picker-modal';

export const VisaInformation = ({ navigation }) => {
  const [selectedHasCruise, setSelectedHasCruise] = useState('yes');
  const [selectedKindOfVisa, setSelectedKindOfVisa] = useState('single_entry');
  const [selectedInvoiceRecipient, setSelectedInvoiceRecipient] = useState(
    'yes'
  );
  const [selectedCitizenship, setSelectedCitizenship] = useState('Germany');
  const [selectedDestinationCountry, setSelectedDestinationCountry] = useState(
    'Germany'
  );
  const [
    destinationCountryModalVisible,
    setDestinationCountryModalVisible,
  ] = useState(false);
  const [citizenshipModalVisible, setCitizenshipModalVisible] = useState(false);

  return (
    <>
      <AppHeader
        navigation={navigation}
        goBack={() => navigation.goBack()}
        title="Visa Information"
      />
      <ScrollView>
        <Wrapper>
          <Formik
            initialValues={{
              hasCruise: 'yes',
              citizenship: 'Germany',
              residencePermit: '',
              occupation: '',
              destinationCountry: 'United Arab Emirates',
              kindOfVisa: 'single_entry',
              isInvoiceRecipientSame: 'yes',
            }}
            // validationSchema={visaInformationValidationSchema}
            onSubmit={values => console.log(values)}
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
                  <Text variant="labelMedium">Cruise</Text>
                  <RadioButton.Group
                    onValueChange={(itemValue, itemIndex) => {
                      setFieldValue('hasCruise', itemValue);
                      setSelectedHasCruise(itemValue);
                    }}
                    value={selectedHasCruise}
                  >
                    <RadioButton.Item color="#00bf80" label="Yes" value="yes" />
                    <RadioButton.Item color="#00bf80" label="No" value="no" />
                  </RadioButton.Group>
                </StyledCard.Content>

                <StyledCard.Content style={{ marginBottom: 16 }}>
                  <Text variant="labelMedium">Citizenship</Text>
                  <CountryPicker
                    withFilter
                    withCountryNameButton
                    withModal
                    withAlphaFilter
                    withEmoji
                    containerButtonStyle={{ display: 'none' }}
                    visible={citizenshipModalVisible}
                    onSelect={({ name }) => {
                      setSelectedCitizenship(name);
                      setCitizenshipModalVisible(false);
                    }}
                  />
                </StyledCard.Content>

                <StyledCard.Content style={{ marginBottom: 16 }}>
                  <StyledTextInput
                    mode="outlined"
                    name="citizenship"
                    value={values?.citizenship}
                    editable={false}
                    selectTextOnFocus={false}
                    onPressIn={() => setCitizenshipModalVisible(true)}
                    placeholder={selectedCitizenship}
                  />
                  {errors.citizenship && touched.citizenship && (
                    <HelperText type="error">{errors.citizenship}</HelperText>
                  )}
                </StyledCard.Content>
                <StyledCard.Content style={{ marginBottom: 16 }}>
                  <StyledTextInput
                    mode="outlined"
                    name="residencePermit"
                    label="Residence Permit"
                    onChangeText={handleChange('residencePermit')}
                    onBlur={handleBlur('residencePermit')}
                    value={values?.residencePermit}
                    isError={errors.residencePermit && touched.residencePermit}
                  />
                  {errors.residencePermit && touched.residencePermit && (
                    <HelperText type="error">
                      {errors.residencePermit}
                    </HelperText>
                  )}
                </StyledCard.Content>
                <StyledCard.Content style={{ marginBottom: 16 }}>
                  <StyledTextInput
                    mode="outlined"
                    name="occupation"
                    label="Profession"
                    placeholder="(e.g. Freelancer, Software Engineer...)"
                    onChangeText={handleChange('occupation')}
                    onBlur={handleBlur('occupation')}
                    value={values?.occupation}
                    isError={errors.occupation && touched.occupation}
                  />
                  {errors.occupation && touched.occupation && (
                    <HelperText type="error">{errors.occupation}</HelperText>
                  )}
                </StyledCard.Content>
                <StyledCard.Content style={{ marginBottom: 16 }}>
                  <Text variant="labelMedium">Destination Country</Text>
                  <CountryPicker
                    withFilter
                    withCountryNameButton
                    withModal
                    withAlphaFilter
                    withEmoji
                    containerButtonStyle={{ display: 'none' }}
                    visible={destinationCountryModalVisible}
                    onSelect={({ name }) => {
                      setSelectedDestinationCountry(name);
                      setDestinationCountryModalVisible(false);
                    }}
                  />

                  <StyledTextInput
                    mode="outlined"
                    name="destinationCountry"
                    value={values?.destinationCountry}
                    editable={false}
                    selectTextOnFocus={false}
                    onPressIn={() => setDestinationCountryModalVisible(true)}
                    placeholder={selectedDestinationCountry}
                  />
                  {errors.destinationCountry && touched.destinationCountry && (
                    <HelperText type="error">
                      {errors.destinationCountry}
                    </HelperText>
                  )}
                </StyledCard.Content>
                <StyledCard.Content style={{ marginBottom: 16 }}>
                  <Text variant="labelMedium">Kind of Visa</Text>
                  <RadioButton.Group
                    onValueChange={(itemValue, itemIndex) => {
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
                </StyledCard.Content>

                <StyledCard.Content style={{ marginBottom: 16 }}>
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
                </StyledCard.Content>

                {selectedInvoiceRecipient === 'no' && (
                  <StyledCard.Content style={{ marginBottom: 16 }}>
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
                  </StyledCard.Content>
                )}

                <StyledCard.Content>
                  <PrimaryButton
                    onPress={handleSubmit}
                    style={{ marginBottom: 10 }}
                  >
                    Next
                  </PrimaryButton>
                </StyledCard.Content>
              </StyledCard>
            )}
          </Formik>
        </Wrapper>
      </ScrollView>
    </>
  );
};
