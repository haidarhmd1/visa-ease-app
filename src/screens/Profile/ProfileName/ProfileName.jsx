import React from 'react';
import { Card } from 'components/general/Layout/Layout';
import {
  RegularCaption,
  TitleBold,
} from 'components/general/Typography/Typography';
import { Formik } from 'formik';
import { PrimaryButton } from 'components/general/Buttons';
import {
  ErrorText,
  StyledTextInput,
  StyledTextInputMask,
} from 'components/general/Form';
import { ProfileValidationSchema } from './ProfileName.schema';
import { ProfileFormWrapper } from './ProfileGeneral.styled';

export const ProfileName = () => {
  return (
    <Card>
      <TitleBold>General Information</TitleBold>
      <Formik
        initialValues={{
          fullname: 'Haidar Hammoud',
          dob: '12/05/1992',
          email: 'haidar.hmd1@gmail.com',
        }}
        validationSchema={ProfileValidationSchema}
        onSubmit={values => alert(values)}
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
            <ProfileFormWrapper>
              <RegularCaption>Full Name</RegularCaption>
              <StyledTextInput
                name="fullname"
                placeholder="Full Name"
                onChangeText={handleChange('fullname')}
                onBlur={handleBlur('fullname')}
                value={values.fullname}
                isError={errors.fullname && touched.fullname}
              />
              {errors.fullname && touched.fullname && (
                <ErrorText>{errors.fullname}</ErrorText>
              )}
            </ProfileFormWrapper>
            <ProfileFormWrapper>
              <RegularCaption>Email</RegularCaption>
              <StyledTextInput
                name="email"
                placeholder="Email Address"
                onChangeText={handleChange('email')}
                onBlur={handleBlur('email')}
                value={values.email}
                keyboardType="email-address"
                isError={errors.email && touched.email}
              />
              {errors.email && touched.email && (
                <ErrorText>{errors.email}</ErrorText>
              )}
            </ProfileFormWrapper>
            <ProfileFormWrapper>
              <RegularCaption>Date of Birth</RegularCaption>
              <StyledTextInputMask
                name="dob"
                type="datetime"
                placeholder="dd/MM/YYYY"
                options={{
                  format: 'dd/MM/YYYY',
                }}
                onChangeText={handleChange('dob')}
                onBlur={handleBlur('dob')}
                value={values.dob}
                keyboardType="numeric"
                isError={errors.dob && touched.dob}
              />
            </ProfileFormWrapper>
            <ProfileFormWrapper>
              <PrimaryButton
                onPress={handleSubmit}
                style={{ marginBottom: 10 }}
                styleDisabled={{ color: 'white', backgroundColor: '#94e7e0' }}
                disabled={!!errors.dob || !!errors.email || !!errors.fullname}
              >
                Save
              </PrimaryButton>
            </ProfileFormWrapper>
          </>
        )}
      </Formik>
    </Card>
  );
};
