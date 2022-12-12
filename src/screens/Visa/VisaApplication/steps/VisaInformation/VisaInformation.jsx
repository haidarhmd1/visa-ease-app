import React, { useMemo, useState } from 'react';
import { Formik } from 'formik';
import { Picker } from '@react-native-picker/picker';
import { RegularCaption } from 'components/general/Typography/Typography';

import { ErrorText, StyledTextInput } from 'components/general/Form';
import { visaInformationValidationSchema } from 'screens/Visa/VisaApplication/steps/VisaInformation/VisaInformation.schema';
import { Wrapper } from 'components/general/Layout/Layout';
import { PrimaryButton, SecondaryButton } from 'components/general/Buttons';
import { FormItemWrapper } from 'components/general/Form/Form';
import { FormInputWrapper } from '../RegisterForm/RegisterForm.styled';

export const VisaInformation = ({ next, prev, data }) => {
  const [selectedHasCruise, setSelectedHasCruise] = useState();
  return (
    <Wrapper>
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
        }) => (
          <FormInputWrapper>
            <FormItemWrapper>
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
            </FormItemWrapper>
            <FormItemWrapper>
              <RegularCaption>Citizenship</RegularCaption>
              <StyledTextInput
                name="citizenship"
                placeholder="Citizenship"
                onChangeText={handleChange('citizenship')}
                onBlur={handleBlur('citizenship')}
                value={values.citizenship}
                isError={errors.citizenship && touched.citizenship}
              />
              {errors.citizenship && touched.citizenship && (
                <ErrorText>{errors.citizenship}</ErrorText>
              )}
            </FormItemWrapper>
            <FormItemWrapper>
              <RegularCaption>Residence Permit</RegularCaption>
              <StyledTextInput
                name="residencePermit"
                placeholder="Residence Permit"
                onChangeText={handleChange('residencePermit')}
                onBlur={handleBlur('residencePermit')}
                value={values.residencePermit}
                isError={errors.residencePermit && touched.residencePermit}
              />
              {errors.residencePermit && touched.residencePermit && (
                <ErrorText>{errors.residencePermit}</ErrorText>
              )}
            </FormItemWrapper>
            <FormItemWrapper>
              <RegularCaption>Occupation</RegularCaption>
              <StyledTextInput
                name="occupation"
                placeholder="Occupation"
                onChangeText={handleChange('occupation')}
                onBlur={handleBlur('occupation')}
                value={values.occupation}
                isError={errors.occupation && touched.occupation}
              />
              {errors.occupation && touched.occupation && (
                <ErrorText>{errors.occupation}</ErrorText>
              )}
            </FormItemWrapper>
            <FormItemWrapper>
              <RegularCaption>Destination Country</RegularCaption>
              <StyledTextInput
                name="destinationCountry"
                placeholder="Destination Country"
                onChangeText={handleChange('destinationCountry')}
                onBlur={handleBlur('destinationCountry')}
                value={values.destinationCountry}
                isError={
                  errors.destinationCountry && touched.destinationCountry
                }
              />
              {errors.destinationCountry && touched.destinationCountry && (
                <ErrorText>{errors.destinationCountry}</ErrorText>
              )}
            </FormItemWrapper>
            <FormItemWrapper>
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
            </FormItemWrapper>
            <PrimaryButton onPress={handleSubmit} style={{ marginBottom: 10 }}>
              Next
            </PrimaryButton>

            <SecondaryButton onPress={prev}>Back</SecondaryButton>
          </FormInputWrapper>
        )}
      </Formik>
    </Wrapper>
  );
};
