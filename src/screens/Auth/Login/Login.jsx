import React, { useState } from 'react';

import { PrimaryButton, SecondaryButton } from 'components/general/Buttons';
import { Background, Logo } from 'components/Login';
import { StyleSheet, View } from 'react-native';
import { StyledTextInput } from 'components/general/Form';
import { Formik } from 'formik';
import { HelperText } from 'react-native-paper';
import { ROUTES } from 'res/constants/routes';
import { useAuthenticationStore } from 'store/zustand';
import { login } from 'network/api';
import { LoginIllustration } from 'assets/illustrations';
import { Image } from 'expo-image';
import { loginSchema } from './Login.schema';

const blurhash = '00Q12z';

const LoginRaw = ({ navigation }) => {
  const userAuth = useAuthenticationStore(state => state.userAuth);
  const [isPasswordSecure, setIsPasswordSecure] = useState(true);

  const [errorMessage, setErrorMessage] = useState({});

  const handleFormSubmit = async values => {
    try {
      const { email, password } = values;
      const response = await login({ email, password });
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
      <View style={{ alignItems: 'center' }}>
        <Logo />
        <Image
          style={style.image}
          source={LoginIllustration}
          placeholder={blurhash}
          contentFit="contain"
          transition={1000}
        />
      </View>
      <View style={{ width: 340, alignItems: 'center' }}>
        <HelperText type="error">{errorMessage.errMsg}</HelperText>
        <Formik
          initialValues={{
            email: '',
            password: '',
          }}
          onSubmit={handleFormSubmit}
          enableReinitialize
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
                  left={<StyledTextInput.Icon icon="account-circle-outline" />}
                />
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
                  left={<StyledTextInput.Icon icon="form-textbox-password" />}
                  mode="outlined"
                  onChange={() => setErrorMessage({})}
                  onChangeText={handleChange('password')}
                  onBlur={handleBlur('password')}
                  value={values.password}
                  error={errors.password && touched.password}
                />
                {/* {errors.password && touched.password && (
                  <HelperText type="error">{errors.password}</HelperText>
                )}
                {errors.email && touched.email && (
                  <HelperText type="error">{errors.email}</HelperText>
                )} */}
              </View>

              <PrimaryButton
                style={[style.buttonWidth, style.marginBottom]}
                mode="contained"
                disabled={
                  (errors.password && touched.password) ||
                  (errors.email && touched.email)
                }
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
      </View>
    </Background>
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

export const Login = React.memo(LoginRaw);
