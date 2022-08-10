import React, { useMemo, useState } from 'react';
import { Button } from 'react-native';
import { Formik } from 'formik';
import { Picker } from '@react-native-picker/picker';
import { RegularCaption } from 'components/general/Typography/Typography';

import { ErrorText, StyledTextInput } from 'components/general/Form';
import { generalInformationValidationSchema } from 'screens/VisaApplication/steps/GeneralInformation/GeneralInformation.schema';
import { FormInputWrapper } from '../RegisterForm/RegisterForm.styled';

export const GeneralInformation = ({ next, prev, data }) => {
  const [selectedGender, setSelectedGender] = useState();

  return (
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
        <>
          <FormInputWrapper>
            <RegularCaption>Full Name</RegularCaption>
            <StyledTextInput
              name="fullname"
              placeholder="Full Name"
              onChangeText={handleChange('fullname')}
              onBlur={handleBlur('fullname')}
              value={values.fullname}
            />
            {errors.fullname && touched.fullname && (
              <ErrorText>{errors.fullname}</ErrorText>
            )}
          </FormInputWrapper>
          <FormInputWrapper>
            <RegularCaption>Gender</RegularCaption>
            <Picker
              selectedValue={selectedGender}
              onValueChange={(itemValue, itemIndex) => {
                setFieldValue('gender', itemValue);
                setSelectedGender(itemValue);
              }}
            >
              <Picker.Item label="Male" value="male" />
              <Picker.Item label="Female" value="female" />
              <Picker.Item label="Divers" value="divers" />
            </Picker>
          </FormInputWrapper>
          <FormInputWrapper>
            <RegularCaption>Street, Street Numbers</RegularCaption>
            <StyledTextInput
              name="street"
              placeholder="Street"
              onChangeText={handleChange('street')}
              onBlur={handleBlur('street')}
              value={values.street}
            />
            {errors.street && touched.street && (
              <ErrorText>{errors.street}</ErrorText>
            )}
          </FormInputWrapper>
          <FormInputWrapper>
            <RegularCaption>ZIP Code</RegularCaption>
            <StyledTextInput
              name="zipCode"
              placeholder="ZIP Code"
              onChangeText={handleChange('zipCode')}
              onBlur={handleBlur('zipCode')}
              value={values.zipCode}
            />
            {errors.zipCode && touched.zipCode && (
              <ErrorText>{errors.zipCode}</ErrorText>
            )}
          </FormInputWrapper>

          <FormInputWrapper>
            <RegularCaption>City</RegularCaption>
            <StyledTextInput
              name="city"
              placeholder="City"
              onChangeText={handleChange('city')}
              onBlur={handleBlur('city')}
              value={values.city}
            />
            {errors.city && touched.city && (
              <ErrorText>{errors.city}</ErrorText>
            )}
          </FormInputWrapper>

          <FormInputWrapper>
            <RegularCaption>Country</RegularCaption>
            <StyledTextInput
              name="country"
              placeholder="Country"
              onChangeText={handleChange('country')}
              onBlur={handleBlur('country')}
              value={values.country}
            />
            {errors.country && touched.country && (
              <ErrorText>{errors.country}</ErrorText>
            )}
          </FormInputWrapper>
          <FormInputWrapper>
            <RegularCaption>Email</RegularCaption>
            <StyledTextInput
              name="email"
              placeholder="Email Address"
              onChangeText={handleChange('email')}
              onBlur={handleBlur('email')}
              value={values.email}
              keyboardType="email-address"
            />
            {errors.email && touched.email && (
              <ErrorText>{errors.email}</ErrorText>
            )}
          </FormInputWrapper>

          <FormInputWrapper>
            <RegularCaption>Phone</RegularCaption>
            <StyledTextInput
              name="phone"
              placeholder="Phone"
              onChangeText={handleChange('phone')}
              onBlur={handleBlur('phone')}
              value={values.phone}
              keyboardType="phone-pad"
            />
            {errors.phone && touched.phone && (
              <ErrorText>{errors.phone}</ErrorText>
            )}
          </FormInputWrapper>

          <FormInputWrapper>
            <RegularCaption>FAX</RegularCaption>
            <StyledTextInput
              name="fax"
              placeholder="Fax"
              onChangeText={handleChange('fax')}
              onBlur={handleBlur('fax')}
              value={values.fax}
              keyboardType="phone-pad"
            />
            {errors.fax && touched.fax && <ErrorText>{errors.fax}</ErrorText>}
          </FormInputWrapper>
          <FormInputWrapper>
            <Button onPress={handleSubmit} title="Next" />
            <Button onPress={prev} title="Back" />
          </FormInputWrapper>
        </>
      )}
    </Formik>
  );
};
