import React from 'react';

import { StyledCard, Wrapper } from 'components/general/Layout/Layout';
import { Formik } from 'formik';
import { RegularCaption } from 'components/general/Typography/Typography';
import { StyledTextInput } from 'components/general/Form';
import { PrimaryButton, SecondaryButton } from 'components/general/Buttons';
import { FormInputWrapper } from 'screens/Visa/VisaApplication/steps/RegisterForm/RegisterForm.styled';
import { HelperText } from 'react-native-paper';

const LoginRaw = () => {
  return (
    <Wrapper>
      <StyledCard>
        <StyledCard.Title title="Login" />
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
            <StyledCard.Content>
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
                  <HelperText type="error">{errors.username}</HelperText>
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
                  <HelperText type="error">{errors.password}</HelperText>
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
            </StyledCard.Content>;
          }}
        </Formik>
      </StyledCard>
    </Wrapper>
  );
};

export const Login = React.memo(LoginRaw);
