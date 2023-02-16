import React from 'react';

import { PrimaryButton, SecondaryButton } from 'components/general/Buttons';
import { Background, Logo } from 'components/Login';
import { StyleSheet, View } from 'react-native';
import { StyledTextInput } from 'components/general/Form';
import { Formik } from 'formik';
import { HelperText } from 'react-native-paper';
import { ROUTES } from 'res/constants/routes';
import { useDispatch } from 'react-redux';
import { setSignIn } from 'redux/slices/authSlice';
import { loginSchema } from './Login.schema';

const LoginRaw = ({ navigation }) => {
  const dispatch = useDispatch();

  const handleFormSubmit = values => {
    const user = {
      isLoggedIn: true,
      email: values.email,
    };

    dispatch(setSignIn(user));
  };

  return (
    <Background>
      <Logo />

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
                onChangeText={handleChange('email')}
                onBlur={handleBlur('email')}
                value={values?.email}
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
                mode="outlined"
                onChangeText={handleChange('password')}
                onBlur={handleBlur('password')}
                value={values?.password}
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
  marginBottom: {
    marginBottom: 16,
  },
});

export const Login = React.memo(LoginRaw);
