import React, { useMemo, useState } from 'react';
import { Formik } from 'formik';

import { visaInformationValidationSchema } from 'screens/Visa/VisaApplication/steps/VisaInformation/VisaInformation.schema';
import { StyledCard, Wrapper } from 'components/general/Layout/Layout';
import { PrimaryButton, SecondaryButton } from 'components/general/Buttons';
import { HelperText, RadioButton, Text } from 'react-native-paper';
import { StyledTextInput } from 'components/general/Form';

export const VisaInformation = ({ next, prev, data }) => {
  const [selectedHasCruise, setSelectedHasCruise] = useState('yes');
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
          <StyledCard>
            <StyledCard.Content style={{ marginBottom: 16 }}>
              <Text variant="labelMedium">Cruise</Text>
              <RadioButton.Group
                onValueChange={(itemValue, itemIndex) => {
                  setFieldValue('hasCruise', itemValue);
                  setSelectedHasCruise(itemValue);
                }}
                value={selectedHasCruise}
              >
                <RadioButton.Item color="#00bf80" label="Yes" value="yes" />
                <RadioButton.Item color="#00bf80" label="No" value="no" />
              </RadioButton.Group>
            </StyledCard.Content>
            <StyledCard.Content style={{ marginBottom: 16 }}>
              <StyledTextInput
                mode="outlined"
                name="citizenship"
                label="Citizenship"
                onChangeText={handleChange('citizenship')}
                onBlur={handleBlur('citizenship')}
                value={values.citizenship}
                isError={errors.citizenship && touched.citizenship}
              />
              {errors.citizenship && touched.citizenship && (
                <HelperText type="error">{errors.citizenship}</HelperText>
              )}
            </StyledCard.Content>
            <StyledCard.Content style={{ marginBottom: 16 }}>
              <StyledTextInput
                mode="outlined"
                name="residencePermit"
                label="Residence Permit"
                onChangeText={handleChange('residencePermit')}
                onBlur={handleBlur('residencePermit')}
                value={values.residencePermit}
                isError={errors.residencePermit && touched.residencePermit}
              />
              {errors.residencePermit && touched.residencePermit && (
                <HelperText type="error">{errors.residencePermit}</HelperText>
              )}
            </StyledCard.Content>
            <StyledCard.Content style={{ marginBottom: 16 }}>
              <StyledTextInput
                mode="outlined"
                name="occupation"
                label="Occupation"
                onChangeText={handleChange('occupation')}
                onBlur={handleBlur('occupation')}
                value={values.occupation}
                isError={errors.occupation && touched.occupation}
              />
              {errors.occupation && touched.occupation && (
                <HelperText type="error">{errors.occupation}</HelperText>
              )}
            </StyledCard.Content>
            <StyledCard.Content style={{ marginBottom: 16 }}>
              <StyledTextInput
                mode="outlined"
                name="destinationCountry"
                label="Destination Country"
                onChangeText={handleChange('destinationCountry')}
                onBlur={handleBlur('destinationCountry')}
                value={values.destinationCountry}
                isError={
                  errors.destinationCountry && touched.destinationCountry
                }
              />
              {errors.destinationCountry && touched.destinationCountry && (
                <HelperText type="error">
                  {errors.destinationCountry}
                </HelperText>
              )}
            </StyledCard.Content>
            <StyledCard.Content style={{ marginBottom: 16 }}>
              <StyledTextInput
                mode="outlined"
                name="kindOfVisa"
                label="Kind Of Visa"
                onChangeText={handleChange('kindOfVisa')}
                onBlur={handleBlur('kindOfVisa')}
                value={values.kindOfVisa}
                editable={false}
                selectTextOnFocus={false}
              />
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
