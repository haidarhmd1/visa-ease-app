import React, { useState } from 'react';

import { SecondaryButton } from 'components/general/Buttons';
import { BackButton } from 'components/Login';
import {
  Button,
  StyleSheet,
  View,
  TouchableWithoutFeedback,
  Text,
} from 'react-native';
import { StyledTextInput } from 'components/general/Form';
import { Formik } from 'formik';
import { HelperText } from 'react-native-paper';
import {
  ForgotPasswordIllustration,
  OTPIllustration,
} from 'assets/illustrations';
import { Image } from 'expo-image';
import { colorPalette } from 'styles/theme/theme.extended';

const blurhash = '00Q12z';

const EnterOTPRaw = ({ navigation }) => {
  const [errorMessage, setErrorMessage] = useState({});

  const handleFormSubmit = values => {
    console.log(values);
  };

  return (
    <View
      style={{
        flex: 1,
        backgroundColor: 'white',
      }}
    >
      <BackButton goBack={() => navigation.goBack()} />
      <View style={{ flex: 1, justifyContent: 'center' }}>
        <View
          style={{
            alignItems: 'center',
          }}
        >
          <Image
            style={style.image}
            source={OTPIllustration}
            placeholder={blurhash}
            contentFit="contain"
            transition={1000}
          />
        </View>
        <View style={{ width: 340, alignSelf: 'center' }}>
          <HelperText type="error">{errorMessage.errMsg}</HelperText>
          <Formik
            initialValues={{
              OTP: '',
            }}
            onSubmit={handleFormSubmit}
            enableReinitialize
          >
            {({
              handleChange,
              handleBlur,
              handleSubmit,
              values,
              errors,
              touched,
            }) => (
              <>
                <View style={[style.inputWidth, style.marginBottom]}>
                  <StyledTextInput
                    label="Enter OTP"
                    name="OTP"
                    mode="outlined"
                    onChange={() => setErrorMessage({})}
                    onChangeText={handleChange('OTP')}
                    onBlur={handleBlur('OTP')}
                    value={values.OTP}
                    error={errors.OTP && touched.OTP}
                    left={
                      <StyledTextInput.Icon icon="account-circle-outline" />
                    }
                  />
                </View>
                <SecondaryButton
                  style={style.buttonWidth}
                  mode="outlined"
                  onPress={handleSubmit}
                >
                  Submit
                </SecondaryButton>
              </>
            )}
          </Formik>
          <TouchableWithoutFeedback>
            <Text
              style={{
                fontSize: 12,
                textAlign: 'center',
                color: colorPalette.turquoise.t700,
                marginTop: 8,
              }}
            >
              Did not get the Link? Resend confirmation code
            </Text>
          </TouchableWithoutFeedback>
        </View>
      </View>
    </View>
  );
};

const style = StyleSheet.create({
  inputWidth: {
    width: 340,
  },
  buttonWidth: {
    width: 340,
  },
  inputMarginBottom: {
    marginBottom: 8,
  },
  center: {
    alignSelf: 'center',
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

export const EnterOTP = React.memo(EnterOTPRaw);
