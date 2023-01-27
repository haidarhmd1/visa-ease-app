import React from 'react';
import { StyledCard } from 'components/general/Layout/Layout';
import { Formik } from 'formik';
import { PrimaryButton } from 'components/general/Buttons';
import { StyledTextInput } from 'components/general/Form';
import { HelperText } from 'react-native-paper';
import { ProfileValidationSchema } from './ProfileName.schema';
import { ProfileFormWrapper } from './ProfileGeneral.styled';

export const ProfileName = () => {
  return (
    <StyledCard>
      <StyledCard.Title title="General Information" />
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
          <StyledCard.Content>
            <ProfileFormWrapper>
              <StyledTextInput
                mode="outlined"
                label="Full Name"
                name="fullname"
                onChangeText={handleChange('fullname')}
                onBlur={handleBlur('fullname')}
                value={values.fullname}
                error={errors.fullname && touched.fullname}
                isError={errors.fullname && touched.fullname}
              />
              {errors.fullname && touched.fullname && (
                <HelperText type="error">{errors.fullname}</HelperText>
              )}
            </ProfileFormWrapper>
            <ProfileFormWrapper>
              <StyledTextInput
                mode="outlined"
                label="Email"
                name="email"
                onChangeText={handleChange('email')}
                onBlur={handleBlur('email')}
                value={values.email}
                keyboardType="email-address"
                isError={errors.email && touched.email}
                error={errors.email && touched.email}
              />
              {errors.email && touched.email && (
                <HelperText type="error">{errors.email}</HelperText>
              )}
            </ProfileFormWrapper>
            <ProfileFormWrapper>
              <StyledTextInput
                mode="outlined"
                label="Date of Birth"
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
                error={errors.dob && touched.dob}
                isError={errors.dob && touched.dob}
              />
              {errors.email && touched.email && (
                <HelperText type="error">{errors.dob}</HelperText>
              )}
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
          </StyledCard.Content>
        )}
      </Formik>
    </StyledCard>
  );
};
