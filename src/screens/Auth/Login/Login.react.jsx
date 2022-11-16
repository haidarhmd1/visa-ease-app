import React from 'react';

import { Card, Wrapper } from 'components/general/Layout/Layout';
import { Formik } from 'formik';
import {
  RegularCaption,
  TitleBold,
} from 'components/general/Typography/Typography';
import { ErrorText, StyledTextInput } from 'components/general/Form';
import { PrimaryButton, SecondaryButton } from 'components/general/Buttons';
import { FormInputWrapper } from 'screens/Visa/VisaApplication/steps/RegisterForm/RegisterForm.styled';
import { TextInput } from 'react-native';

const LoginRaw = () => {
  return (
    <Wrapper>
      <Card>
        <TitleBold>Login</TitleBold>
        <Formik
          initialValues={{
            username: 'username',
            password: 'password',
          }}
          onSubmit={values => alert(values)}
        >
          {({
            handleChange,
            handleBlur,
            handleSubmit,
            values,
            errors,
            touched,
          }) => {
            <>
              <FormInputWrapper>
                <RegularCaption>Username</RegularCaption>
                <StyledTextInput
                  name="username"
                  placeholder="Username"
                  onChangeText={handleChange('username')}
                  onBlur={handleBlur('username')}
                  value={values.username}
                  isError={errors.username && touched.username}
                />
                {errors.username && touched.username && (
                  <ErrorText>{errors.username}</ErrorText>
                )}
              </FormInputWrapper>
              <FormInputWrapper>
                <RegularCaption>Password</RegularCaption>
                <StyledTextInput
                  name="password"
                  placeholder="Password"
                  onChangeText={handleChange('password')}
                  onBlur={handleBlur('password')}
                  value={values.password}
                  isError={errors.password && touched.password}
                />
                {errors.password && touched.password && (
                  <ErrorText>{errors.password}</ErrorText>
                )}
              </FormInputWrapper>
              <FormInputWrapper>
                <PrimaryButton
                  onPress={handleSubmit}
                  style={{ marginBottom: 10 }}
                >
                  Next
                </PrimaryButton>
                <SecondaryButton onPress={() => alert(1)}>Back</SecondaryButton>
              </FormInputWrapper>
            </>;
          }}
        </Formik>
      </Card>
    </Wrapper>
  );
};

export const Login = React.memo(LoginRaw);
