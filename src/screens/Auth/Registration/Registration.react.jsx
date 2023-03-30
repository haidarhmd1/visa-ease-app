/* eslint-disable max-lines */
/* eslint-disable complexity */
import React, { useState } from 'react';
import { PrimaryButton } from 'components/general/Buttons';
import { StyledTextInput } from 'components/general/Form';
import { Formik } from 'formik';
import { registerUserProfile } from 'network/api';
import CountryPicker from 'react-native-country-picker-modal';
import {
  ScrollView,
  StyleSheet,
  View,
  TouchableWithoutFeedback,
} from 'react-native';
import {
  Dialog,
  Divider,
  HelperText,
  RadioButton,
  Text,
} from 'react-native-paper';
import { BackButton } from 'components/Login';
import { ROUTES } from 'res/constants/routes';
import { NotificationToast } from 'components/general/NotificationToast';
import { Image } from 'expo-image';
import { PlaneStartingIllustration } from 'assets/illustrations';
import { Layout, Spacer } from 'components/general/Layout/Layout';
import { ModalSheet } from 'components/general/ModalSheet';
import { Checkbox } from 'components/general/Checkbox';
import { registrationValidationSchema } from './Registration.schema';

const blurhash = '00Q12z';

export const Registration = ({ navigation }) => {
  const [isPasswordSecure, setIsPasswordSecure] = useState(true);
  const [
    isPasswordConfirmationSecure,
    setIsPasswordConfirmationSecure,
  ] = useState(true);
  const [showToast, setShowToast] = useState(false);
  const [error, setError] = useState(false);
  const [success, setSuccess] = useState(false);
  const [isLoading, setIsLoading] = useState(false);

  const [openModalSheet, setOpenModalSheet] = useState(false);

  const [selectedGender, setSelectedGender] = useState('male');
  const [selectedNationality, setSelectedNationality] = useState('Germany');
  const [nationalityModalVisible, setNationalityModalVisible] = useState(false);

  const [selectedCountry, setSelectedCountry] = useState('Germany');
  const [countryModalVisible, setCountryModalVisible] = useState(false);

  const [selectedMaritalStatus, setSelectedMaritalStatus] = useState('single');
  const [
    openMaritalStatusModalSheet,
    setOpenMaritalStatusModalSheet,
  ] = useState(false);

  const [checked, setChecked] = React.useState(false);
  const hideModal = () => setOpenModalSheet(false);

  const handleFormSubmit = values => {
    // setShowToast(true);
    // setIsLoading(true);
    // try {
    //   const response = await registerUserProfile(values);
    //   if (response.status !== 200) throw Error;

    //   setIsLoading(false);
    //   setSuccess(true);

    //   setTimeout(() => {
    //     navigation.navigate(ROUTES.LOGIN);
    //   }, 1600);
    // } catch {
    //   setIsLoading(false);
    //   setError(true);
    // } finally {
    //   setTimeout(() => {
    //     setShowToast(false);
    //     setSuccess(false);
    //     setError(false);
    //   }, 1200);
    // }
    navigation.navigate(ROUTES.ENTER_OTP);
  };

  return (
    <View
      style={{
        flex: 1,
        backgroundColor: 'white',
      }}
    >
      <BackButton goBack={() => navigation.goBack()} />
      <ScrollView>
        <TouchableWithoutFeedback onPress={hideModal}>
          <Layout
            style={{
              paddingLeft: 32,
              paddingRight: 32,
            }}
          >
            <Text
              variant="bodyLarge"
              style={{ fontWeight: 'bold', textAlign: 'center' }}
            >
              Register for Visastar
            </Text>
            <View style={{ alignSelf: 'center' }}>
              <Image
                style={style.image}
                source={PlaneStartingIllustration}
                placeholder={blurhash}
                contentFit="contain"
                transition={1000}
              />
            </View>
            <Text variant="bodyMedium" style={{ fontWeight: 'bold' }}>
              This will only take a couple of minutes
            </Text>
            <Spacer />
            <Text variant="bodyMedium">
              Entspannen Sie sich und freuen Sie sich auf Ihren Urlaub, Ihre
              Kreuzfahrt oder Ihre Geschäftsreise, um das Visum kümmern wir uns.
            </Text>
            <Spacer />
            <Formik
              enableReinitialize
              initialValues={{
                fullname: '',
                gender: 'male',
                password: '',
                passwordConfirmation: '',
                nationality: 'Germany',
                email: '',
                phone: '',
                accetTermsAndConditions: false,
              }}
              // validationSchema={registrationValidationSchema}
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
                <>
                  <Spacer />
                  <View>
                    <Text variant="labelLarge">Login Information</Text>
                    <View style={[style.inputWidth, style.marginBottom]}>
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
                    </View>

                    <View style={[style.inputWidth, style.marginBottom]}>
                      <StyledTextInput
                        name="password"
                        label="Password*"
                        onFocus={hideModal}
                        secureTextEntry={isPasswordSecure}
                        right={
                          <StyledTextInput.Icon
                            onPress={() =>
                              setIsPasswordSecure(!isPasswordSecure)
                            }
                            icon="eye"
                          />
                        }
                        onChangeText={handleChange('password')}
                        onBlur={handleBlur('password')}
                        value={values.password}
                        error={errors.password && touched.password}
                      />
                      {errors.password && touched.password && (
                        <HelperText type="error">{errors.password}</HelperText>
                      )}
                    </View>

                    <View style={[style.inputWidth, style.marginBottom]}>
                      <StyledTextInput
                        name="passwordConfirmation"
                        label="Confirm Password*"
                        onFocus={hideModal}
                        secureTextEntry={isPasswordConfirmationSecure}
                        right={
                          <StyledTextInput.Icon
                            onPress={() =>
                              setIsPasswordConfirmationSecure(
                                !isPasswordConfirmationSecure
                              )
                            }
                            icon="eye"
                          />
                        }
                        onChangeText={handleChange('passwordConfirmation')}
                        onBlur={handleBlur('passwordConfirmation')}
                        value={values.passwordConfirmation}
                        error={
                          errors.passwordConfirmation &&
                          touched.passwordConfirmation
                        }
                      />
                      {errors.passwordConfirmation &&
                        touched.passwordConfirmation && (
                          <HelperText type="error">
                            {errors.passwordConfirmation}
                          </HelperText>
                        )}
                    </View>
                  </View>
                  <Spacer />
                  <Divider />
                  <Spacer />
                  <View>
                    <Text variant="lableLarge">Personal Information:</Text>
                    <View style={[style.inputWidth, style.marginBottom]}>
                      <StyledTextInput
                        name="fullname"
                        label="Full Name*"
                        onFocus={hideModal}
                        onChangeText={handleChange('fullname')}
                        onBlur={handleBlur('fullname')}
                        value={values?.fullname}
                        error={errors.fullname && touched.fullname}
                      />
                      {errors.fullname && touched.fullname && (
                        <HelperText type="error">{errors.fullname}</HelperText>
                      )}
                    </View>

                    <View style={[style.inputWidth, style.marginBottom]}>
                      <StyledTextInput
                        name="dob"
                        label="Date of Birth*"
                        onFocus={hideModal}
                        onChangeText={handleChange('dob')}
                        onBlur={handleBlur('dob')}
                        value={values.dob}
                        error={errors.dob && touched.dob}
                      />
                      {errors.dob && touched.dob && (
                        <HelperText type="error">{errors.dob}</HelperText>
                      )}
                    </View>

                    <View style={[style.inputWidth, style.marginBottom]}>
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
                        enablePanDownToClose={false}
                        title="Gender"
                        bottomInset={46}
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
                    </View>

                    <View style={[style.inputWidth, style.marginBottom]}>
                      <Text variant="labelMedium">Nationality*</Text>
                      <CountryPicker
                        withFilter
                        withCountryNameButton
                        withModal
                        withAlphaFilter
                        withEmoji={false}
                        containerButtonStyle={{ display: 'none' }}
                        visible={nationalityModalVisible}
                        onClose={() => setNationalityModalVisible(false)}
                        onSelect={({ name }) => {
                          setSelectedNationality(name);
                          setFieldValue('nationality', name);
                          setNationalityModalVisible(false);
                        }}
                      />

                      <StyledTextInput
                        mode="outlined"
                        name="nationality"
                        value={values?.nationality}
                        editable={false}
                        selectTextOnFocus={false}
                        onPressIn={() => setNationalityModalVisible(true)}
                        placeholder={selectedNationality}
                        right={<StyledTextInput.Icon icon="menu-down" />}
                      />
                      {errors.nationality && touched.nationality && (
                        <HelperText type="error">
                          {errors.nationality}
                        </HelperText>
                      )}
                    </View>

                    <View style={[style.inputWidth, style.marginBottom]}>
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
                    </View>

                    <View style={[style.inputWidth, style.marginBottom]}>
                      <StyledTextInput
                        mode="outlined"
                        name="phone"
                        onFocus={hideModal}
                        label="Phone*"
                        onChangeText={handleChange('phone')}
                        onBlur={handleBlur('phone')}
                        value={values?.phone}
                        keyboardType="phone-pad"
                        error={errors.phone && touched.phone}
                      />
                      {errors.phone && touched.phone && (
                        <HelperText type="error">{errors.phone}</HelperText>
                      )}
                    </View>
                  </View>
                  <Spacer />
                  <Divider />
                  <Spacer />
                  <View>
                    <Text variant="labelLarge">Adress Information</Text>
                    <View style={[style.inputWidth, style.marginBottom]}>
                      <StyledTextInput
                        name="street"
                        label="street*"
                        onFocus={hideModal}
                        onChangeText={handleChange('street')}
                        onBlur={handleBlur('street')}
                        value={values.street}
                        error={errors.street && touched.street}
                      />
                      {errors.street && touched.street && (
                        <HelperText type="error">{errors.dob}</HelperText>
                      )}
                    </View>

                    <View style={[style.inputWidth, style.marginBottom]}>
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
                    </View>
                    <View style={[style.inputWidth, style.marginBottom]}>
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
                    </View>
                  </View>
                  <Spacer />
                  <Divider />
                  <Spacer />
                  <View style={[style.inputWidth, style.marginBottom]}>
                    <Text variant="bodyMedium" style={{ fontWeight: 'bold' }}>
                      Your privacy matter to us!
                    </Text>
                    <Spacer />
                    <Text variant="bodyMedium">
                      Your personal information will be processed in accordance
                      to our privacy policies
                    </Text>
                    <Spacer />
                    <Checkbox
                      name="accTermsAndConditions"
                      onPress={() => {
                        setFieldValue('accetTermsAndConditions', !checked);
                        setChecked(!checked);
                      }}
                      title="I accept the terms and conditions of VISASTAR"
                      isChecked={checked}
                    />
                    <Spacer />
                  </View>
                  <View style={[style.inputWidth, style.marginBottom]}>
                    <PrimaryButton
                      disabled={!checked}
                      onPress={handleSubmit}
                      style={{ marginBottom: 10 }}
                    >
                      Register
                    </PrimaryButton>
                  </View>
                </>
              )}
            </Formik>
          </Layout>
        </TouchableWithoutFeedback>
      </ScrollView>
      <NotificationToast
        type="Top"
        error={error}
        isLoading={isLoading}
        success={success}
        showToast={showToast}
      />
    </View>
  );
};

const style = StyleSheet.create({
  inputWidth: {
    width: '100%',
  },
  center: {
    alignSelf: 'center',
  },
  inputMarginBottom: {
    marginBottom: 8,
  },
  marginBottom: {
    marginBottom: 16,
  },
  image: {
    width: 250,
    height: 250,
    backgroundColor: '#fff',
  },
});
