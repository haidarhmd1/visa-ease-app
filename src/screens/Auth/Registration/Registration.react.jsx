/* eslint-disable complexity */
import { PrimaryButton } from 'components/general/Buttons';
import { StyledTextInput } from 'components/general/Form';
import { Formik } from 'formik';
import { addUserProfile } from 'network/api';
import React, { useState } from 'react';
import CountryPicker from 'react-native-country-picker-modal';
import { ScrollView, StyleSheet, View } from 'react-native';
import { HelperText, RadioButton, Text } from 'react-native-paper';
import { ROUTES } from 'res/constants/routes';
import { generalInformationValidationSchema } from 'screens/Visa/VisaApplication/steps/GeneralInformation/GeneralInformation.schema';
import { RModal } from 'components/general/CustomModals';
import { BackButton, Background, Logo } from 'components/Login';

export const Registration = ({ navigation }) => {
  const [modalStatus, setModalStatus] = useState({
    visible: false,
    loading: false,
    success: false,
    error: false,
  });

  const [selectedGender, setSelectedGender] = useState('male');
  const [selectedCountry, setSelectedCountry] = useState('Germany');
  const [countryModalVisible, setCountryModalVisible] = useState(false);

  const handleFormSubmit = async values => {
    setModalStatus({ ...modalStatus, loading: true, visible: true });
    try {
      const response = await addUserProfile(values);
      if (response.status !== 200) throw Error;
      setModalStatus({
        ...modalStatus,
        visible: true,
        error: false,
        success: true,
        loading: false,
      });
      navigation.navigate(ROUTES.MAIN);
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
    <View style={{ flex: 1, backgroundColor: 'white' }}>
      <BackButton goBack={() => navigation.goBack()} />
      <View style={style.logoContainer}>
        <Logo style={style.center} />
      </View>
      <Text variant="titleLarge" style={[style.center, style.marginBottom]}>
        Registration
      </Text>
      <ScrollView>
        <Background>
          <Formik
            initialValues={{
              fullname: '',
              gender: 'male',
              country: 'Germany',
              email: '',
              phone: '',
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
                    value={values?.email}
                    keyboardType="email-address"
                    error={errors.email && touched.email}
                  />
                  {errors.email && touched.email && (
                    <HelperText type="error">{errors.email}</HelperText>
                  )}
                </View>

                <View style={[style.inputWidth, style.marginBottom]}>
                  <Text variant="labelMedium">Gender*</Text>
                  <RadioButton.Group
                    onValueChange={(itemValue, itemIndex) => {
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
                    value={values?.country}
                    editable={false}
                    selectTextOnFocus={false}
                    onPressIn={() => setCountryModalVisible(true)}
                    placeholder={selectedCountry}
                  />
                  {errors.country && touched.country && (
                    <HelperText type="error">{errors.country}</HelperText>
                  )}
                </View>

                <View style={[style.inputWidth, style.marginBottom]}>
                  <StyledTextInput
                    mode="outlined"
                    name="phone"
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
      <RModal
        visible={modalStatus.visible}
        error={modalStatus.error}
        success={modalStatus.success}
        loading={modalStatus.loading}
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
