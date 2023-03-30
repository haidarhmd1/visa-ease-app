import React, { useState } from 'react';
import { Formik } from 'formik';

import { StyledCard, Wrapper } from 'components/general/Layout/Layout';
import { PrimaryButton } from 'components/general/Buttons';
import { Card, HelperText, RadioButton, Text } from 'react-native-paper';
import { StyledTextInput } from 'components/general/Form';
import { AppHeader } from 'components/general/AppHeader';
import { ScrollView } from 'react-native';
import { useQuery, useQueryClient } from 'react-query';
import { getVisaInformation, setVisaInformation } from 'network/api';
import { NotificationToast } from 'components/general/NotificationToast';
import { useAuthenticationStore } from 'store/zustand';
import { visaInformationValidationSchema } from './VisaInformation.schema';

export const VisaInformation = ({ navigation }) => {
  const userId = useAuthenticationStore(state => state.id);
  const queryClient = useQueryClient();

  const [showToast, setShowToast] = useState(false);
  const [error, setError] = useState(false);
  const [success, setSuccess] = useState(false);
  const [isLoading, setIsLoading] = useState(false);

  const [selectedHasCruise, setSelectedHasCruise] = useState('yes');
  const [selectedKindOfVisa, setSelectedKindOfVisa] = useState('single_entry');

  const { data: getVisaInformationData } = useQuery(
    ['getVisaInformation', userId],
    () => getVisaInformation(userId)
  );

  const handleFormSubmit = async values => {
    setShowToast(true);
    setIsLoading(true);
    try {
      const response = await setVisaInformation(userId, values);
      if (response.status !== 200) throw Error;
      queryClient.invalidateQueries('getVisaInformation', userId);
      queryClient.invalidateQueries('getCompletedLists', userId);

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
        title="Visa Information"
      />
      <ScrollView>
        <Wrapper>
          <Formik
            enableReinitialize
            initialValues={{
              cruise: getVisaInformationData?.data.cruise ?? 'yes',
              residencePermit:
                getVisaInformationData?.data.residencePermit ?? '',
              occupation: getVisaInformationData?.data.occupation ?? '',
              kindOfVisa:
                getVisaInformationData?.data.kindOfVisa ?? 'single_entry',
            }}
            validationSchema={visaInformationValidationSchema}
            onSubmit={handleFormSubmit}
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
                </Card.Content>

                <Card.Content style={{ marginBottom: 16 }}>
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
                </Card.Content>
                <Card.Content style={{ marginBottom: 16 }}>
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
                </Card.Content>
                <Card.Content style={{ marginBottom: 16 }}>
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
                </Card.Content>

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
