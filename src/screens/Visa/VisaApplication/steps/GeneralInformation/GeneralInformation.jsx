/* eslint-disable complexity */
import React, { useMemo, useState } from 'react';
import { Formik } from 'formik';

import { generalInformationValidationSchema } from 'screens/Visa/VisaApplication/steps/GeneralInformation/GeneralInformation.schema';
import { StyledCard, Wrapper } from 'components/general/Layout/Layout';
import { PrimaryButton, SecondaryButton } from 'components/general/Buttons';
import { HelperText, RadioButton, Text } from 'react-native-paper';
import { StyledTextInput } from 'components/general/Form';

export const GeneralInformation = ({ next, prev, data }) => {
  const [selectedGender, setSelectedGender] = useState('male');

  return (
    <Wrapper>
      <Formik
        initialValues={useMemo(() => data, [data])}
        // validationSchema={generalInformationValidationSchema}
        onSubmit={values => next(values)}
      >
        {({
          handleChange,
          handleBlur,
          setFieldValue,
          handleSubmit,
          values,
          errors,
          touched,
        }) => (
          <StyledCard>
            <StyledCard.Content style={{ marginBottom: 16 }}>
              <StyledTextInput
                name="fullname"
                label="Full Name"
                onChangeText={handleChange('fullname')}
                onBlur={handleBlur('fullname')}
                value={values.fullname}
                isError={errors.fullname && touched.fullname}
              />
              {errors.fullname && touched.fullname && (
                <HelperText type="error">{errors.fullname}</HelperText>
              )}
            </StyledCard.Content>
            <StyledCard.Content style={{ marginBottom: 16 }}>
              <Text variant="labelMedium">Gender</Text>
              <RadioButton.Group
                onValueChange={(itemValue, itemIndex) => {
                  setFieldValue('gender', itemValue);
                  setSelectedGender(itemValue);
                }}
                value={selectedGender}
              >
                <RadioButton.Item color="#00bf80" label="Male" value="male" />
                <RadioButton.Item
                  color="#00bf80"
                  label="Female"
                  value="female"
                />
                <RadioButton.Item
                  color="#00bf80"
                  label="Divers"
                  value="divers"
                />
              </RadioButton.Group>
            </StyledCard.Content>
            <StyledCard.Content style={{ marginBottom: 16 }}>
              <StyledTextInput
                name="street"
                mode="outlined"
                label="Street"
                onChangeText={handleChange('street')}
                onBlur={handleBlur('street')}
                value={values.street}
                isError={errors.street && touched.street}
              />
              {errors.street && touched.street && (
                <HelperText type="error">{errors.street}</HelperText>
              )}
            </StyledCard.Content>
            <StyledCard.Content style={{ marginBottom: 16 }}>
              <StyledTextInput
                mode="outlined"
                name="zipCode"
                label="ZIP Code"
                onChangeText={handleChange('zipCode')}
                onBlur={handleBlur('zipCode')}
                value={values.zipCode}
                isError={errors.zipCode && touched.zipCode}
              />
              {errors.zipCode && touched.zipCode && (
                <HelperText type="error">{errors.zipCode}</HelperText>
              )}
            </StyledCard.Content>
            <StyledCard.Content style={{ marginBottom: 16 }}>
              <StyledTextInput
                mode="outlined"
                name="city"
                label="City"
                onChangeText={handleChange('city')}
                onBlur={handleBlur('city')}
                value={values.city}
                isError={errors.city && touched.city}
              />
              {errors.city && touched.city && (
                <HelperText type="error">{errors.city}</HelperText>
              )}
            </StyledCard.Content>
            <StyledCard.Content style={{ marginBottom: 16 }}>
              <StyledTextInput
                mode="outlined"
                name="country"
                label="Country"
                onChangeText={handleChange('country')}
                onBlur={handleBlur('country')}
                value={values.country}
                isError={errors.country && touched.country}
              />
              {errors.country && touched.country && (
                <HelperText type="error">{errors.country}</HelperText>
              )}
            </StyledCard.Content>
            <StyledCard.Content style={{ marginBottom: 16 }}>
              <StyledTextInput
                mode="outlined"
                name="email"
                label="Email Address"
                onChangeText={handleChange('email')}
                onBlur={handleBlur('email')}
                value={values.email}
                keyboardType="email-address"
                isError={errors.email && touched.email}
              />
              {errors.email && touched.email && (
                <HelperText type="error">{errors.email}</HelperText>
              )}
            </StyledCard.Content>
            <StyledCard.Content style={{ marginBottom: 16 }}>
              <StyledTextInput
                mode="outlined"
                name="phone"
                label="Phone"
                onChangeText={handleChange('phone')}
                onBlur={handleBlur('phone')}
                value={values.phone}
                keyboardType="phone-pad"
                isError={errors.phone && touched.phone}
              />
              {errors.phone && touched.phone && (
                <HelperText type="error">{errors.phone}</HelperText>
              )}
            </StyledCard.Content>
            <StyledCard.Content style={{ marginBottom: 16 }}>
              <StyledTextInput
                mode="outlined"
                name="fax"
                label="Fax"
                onChangeText={handleChange('fax')}
                onBlur={handleBlur('fax')}
                value={values.fax}
                keyboardType="phone-pad"
                isError={errors.fax && touched.fax}
              />
              {errors.fax && touched.fax && (
                <HelperText type="error">{errors.fax}</HelperText>
              )}
            </StyledCard.Content>

            <StyledCard.Content>
              <PrimaryButton
                onPress={handleSubmit}
                style={{ marginBottom: 10 }}
              >
                Next
              </PrimaryButton>
              <SecondaryButton onPress={prev}>Back</SecondaryButton>
            </StyledCard.Content>
          </StyledCard>
        )}
      </Formik>
    </Wrapper>
  );
};
