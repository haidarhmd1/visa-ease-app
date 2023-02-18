import React, { useState } from 'react';
import { Formik } from 'formik';

import { StyledCard, Wrapper } from 'components/general/Layout/Layout';
import { PrimaryButton } from 'components/general/Buttons';
import { HelperText, RadioButton, Text } from 'react-native-paper';
import { StyledTextInput } from 'components/general/Form';
import { AppHeader } from 'components/general/AppHeader';
import { ScrollView } from 'react-native';

export const VisaInformation = ({ navigation }) => {
  const [selectedHasCruise, setSelectedHasCruise] = useState('yes');
  const [selectedKindOfVisa, setSelectedKindOfVisa] = useState('single_entry');

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
              destinationCountry: '',
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
                    onValueChange={itemValue => {
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
                </StyledCard.Content>
                <StyledCard.Content style={{ marginBottom: 16 }}>
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
                </StyledCard.Content>

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
