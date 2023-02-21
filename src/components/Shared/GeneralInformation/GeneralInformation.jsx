/* eslint-disable complexity */
import React, { useState } from 'react';
import { Formik } from 'formik';
import CountryPicker from 'react-native-country-picker-modal';

import { StyledCard, Wrapper } from 'components/general/Layout/Layout';
import { PrimaryButton } from 'components/general/Buttons';
import { Dialog, HelperText, RadioButton, Text } from 'react-native-paper';
import { StyledTextInput } from 'components/general/Form';
import { AppHeader } from 'components/general/AppHeader';
import { ScrollView, TouchableWithoutFeedback, View } from 'react-native';
import { completeUserProfile, getUser } from 'network/api';
import { useAuthenticationStore } from 'store/zustand';
import { useQuery, useQueryClient } from 'react-query';
import { NotificationToast } from 'components/general/NotificationToast/NotificationToast';
import { ModalSheet } from 'components/general/ModalSheet';
import { generalInformationValidationSchema } from './GeneralInformation.schema';

const GeneralInformationRaw = ({ navigation }) => {
  const queryClient = useQueryClient();
  const userId = useAuthenticationStore(state => state.id);

  const [showToast, setShowToast] = useState(false);
  const [openModalSheet, setOpenModalSheet] = useState(false);
  const [error, setError] = useState(false);
  const [success, setSuccess] = useState(false);
  const [isLoading, setIsLoading] = useState(false);

  const [selectedGender, setSelectedGender] = useState('male');
  const [selectedCountry, setSelectedCountry] = useState('Germany');
  const [countryModalVisible, setCountryModalVisible] = useState(false);
  const [selectedMaritalStatus, setSelectedMaritalStatus] = useState('single');
  const [
    openMaritalStatusModalSheet,
    setOpenMaritalStatusModalSheet,
  ] = useState(false);

  const { data: getUserResponse } = useQuery(['getUser', userId], () =>
    getUser(userId)
  );

  const handleFormSubmit = async values => {
    setShowToast(true);
    setIsLoading(true);
    try {
      const response = await completeUserProfile(values, userId);
      if (response.status !== 200) throw Error;
      queryClient.invalidateQueries('getUser', userId);

      setIsLoading(false);
      setSuccess(true);
      setTimeout(() => {
        navigation.goBack();
      }, 1600);
    } catch {
      setIsLoading(false);
      setError(true);
    }
  };

  const hideModal = () => {
    setOpenModalSheet(false);
    setOpenMaritalStatusModalSheet(false);
  };

  return (
    <>
      <AppHeader
        navigation={navigation}
        goBack={() => navigation.goBack()}
        title="General Information"
      />
      <ScrollView>
        <TouchableWithoutFeedback onPress={hideModal}>
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
                      onFocus={hideModal}
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

                    <StyledTextInput
                      mode="outlined"
                      name="gender"
                      value={values?.gender}
                      editable={false}
                      selectTextOnFocus={false}
                      onPressIn={() => setOpenModalSheet(true)}
                      placeholder={selectedGender}
                      right={<StyledTextInput.Icon icon="menu-down" />}
                    />
                    <ModalSheet
                      handleIndicatorStyle={{ display: 'none' }}
                      animateOnMount={false}
                      bottomInset={46}
                      enablePanDownToClose={false}
                      title="Gender"
                      visible={openModalSheet}
                      setVisible={setOpenModalSheet}
                    >
                      <ScrollView>
                        <Dialog.Content>
                          <RadioButton.Group
                            onValueChange={itemValue => {
                              setFieldValue('gender', itemValue);
                              setSelectedGender(itemValue);
                              hideModal();
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
                        </Dialog.Content>
                      </ScrollView>
                    </ModalSheet>
                  </StyledCard.Content>

                  <StyledCard.Content style={{ marginBottom: 16 }}>
                    <Text variant="labelMedium">Marital Status*</Text>

                    <StyledTextInput
                      mode="outlined"
                      name="maritalStatus"
                      value={values?.maritalStatus}
                      editable={false}
                      selectTextOnFocus={false}
                      onPressIn={() => setOpenMaritalStatusModalSheet(true)}
                      placeholder={selectedMaritalStatus}
                      right={<StyledTextInput.Icon icon="menu-down" />}
                    />
                    <ModalSheet
                      handleIndicatorStyle={{ display: 'none' }}
                      animateOnMount={false}
                      enablePanDownToClose={false}
                      bottomInset={46}
                      title="Martial Status"
                      visible={openMaritalStatusModalSheet}
                      setVisible={setOpenMaritalStatusModalSheet}
                    >
                      <ScrollView>
                        <Dialog.Content>
                          <RadioButton.Group
                            onValueChange={itemValue => {
                              setFieldValue('maritalStatus', itemValue);
                              setSelectedMaritalStatus(itemValue);
                              setOpenMaritalStatusModalSheet(false);
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
                        </Dialog.Content>
                      </ScrollView>
                    </ModalSheet>
                  </StyledCard.Content>

                  <StyledCard.Content style={{ marginBottom: 16 }}>
                    <Text variant="labelMedium">Address*</Text>
                    <StyledTextInput
                      name="street"
                      mode="outlined"
                      onFocus={hideModal}
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
                    <View style={{ flexDirection: 'row' }}>
                      <StyledTextInput
                        style={{ flex: 0.5, marginRight: 16 }}
                        mode="outlined"
                        name="zipCode"
                        label="ZIP Code*"
                        onFocus={hideModal}
                        onChangeText={handleChange('zipCode')}
                        onBlur={handleBlur('zipCode')}
                        value={values.zipCode}
                        error={errors.zipCode && touched.zipCode}
                      />
                      <StyledTextInput
                        style={{ flex: 1 }}
                        mode="outlined"
                        name="city"
                        label="City*"
                        onFocus={hideModal}
                        onChangeText={handleChange('city')}
                        onBlur={handleBlur('city')}
                        value={values.city}
                        error={errors.city && touched.city}
                      />
                    </View>
                    {errors.zipCode && touched.zipCode && (
                      <HelperText type="error">{errors.zipCode}</HelperText>
                    )}
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
                      onClose={() => setCountryModalVisible(false)}
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
                      right={<StyledTextInput.Icon icon="menu-down" />}
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
                      onFocus={hideModal}
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
                      onFocus={hideModal}
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
                      disabled={Object.keys(errors).length > 0}
                    >
                      Save
                    </PrimaryButton>
                  </StyledCard.Content>
                </StyledCard>
              )}
            </Formik>
          </Wrapper>
        </TouchableWithoutFeedback>
      </ScrollView>
      <NotificationToast
        type="Bottom"
        error={error}
        isLoading={isLoading}
        success={success}
        showToast={showToast}
      />
    </>
  );
};

export const GeneralInformation = React.memo(GeneralInformationRaw);
