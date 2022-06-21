import React from 'react';
import { Button, View } from 'react-native';
import { Formik } from 'formik';
import { RegularCaption } from 'components/general/Typography/Typography';
import Signature from 'react-native-signature-canvas';

import {
  ErrorText,
  StyledTextInput,
  StyledTextInputMask,
} from 'components/general/Form';
import {
  FormInputWrapper,
  StyledSignatureView,
} from '../RegisterForm/RegisterForm.styled';

const webStyle = `.m-signature-pad--footer
    {
        padding: 0;
    }
	.save {
		display: none;
	}
`;

export const Agreement = ({ next, setScrollEnabled }) => {
  return (
    <View>
      <Formik onSubmit={values => console.log('values', values)}>
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
              <RegularCaption>Place</RegularCaption>
              <StyledTextInput
                name="place"
                placeholder="Place"
                onChangeText={handleChange('place')}
                onBlur={handleBlur('place')}
                value={values.place}
              />
              {errors.place && touched.place && (
                <ErrorText>{errors.place}</ErrorText>
              )}
            </FormInputWrapper>

            <FormInputWrapper>
              <RegularCaption>Date</RegularCaption>
              <StyledTextInputMask
                name="dateOfSignature"
                type="datetime"
                placeholder="YYYY-MM-dd"
                options={{
                  format: 'YYYY-MM-dd',
                }}
                onChangeText={handleChange('dateOfSignature')}
                onBlur={handleBlur('dateOfSignature')}
                keyboardType="numeric"
              />
              {errors.dateOfSignature && touched.dateOfSignature && (
                <ErrorText>{errors.dateOfSignature}</ErrorText>
              )}
            </FormInputWrapper>

            <FormInputWrapper>
              <RegularCaption>Signature</RegularCaption>
              <StyledSignatureView>
                <Signature
                  webStyle={webStyle}
                  onEnd={() => setScrollEnabled(true)}
                  descriptionText=""
                  onOK={signature => {
                    setFieldValue('signature', signature);
                    handleChange('signature');
                  }}
                  onClear={() => {
                    setFieldValue('signature', '');
                  }}
                  onBegin={() => setScrollEnabled(false)}
                />
              </StyledSignatureView>
              {errors.signature && touched.signature && (
                <ErrorText>{errors.signature}</ErrorText>
              )}
            </FormInputWrapper>
            <Button onPress={handleSubmit} title="Next" disabled={!isValid} />
          </>
        )}
      </Formik>
    </View>
  );
};
