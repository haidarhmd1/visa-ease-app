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
import { View } from 'react-native';
import { AccountValidationSchema } from './AccountName.schema';
import { AccountFormWrapper } from './AccountGeneral.styled';

export const AccountName = () => {
  return (
    <Card>
      <TitleBold>General Information</TitleBold>
      <Formik
        initialValues={{
          fullname: 'Haidar Hammoud',
          dob: '12/05/1992',
          email: 'haidar.hmd1@gmail.com',
        }}
        validationSchema={AccountValidationSchema}
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
            <AccountFormWrapper>
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
            </AccountFormWrapper>
            <AccountFormWrapper>
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
            </AccountFormWrapper>
            <AccountFormWrapper>
              <RegularCaption>Date of Birth</RegularCaption>
              <StyledTextInputMask
                name="dob"
                type="datetime"
                placeholder="dd/MM/YYYY"
                options={{
                  format: 'dd/MM/YYYY',
                }}
                onChangeText={handleChange('travelStartDate')}
                onBlur={handleBlur('travelStartDate')}
                value={values.travelStartDate}
                keyboardType="numeric"
                isError={errors.travelStartDate && touched.travelStartDate}
              />
            </AccountFormWrapper>
            <AccountFormWrapper>
              <PrimaryButton
                onPress={handleSubmit}
                style={{ marginBottom: 10 }}
              >
                Save
              </PrimaryButton>
            </AccountFormWrapper>
          </>
        )}
      </Formik>
    </Card>
  );
};
