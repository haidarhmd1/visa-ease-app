import React from 'react';
import { Formik } from 'formik';
import Signature from 'react-native-signature-canvas';

import { StyledCard, Wrapper } from 'components/general/Layout/Layout';
import { PrimaryButton } from 'components/general/Buttons';
import { HelperText, Text } from 'react-native-paper';
import { StyledTextInput } from 'components/general/Form';
import { AppHeader } from 'components/general/AppHeader';
import { ScrollView } from 'react-native';
import { StyledSignatureView } from '../RegisterForm/RegisterForm.styled';
import { agreementValidationSchema } from './Agreement.schema';

const webStyle = `.m-signature-pad--footer
    {
        padding: 0;
    }
	.save {
		// display: none;
	}
`;

export const Agreement = ({ navigation }) => {
  return (
    <>
      <AppHeader
        navigation={navigation}
        goBack={() => navigation.goBack()}
        title="Agreement"
      />
      <ScrollView>
        <Wrapper>
          <Formik
            // validationSchema={agreementValidationSchema}
            onSubmit={values => console.log(values)}
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
                  <StyledTextInput
                    mode="outlined"
                    name="place"
                    label="Place"
                    onChangeText={handleChange('place')}
                    onBlur={handleBlur('place')}
                    value={values?.place}
                    isError={errors.place && touched.place}
                  />
                  {errors.place && touched.place && (
                    <HelperText type="error">{errors.place}</HelperText>
                  )}
                </StyledCard.Content>
                <StyledCard.Content style={{ marginBottom: 16 }}>
                  <StyledTextInput
                    mode="outlined"
                    name="dateOfSignature"
                    type="datetime"
                    label="Date"
                    placeholder="dd/MM/YYYY"
                    options={{
                      format: 'dd/MM/YYYY',
                    }}
                    onChangeText={handleChange('dateOfSignature')}
                    onBlur={handleBlur('dateOfSignature')}
                    value={values?.dateOfSignature}
                    keyboardType="numeric"
                    isError={errors.dateOfSignature && touched.dateOfSignature}
                  />
                  {errors.dateOfSignature && touched.dateOfSignature && (
                    <HelperText type="error">
                      {errors.dateOfSignature}
                    </HelperText>
                  )}
                </StyledCard.Content>
                <StyledCard.Content style={{ marginBottom: 16 }}>
                  <Text variant="labelMedium">Signature</Text>
                  <StyledSignatureView>
                    <Signature
                      webStyle={webStyle}
                      descriptionText=""
                      onOK={async signature => {
                        await setFieldValue('signature', signature);
                        handleChange('signature');
                      }}
                      onClear={() => {
                        setFieldValue('signature', '');
                      }}
                    />
                  </StyledSignatureView>
                  {errors.signature && touched.signature && (
                    <HelperText type="error">{errors.signature}</HelperText>
                  )}
                </StyledCard.Content>
                <StyledCard.Content>
                  <PrimaryButton
                    onPress={handleSubmit}
                    style={{ marginBottom: 10 }}
                  >
                    Next
                  </PrimaryButton>
                </StyledCard.Content>
              </StyledCard>
            )}
          </Formik>
        </Wrapper>
      </ScrollView>
    </>
  );
};
