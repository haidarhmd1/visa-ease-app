import React, { useMemo, useState } from 'react';
import { Button } from 'react-native';
import { Formik } from 'formik';
import { Picker } from '@react-native-picker/picker';
import { RegularCaption } from 'components/general/Typography/Typography';

import { ErrorText, StyledTextInput } from 'components/general/Form';
import { visaInformationValidationSchema } from 'screens/VisaApplication/steps/VisaInformation/VisaInformation.schema';
import { Layout } from 'components/general/Layout/Layout';
import { FormInputWrapper } from '../RegisterForm/RegisterForm.styled';

export const VisaInformation = ({ next, prev, data }) => {
  const [selectedHasCruise, setSelectedHasCruise] = useState();
  return (
    <Layout>
      <Formik
        initialValues={useMemo(() => data, [data])}
        // validationSchema={visaInformationValidationSchema}
        onSubmit={values => next(values)}
      >
        {({
          handleChange,
          handleBlur,
          handleSubmit,
          setFieldValue,
          values,
          errors,
          touched,
          isValid,
        }) => (
          <>
            <FormInputWrapper>
              <RegularCaption>Cruise</RegularCaption>
              <Picker
                selectedValue={selectedHasCruise}
                onValueChange={(itemValue, itemIndex) => {
                  setFieldValue('hasCruise', itemValue);
                  setSelectedHasCruise(itemValue);
                }}
              >
                <Picker.Item label="Yes" value="yes" />
                <Picker.Item label="No" value="no" />
              </Picker>
            </FormInputWrapper>

            <FormInputWrapper>
              <RegularCaption>Citizenship</RegularCaption>
              <StyledTextInput
                name="citizenship"
                placeholder="Citizenship"
                onChangeText={handleChange('citizenship')}
                onBlur={handleBlur('citizenship')}
                value={values.citizenship}
              />
              {errors.citizenship && touched.citizenship && (
                <ErrorText>{errors.citizenship}</ErrorText>
              )}
            </FormInputWrapper>

            <FormInputWrapper>
              <RegularCaption>Residence Permit</RegularCaption>
              <StyledTextInput
                name="residencePermit"
                placeholder="Residence Permit"
                onChangeText={handleChange('residencePermit')}
                onBlur={handleBlur('residencePermit')}
                value={values.residencePermit}
              />
              {errors.residencePermit && touched.residencePermit && (
                <ErrorText>{errors.residencePermit}</ErrorText>
              )}
            </FormInputWrapper>

            <FormInputWrapper>
              <RegularCaption>Occupation</RegularCaption>
              <StyledTextInput
                name="occupation"
                placeholder="Occupation"
                onChangeText={handleChange('occupation')}
                onBlur={handleBlur('occupation')}
                value={values.occupation}
              />
              {errors.occupation && touched.occupation && (
                <ErrorText>{errors.occupation}</ErrorText>
              )}
            </FormInputWrapper>

            <FormInputWrapper>
              <RegularCaption>Destination Country</RegularCaption>
              <StyledTextInput
                name="destinationCountry"
                placeholder="Destination Country"
                onChangeText={handleChange('destinationCountry')}
                onBlur={handleBlur('destinationCountry')}
                value={values.destinationCountry}
              />
              {errors.destinationCountry && touched.destinationCountry && (
                <ErrorText>{errors.destinationCountry}</ErrorText>
              )}
            </FormInputWrapper>

            <FormInputWrapper>
              <RegularCaption>Kind of Visa</RegularCaption>
              <StyledTextInput
                name="kindOfVisa"
                placeholder="Kind Of Visa"
                onChangeText={handleChange('kindOfVisa')}
                onBlur={handleBlur('kindOfVisa')}
                value={values.kindOfVisa}
                editable={false}
                selectTextOnFocus={false}
              />
            </FormInputWrapper>

            <FormInputWrapper>
              <Button onPress={handleSubmit} title="Next" />
              <Button onPress={prev} title="Back" />
            </FormInputWrapper>
          </>
        )}
      </Formik>
    </Layout>
  );
};
