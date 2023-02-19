/* eslint-disable complexity */
import React, { useState } from 'react';
import { PrimaryButton } from 'components/general/Buttons';
import { StyledTextInput } from 'components/general/Form';
import { Formik } from 'formik';
import { registerUserProfile } from 'network/api';
import CountryPicker from 'react-native-country-picker-modal';
import { ScrollView, StyleSheet, View } from 'react-native';
import { HelperText, RadioButton, Text } from 'react-native-paper';
import { BackButton, Background } from 'components/Login';
import { ROUTES } from 'res/constants/routes';
import { NotificationToast } from 'components/general/NotificationToast';
import { registrationValidationSchema } from './Registration.schema';

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

  const [selectedGender, setSelectedGender] = useState('male');
  const [selectedNationality, setSelectedNationality] = useState('Germany');
  const [nationalityModalVisible, setNationalityModalVisible] = useState(false);

  const handleFormSubmit = async values => {
    setShowToast(true);
    setIsLoading(true);
    try {
      const response = await registerUserProfile(values);
      if (response.status !== 200) throw Error;

      setIsLoading(false);
      setSuccess(true);

      setTimeout(() => {
        navigation.navigate(ROUTES.LOGIN);
      }, 1600);
    } catch {
      setIsLoading(false);
      setError(true);
    } finally {
      setTimeout(() => {
        setShowToast(false);
        setSuccess(false);
        setError(false);
      }, 1200);
    }
  };

  return (
    <View style={{ flex: 1, backgroundColor: 'white' }}>
      <BackButton goBack={() => navigation.goBack()} />
      {/* <View style={style.logoContainer}>
        <Logo style={style.center} />
      </View> */}
      <Text variant="titleLarge" style={[style.center, style.marginBottom]}>
        Registration
      </Text>
      <ScrollView>
        <Background>
          <Formik
            initialValues={{
              fullname: '',
              gender: 'male',
              password: '',
              passwordConfirmation: '',
              nationality: 'Germany',
              email: '',
              phone: '',
            }}
            validationSchema={registrationValidationSchema}
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
                <View style={[style.inputWidth, style.marginBottom]}>
                  <StyledTextInput
                    name="fullname"
                    label="Full Name*"
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
                </View>

                <View style={[style.inputWidth, style.marginBottom]}>
                  <StyledTextInput
                    name="password"
                    label="Password*"
                    secureTextEntry={isPasswordSecure}
                    right={
                      <StyledTextInput.Icon
                        onPress={() => setIsPasswordSecure(!isPasswordSecure)}
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

                <View style={[style.inputWidth, style.marginBottom]}>
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
                  />
                  {errors.nationality && touched.nationality && (
                    <HelperText type="error">{errors.nationality}</HelperText>
                  )}
                </View>

                <View style={[style.inputWidth, style.marginBottom]}>
                  <StyledTextInput
                    mode="outlined"
                    name="phone"
                    label="Phone (optional)"
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

                <View style={[style.inputWidth, style.marginBottom]}>
                  <PrimaryButton
                    onPress={handleSubmit}
                    style={{ marginBottom: 10 }}
                  >
                    Register
                  </PrimaryButton>
                </View>
              </>
            )}
          </Formik>
        </Background>
      </ScrollView>
      <NotificationToast
        type="Bottom"
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
  buttonWidth: {
    width: 250,
  },
  logoContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
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
});
