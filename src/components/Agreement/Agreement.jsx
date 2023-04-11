import React, { useState } from 'react';
import { Formik } from 'formik';
import Signature from 'react-native-signature-canvas';
import * as FileSystem from 'expo-file-system';

import { Spacer, StyledCard, Wrapper } from 'components/general/Layout/Layout';
import { PrimaryButton } from 'components/general/Buttons';
import { Card, HelperText, Text } from 'react-native-paper';
import { StyledTextInput } from 'components/general/Form';
import { AppHeader } from 'components/general/AppHeader';
import { ScrollView, View } from 'react-native';
import { useAuthenticationStore } from 'store/zustand';
import { useQuery, useQueryClient } from 'react-query';
import { NotificationToast } from 'components/general/NotificationToast';
import { getAgreement, setAgreement } from 'network/api';
import { styles } from './Agreement.styled';
import { agreementValidationSchema } from './Agreement.schema';

const webStyle = `.m-signature-pad--footer
    {
        padding: 0;
    }
`;

export const Agreement = ({ navigation }) => {
  const userId = useAuthenticationStore(state => state.id);
  const queryClient = useQueryClient();
  const [showToast, setShowToast] = useState(false);
  const [error, setError] = useState(false);
  const [success, setSuccess] = useState(false);
  const [isLoading, setIsLoading] = useState(false);

  const [signatureFileCache, setSignatureFileCache] = useState('');

  const { data: getAgreementData } = useQuery(['getAgreement', userId], () =>
    getAgreement(userId)
  );

  const signatureFilePath = signature => {
    const path = `${FileSystem.cacheDirectory}sign.png`;
    FileSystem.writeAsStringAsync(
      path,
      signature.replace('data:image/png;base64,', ''),
      { encoding: FileSystem.EncodingType.Base64 }
    )
      .then(() => {
        FileSystem.getInfoAsync(path, { size: true, md5: true })
          .then(file => {
            setSignatureFileCache(file.uri);
          })
          .catch(error_ => {
            console.log('err', error_);
          });
      })
      .catch(error_ => {
        console.log('err', error_);
      });
  };

  const handleFormSubmit = async values => {
    const formData = new FormData();
    formData.append('signatureFile', {
      name: `${new Date()}_signature.png`,
      uri: values.signatureFile,
      type: 'image/png',
    });

    formData.append('date', values.date);
    formData.append('place', values.place);

    setShowToast(true);
    setIsLoading(true);

    try {
      const response = await setAgreement(userId, formData);
      if (response.status !== 200) throw Error;
      queryClient.invalidateQueries('getVisaFlightInformation', userId);
      queryClient.invalidateQueries('getCompletedLists');

      setIsLoading(false);
      setSuccess(true);
      setTimeout(() => {
        navigation.goBack();
      }, 1600);
    } catch {
      setIsLoading(false);
      setError(true);
      setTimeout(() => {
        setError(false);
      }, 1600);
    }
  };

  return (
    <>
      <AppHeader
        navigation={navigation}
        goBack={() => navigation.goBack()}
        title="Agreement"
      />
      <Formik
        enableReinitialize
        validationSchema={agreementValidationSchema}
        onSubmit={handleFormSubmit}
        initialValues={{
          place: getAgreementData?.data.place ?? '',
          date: getAgreementData?.data.date ?? '',
          signatureFile: getAgreementData?.data.signatureFile ?? '',
        }}
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
          <View style={{ flex: 1 }}>
            <ScrollView style={{ backgroundColor: 'white' }}>
              <Wrapper>
                <Spacer />
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
                <Spacer />
                <StyledTextInput
                  mode="outlined"
                  name="date"
                  type="datetime"
                  label="Date"
                  placeholder="dd/MM/YYYY"
                  options={{
                    format: 'dd/MM/YYYY',
                  }}
                  onChangeText={handleChange('date')}
                  onBlur={handleBlur('date')}
                  value={values?.date}
                  keyboardType="numeric"
                  isError={errors.date && touched.date}
                />
                {errors.date && touched.date && (
                  <HelperText type="error">{errors.date}</HelperText>
                )}
                <Spacer />
                <Text variant="labelMedium">Signature</Text>
                <View style={styles.signatureContainer}>
                  <Signature
                    webStyle={webStyle}
                    descriptionText=""
                    onOK={signature => {
                      signatureFilePath(signature);
                      setFieldValue('signatureFile', signatureFileCache);
                      handleChange('signatureFile');
                    }}
                    onClear={() => {
                      setFieldValue('signatureFile', '');
                    }}
                  />
                </View>
                {errors.signatureFile && touched.signatureFile && (
                  <HelperText type="error">{errors.signatureFile}</HelperText>
                )}
              </Wrapper>
            </ScrollView>
            <Card mode="elevated" style={{ backgroundColor: 'white' }}>
              <Card.Content>
                <PrimaryButton onPress={handleSubmit}>Submit</PrimaryButton>
              </Card.Content>
            </Card>
          </View>
        )}
      </Formik>
      <NotificationToast
        type="Top"
        error={error}
        isLoading={isLoading}
        success={success}
        showToast={showToast}
      />
    </>
  );
};
