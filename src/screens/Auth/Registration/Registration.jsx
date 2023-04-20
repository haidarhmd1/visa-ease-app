import React, { useState } from 'react';
import { PrimaryButton } from 'components/general/Buttons';
import { getCityofCountry } from 'network/api';
import { ScrollView, StyleSheet, View } from 'react-native';
import { Divider, Text, TextInput } from 'react-native-paper';
import { BackButton } from 'components/Login';
import { Layout, Spacer } from 'components/general/Layout/Layout';
import { SpacerDivider } from 'components/SpacerDivider';
import { RegisterHeader } from 'screens/Auth/Registration/RegisterHeader';
import {
  CustomCheckbox,
  CustomDropdown,
  CustomTextInput,
} from 'components/general/CustomFormElements/CustomFormElements';
import { getCountryDropdown } from 'utils/countryList';
import { useQuery } from 'react-query';
import { useForm } from 'react-hook-form';

const defaultValues = {
  fullname: '',
  gender: null,
  maritalStatus: null,
  password: '',
  passwordConfirmation: '',
  nationality: null,
  country: null,
  email: '',
  phone: '',
  acceptTermsAndConditions: false,
};
export const Registration = ({ navigation }) => {
  const { control, handleSubmit, watch } = useForm({
    defaultValues,
    enableReinitialize: true,
  });

  const watchCountry = watch('country') || '';
  const watchCheck = watch('acceptTermsAndConditions');

  const { isLoading, data: cityData } = useQuery(
    ['getCityByCountry', watchCountry?.label],
    () => getCityofCountry(JSON.stringify({ country: watchCountry?.label }))
  );

  const [isPasswordSecure, setIsPasswordSecure] = useState(true);
  const [isPasswordConfirmationSecure, setIsPasswordConfirmationSecure] =
    useState(true);

  const getZipLabel =
    watchCountry?.value === 'DE' || watchCountry?.value === 'US'
      ? 'ZIP Code*'
      : 'ZIP Code';

  const onSubmit = data => {
    console.log(data);
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
        <Layout>
          <RegisterHeader />
          <View>
            <Spacer />
            <View>
              <Text variant="labelLarge">Login Information</Text>
              <Spacer />
              <View style={[style.inputWidth, style.marginBottom]}>
                <CustomTextInput
                  control={control}
                  name="email"
                  // rules={{ required: true }}
                  placeholder="Email Address*"
                  keyboardType="email-address"
                />
              </View>

              <View style={[style.inputWidth, style.marginBottom]}>
                <CustomTextInput
                  control={control}
                  // rules={{ required: true }}
                  name="password"
                  placeholder="Password*"
                  secureTextEntry={isPasswordSecure}
                  right={
                    <TextInput.Icon
                      onPress={() => setIsPasswordSecure(!isPasswordSecure)}
                      icon="eye"
                    />
                  }
                />
              </View>

              <View style={[style.inputWidth, style.marginBottom]}>
                <CustomTextInput
                  control={control}
                  // rules={{ required: true }}
                  name="passwordConfirmation"
                  placeholder="Confirm Password*"
                  secureTextEntry={isPasswordConfirmationSecure}
                  right={
                    <TextInput.Icon
                      onPress={() =>
                        setIsPasswordConfirmationSecure(
                          !isPasswordConfirmationSecure
                        )
                      }
                      icon="eye"
                    />
                  }
                />
              </View>
            </View>
            <SpacerDivider />
            <View>
              <Text variant="lableLarge">Personal Information:</Text>
              <Spacer />
              <View style={[style.inputWidth, style.marginBottom]}>
                <CustomTextInput
                  control={control}
                  // rules={{ required: true }}
                  name="fullname"
                  placeholder="Full Name*"
                />
              </View>

              <View style={[style.inputWidth, style.marginBottom]}>
                <CustomTextInput
                  control={control}
                  // rules={{ required: true }}
                  name="dob"
                  placeholder="Date of Birth*"
                />
              </View>

              <View style={[style.inputWidth, style.marginBottom]}>
                <Text variant="labelMedium">Gender*</Text>
                <CustomDropdown
                  name="gender"
                  // rules={{ required: true }}
                  control={control}
                  selectPlaceholder="Select Gender"
                  data={[
                    { label: 'Male', value: 'male' },
                    { label: 'Female', value: 'female' },
                  ]}
                />
              </View>

              <View style={[style.inputWidth, style.marginBottom]}>
                <Text variant="labelMedium">Nationality*</Text>
                <CustomDropdown
                  name="nationality"
                  control={control}
                  selectPlaceholder="Select a Nationality"
                  data={getCountryDropdown}
                />
              </View>

              <View style={[style.inputWidth, style.marginBottom]}>
                <Text variant="labelMedium">Marital Status*</Text>

                <CustomDropdown
                  name="maritalStatus"
                  // rules={{ required: true }}
                  control={control}
                  selectPlaceholder="Select a Marital Status"
                  data={[
                    { label: 'Single', value: 'single' },
                    { label: 'Married', value: 'married' },
                    { label: 'Widowed', value: 'widowed' },
                  ]}
                />
              </View>

              <View style={[style.inputWidth, style.marginBottom]}>
                <CustomTextInput
                  control={control}
                  // rules={{ required: true }}
                  name="phone"
                  placeholder="Phone*"
                />
              </View>
            </View>
            <Spacer />
            <Divider />
            <Spacer />
            <View>
              <Text variant="labelLarge">Adress Information</Text>
              <Spacer />
              <View style={[style.inputWidth, style.marginBottom]}>
                <Text variant="labelMedium">Country*</Text>
                <CustomDropdown
                  name="country"
                  control={control}
                  selectPlaceholder="Select a country"
                  data={getCountryDropdown}
                />
              </View>
              <View style={[style.inputWidth, style.marginBottom]}>
                <CustomDropdown
                  name="city"
                  control={control}
                  disabled={isLoading}
                  selectPlaceholder={
                    isLoading ? 'Loading cities' : 'Select a City'
                  }
                  data={
                    cityData?.data.data.map(list => {
                      return {
                        label: list,
                        value: list,
                      };
                    }) || []
                  }
                />
              </View>

              <View style={[style.inputWidth, style.marginBottom]}>
                <View style={{ flexDirection: 'row' }}>
                  <CustomTextInput
                    style={{ flex: 0.5, marginRight: 16 }}
                    control={control}
                    // rules={{ required: true }}
                    name="zipCode"
                    placeholder={getZipLabel}
                  />

                  <CustomTextInput
                    style={{ flex: 1 }}
                    control={control}
                    // rules={{ required: true }}
                    name="street"
                    placeholder="street*"
                  />
                </View>
              </View>
            </View>
            <Spacer />
            <Divider />
            <Spacer />
            <View style={[style.inputWidth, style.marginBottom]}>
              <Spacer />
              <Text variant="bodyMedium" style={{ fontWeight: 'bold' }}>
                Your privacy matter to us!
              </Text>
              <Spacer />
              <Text variant="bodyMedium">
                Your personal information will be processed in accordance to our
                privacy policies
              </Text>
              <Spacer />
              <CustomCheckbox
                name="acceptTermsAndConditions"
                control={control}
                title="I accept the terms and conditions of VISASTAR"
              />
              <Spacer />
            </View>
            <View style={[style.inputWidth, style.marginBottom]}>
              <PrimaryButton
                disabled={!watchCheck}
                onPress={handleSubmit(onSubmit)}
                style={{ marginBottom: 10 }}
              >
                Register
              </PrimaryButton>
            </View>
          </View>
        </Layout>
      </ScrollView>
      {/*<NotificationToast*/}
      {/*  type="Top"*/}
      {/*  error={error}*/}
      {/*  isLoading={isLoading}*/}
      {/*  success={success}*/}
      {/*  showToast={showToast}*/}
      {/*/>*/}
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
});
