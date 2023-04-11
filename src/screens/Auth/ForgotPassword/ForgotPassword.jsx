import React, { useState } from 'react';

import { SecondaryButton } from 'components/general/Buttons';
import { BackButton, Background, Logo } from 'components/Login';
import { StyleSheet, View } from 'react-native';
import { StyledTextInput } from 'components/general/Form';
import { Formik } from 'formik';
import { HelperText } from 'react-native-paper';
import {
  ForgotPasswordIllustration,
  LoginIllustration,
} from 'assets/illustrations';
import { Image } from 'expo-image';

const blurhash = '00Q12z';

const ForgotPasswordRaw = ({ navigation }) => {
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
            source={ForgotPasswordIllustration}
            placeholder={blurhash}
            contentFit="contain"
            transition={1000}
          />
        </View>
        <View style={{ width: 340, alignSelf: 'center' }}>
          <HelperText type="error">{errorMessage.errMsg}</HelperText>
          <Formik
            initialValues={{
              forgotPassword: '',
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
                    label="Forgot Password"
                    name="forgotPassword"
                    mode="outlined"
                    onChange={() => setErrorMessage({})}
                    onChangeText={handleChange('forgotPassword')}
                    onBlur={handleBlur('forgotPassword')}
                    value={values.forgotPassword}
                    error={errors.forgotPassword && touched.forgotPassword}
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
                  Send New Password
                </SecondaryButton>
              </>
            )}
          </Formik>
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

export const ForgotPassword = React.memo(ForgotPasswordRaw);
