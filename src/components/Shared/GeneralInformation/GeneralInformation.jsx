/* eslint-disable complexity */
import React, { useState } from 'react';
import { Formik } from 'formik';
import CountryPicker from 'react-native-country-picker-modal';

import { StyledCard, Wrapper } from 'components/general/Layout/Layout';
import { PrimaryButton } from 'components/general/Buttons';
import { HelperText, RadioButton, Text } from 'react-native-paper';
import { StyledTextInput } from 'components/general/Form';
import { AppHeader } from 'components/general/AppHeader';
import { ScrollView } from 'react-native';
import { completeUserProfile, getUser } from 'network/api';
import { RModal } from 'components/general/CustomModals';
import { useAuthenticationStore } from 'store/zustand';
import { useQuery, useQueryClient } from 'react-query';
import { generalInformationValidationSchema } from './GeneralInformation.schema';

export const GeneralInformation = ({ navigation }) => {
  const queryClient = useQueryClient();
  const userId = useAuthenticationStore(state => state.id);
  const { data: getUserResponse } = useQuery(['getUser', userId], () =>
    getUser(userId)
  );

  const [modalStatus, setModalStatus] = useState({
    visible: false,
    loading: false,
    success: false,
    error: false,
  });

  const [selectedGender, setSelectedGender] = useState('male');
  const [selectedCountry, setSelectedCountry] = useState('Germany');
  const [countryModalVisible, setCountryModalVisible] = useState(false);
  const [selectedMaritalStatus, setSelectedMaritalStatus] = useState('single');

  const handleFormSubmit = async values => {
    setModalStatus({ ...modalStatus, loading: true, visible: true });
    try {
      const response = await completeUserProfile(values, userId);
      if (response.status !== 200) throw Error;
      setModalStatus({
        ...modalStatus,
        visible: true,
        error: false,
        success: true,
        loading: false,
      });
      queryClient.invalidateQueries('getUser', userId);
      navigation.goBack();
    } catch {
      setModalStatus({
        ...modalStatus,
        visible: true,
        error: true,
        success: false,
        loading: false,
      });
    } finally {
      setTimeout(() => {
        setModalStatus({
          ...modalStatus,
          visible: false,
        });
      }, 1000);
    }
  };

  return (
    <>
      <AppHeader
        navigation={navigation}
        goBack={() => navigation.goBack()}
        title="General Information"
      />
      <ScrollView>
        <Wrapper>
          <Formik
            enableReinitialize
            initialValues={{
              fullname: getUserResponse?.data.fullname,
              maritalStatus: getUserResponse?.data.maritalStatus ?? 'single',
              gender: getUserResponse?.data.gender ?? 'male',
              street: getUserResponse?.data.street ?? '',
              zipCode: getUserResponse?.data.zipCode ?? '',
              city: getUserResponse?.data.city ?? '',
              country: getUserResponse?.data.country ?? 'Germany',
              email: getUserResponse?.data.email ?? '',
              phone: getUserResponse?.data.phone ?? '',
            }}
            validationSchema={generalInformationValidationSchema}
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
              <StyledCard>
                <StyledCard.Content style={{ marginBottom: 16 }}>
                  <StyledTextInput
                    name="fullname"
                    label="Full Name*"
                    onChangeText={handleChange('fullname')}
                    onBlur={handleBlur('fullname')}
                    value={values.fullname}
                    error={errors.fullname && touched.fullname}
                  />
                  {errors.fullname && touched.fullname && (
                    <HelperText type="error">{errors.fullname}</HelperText>
                  )}
                </StyledCard.Content>
                <StyledCard.Content style={{ marginBottom: 16 }}>
                  <Text variant="labelMedium">Gender*</Text>
                  <RadioButton.Group
                    onValueChange={itemValue => {
                      setFieldValue('gender', itemValue);
                      setSelectedGender(itemValue);
                    }}
                    value={selectedGender}
                  >
                    <RadioButton.Item
                      color="#00bf80"
                      label="Male"
                      value="male"
                    />
                    <RadioButton.Item
                      color="#00bf80"
                      label="Female"
                      value="female"
                    />
                    <RadioButton.Item
                      color="#00bf80"
                      label="Divers"
                      value="divers"
                    />
                  </RadioButton.Group>
                </StyledCard.Content>

                <StyledCard.Content style={{ marginBottom: 16 }}>
                  <Text variant="labelMedium">Marital Status*</Text>
                  <RadioButton.Group
                    onValueChange={itemValue => {
                      setFieldValue('maritalStatus', itemValue);
                      setSelectedMaritalStatus(itemValue);
                    }}
                    value={selectedMaritalStatus}
                  >
                    <RadioButton.Item
                      color="#00bf80"
                      label="Single"
                      value="single"
                    />
                    <RadioButton.Item
                      color="#00bf80"
                      label="Married"
                      value="married"
                    />
                    <RadioButton.Item
                      color="#00bf80"
                      label="Divorced"
                      value="divorced"
                    />
                    <RadioButton.Item
                      color="#00bf80"
                      label="Widowed"
                      value="widowed"
                    />
                  </RadioButton.Group>
                </StyledCard.Content>

                <StyledCard.Content style={{ marginBottom: 16 }}>
                  <StyledTextInput
                    name="street"
                    mode="outlined"
                    label="Street, house nr.*"
                    onChangeText={handleChange('street')}
                    onBlur={handleBlur('street')}
                    value={values.street}
                    error={errors.street && touched.street}
                  />
                  {errors.street && touched.street && (
                    <HelperText type="error">{errors.street}</HelperText>
                  )}
                </StyledCard.Content>
                <StyledCard.Content style={{ marginBottom: 16 }}>
                  <StyledTextInput
                    mode="outlined"
                    name="zipCode"
                    label="ZIP Code*"
                    onChangeText={handleChange('zipCode')}
                    onBlur={handleBlur('zipCode')}
                    value={values.zipCode}
                    error={errors.zipCode && touched.zipCode}
                  />
                  {errors.zipCode && touched.zipCode && (
                    <HelperText type="error">{errors.zipCode}</HelperText>
                  )}
                </StyledCard.Content>
                <StyledCard.Content style={{ marginBottom: 16 }}>
                  <StyledTextInput
                    mode="outlined"
                    name="city"
                    label="City*"
                    onChangeText={handleChange('city')}
                    onBlur={handleBlur('city')}
                    value={values.city}
                    error={errors.city && touched.city}
                  />
                  {errors.city && touched.city && (
                    <HelperText type="error">{errors.city}</HelperText>
                  )}
                </StyledCard.Content>
                <StyledCard.Content style={{ marginBottom: 16 }}>
                  <Text variant="labelMedium">Country*</Text>
                  <CountryPicker
                    withFilter
                    withCountryNameButton
                    withModal
                    withAlphaFilter
                    withEmoji={false}
                    containerButtonStyle={{ display: 'none' }}
                    visible={countryModalVisible}
                    onSelect={({ name }) => {
                      setSelectedCountry(name);
                      setFieldValue('country', name);
                      setCountryModalVisible(false);
                    }}
                  />

                  <StyledTextInput
                    mode="outlined"
                    name="country"
                    value={values.country}
                    editable={false}
                    selectTextOnFocus={false}
                    onPressIn={() => setCountryModalVisible(true)}
                    placeholder={selectedCountry}
                  />
                  {errors.country && touched.country && (
                    <HelperText type="error">{errors.country}</HelperText>
                  )}
                </StyledCard.Content>
                <StyledCard.Content style={{ marginBottom: 16 }}>
                  <StyledTextInput
                    mode="outlined"
                    name="email"
                    label="Email Address*"
                    onChangeText={handleChange('email')}
                    onBlur={handleBlur('email')}
                    value={values.email}
                    keyboardType="email-address"
                    error={errors.email && touched.email}
                  />
                  {errors.email && touched.email && (
                    <HelperText type="error">{errors.email}</HelperText>
                  )}
                </StyledCard.Content>
                <StyledCard.Content style={{ marginBottom: 16 }}>
                  <StyledTextInput
                    mode="outlined"
                    name="phone"
                    label="Phone*"
                    onChangeText={handleChange('phone')}
                    onBlur={handleBlur('phone')}
                    value={values.phone}
                    keyboardType="phone-pad"
                    error={errors.phone && touched.phone}
                  />
                  {errors.phone && touched.phone && (
                    <HelperText type="error">{errors.phone}</HelperText>
                  )}
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
      <RModal
        visible={modalStatus.visible}
        error={modalStatus.error}
        success={modalStatus.success}
        loading={modalStatus.loading}
      />
    </>
  );
};
