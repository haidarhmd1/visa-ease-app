import React, { useState } from 'react';

import { PrimaryButton, SecondaryButton } from 'components/general/Buttons';
import { Background, Logo } from 'components/Login';
import { StyleSheet, View } from 'react-native';
import { StyledTextInput } from 'components/general/Form';
import { Formik } from 'formik';
import { HelperText, Text } from 'react-native-paper';
import { ROUTES } from 'res/constants/routes';
import { useAuthenticationStore } from 'store/zustand';
import { login } from 'network/api';
import { loginSchema } from './Login.schema';

const LoginRaw = ({ navigation }) => {
  const userAuth = useAuthenticationStore(state => state.userAuth);
  const [isPasswordSecure, setIsPasswordSecure] = useState(true);

  const [errorMessage, setErrorMessage] = useState({});

  const handleFormSubmit = async values => {
    try {
      const response = await login(values);
      if (response.status !== 200) {
        setErrorMessage({
          errStatus: response.status,
          errMsg: response.data.message,
        });
        throw Error;
      }
      userAuth(response.data.id, true);
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <Background>
      <Logo />
      <Text variant="titleLarge" style={[style.center, style.marginBottom]}>
        Login
      </Text>
      <HelperText type="error">{errorMessage.errMsg}</HelperText>
      <Formik
        initialValues={{
          email: '',
          password: '',
        }}
        onSubmit={handleFormSubmit}
        validationSchema={loginSchema}
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
                label="email"
                name="email"
                mode="outlined"
                onChange={() => setErrorMessage({})}
                onChangeText={handleChange('email')}
                onBlur={handleBlur('email')}
                value={values.email}
                error={errors.email && touched.email}
              />
              {errors.email && touched.email && (
                <HelperText type="error">{errors.email}</HelperText>
              )}
            </View>

            <View style={[style.inputWidth, style.marginBottom]}>
              <StyledTextInput
                label="password"
                name="password"
                secureTextEntry={isPasswordSecure}
                right={
                  <StyledTextInput.Icon
                    onPress={() => setIsPasswordSecure(!isPasswordSecure)}
                    icon="eye"
                  />
                }
                mode="outlined"
                onChange={() => setErrorMessage({})}
                onChangeText={handleChange('password')}
                onBlur={handleBlur('password')}
                value={values.password}
                error={errors.password && touched.password}
              />
              {errors.password && touched.password && (
                <HelperText type="error">{errors.password}</HelperText>
              )}
            </View>

            <PrimaryButton
              style={[style.buttonWidth, style.marginBottom]}
              mode="contained"
              onPress={handleSubmit}
            >
              Login
            </PrimaryButton>
            <SecondaryButton
              style={style.buttonWidth}
              mode="outlined"
              onPress={() => navigation.navigate(ROUTES.REGISTRATION)}
            >
              Sign Up
            </SecondaryButton>
          </>
        )}
      </Formik>
    </Background>
  );
};

const style = StyleSheet.create({
  inputWidth: {
    width: '100%',
  },
  buttonWidth: {
    width: 250,
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
});

export const Login = React.memo(LoginRaw);
