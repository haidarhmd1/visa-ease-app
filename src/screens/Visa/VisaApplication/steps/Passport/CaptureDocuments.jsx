import React, { useEffect, useRef, useState } from 'react';
import { View } from 'react-native';

import { Layout, StyledCard } from 'components/general/Layout/Layout';
import { Camera } from 'expo-camera';
import { Formik } from 'formik';
import { PrimaryButton, SecondaryButton } from 'components/general/Buttons';
import { IconButton, Text } from 'react-native-paper';
import {
  StyledCamera,
  StyledCameraButtonWrapper,
  StyledImage,
  StyledWarningInformationCard,
} from './CaptureDocuments.styled';

export const CaptureDocuments = ({ next, data, isPassportPicture = false }) => {
  const cameraReference = useRef();
  const [hasCameraPermission, setHasCameraPermission] = useState();
  const [photo, setPhoto] = useState();

  useEffect(() => {
    (async () => {
      const cameraPermission = await Camera.requestCameraPermissionsAsync();
      setHasCameraPermission(cameraPermission.status === 'granted');
    })();
  }, []);

  if (hasCameraPermission === undefined) {
    return <Text variant="labelLarge">Requesting permissions...</Text>;
  }
  if (!hasCameraPermission) {
    return (
      <Text variant="labelLarge">
        Permission for camera not granted. Please change this in settings.
      </Text>
    );
  }

  const takePic = async () => {
    const options = {
      quality: 1,
      base64: true,
      exif: false,
    };

    const newPhoto = await cameraReference.current.takePictureAsync(options);
    setPhoto(newPhoto);
  };

  if (photo) {
    const savePhoto = async (setFieldValue, handleSubmit) => {
      await setFieldValue(
        isPassportPicture ? 'passportImage' : 'residencePermitImage',
        photo.uri
      );
      handleSubmit();
      setPhoto();
    };

    return (
      <Layout>
        <Formik initialValues={data} onSubmit={values => next(values)}>
          {({ handleSubmit, setFieldValue }) => (
            <>
              <StyledImage source={photo} />

              <PrimaryButton
                onPress={() => savePhoto(setFieldValue, handleSubmit)}
                style={{ marginTop: 10, marginBottom: 10 }}
              >
                Proceed
              </PrimaryButton>
              <SecondaryButton onPress={() => setPhoto()}>
                Discard
              </SecondaryButton>
            </>
          )}
        </Formik>
      </Layout>
    );
  }

  return (
    <Layout>
      <StyledCamera ref={cameraReference} flashMode="on" />
      <View>
        <StyledCameraButtonWrapper>
          <IconButton
            mode="contained"
            icon="camera"
            containerColor="#00bf80"
            iconColor="white"
            size={24}
            onPress={takePic}
          />
        </StyledCameraButtonWrapper>
        <StyledCard>
          <StyledCard.Content>
            <Text variant="labelLarge" style={{ fontWeight: 'bold' }}>
              {isPassportPicture
                ? 'Reisepass und Foto (biometrisch) Fotografieren:'
                : 'Aufenthaltserlaubnis Fotografieren'}
            </Text>
            <Text>
              {isPassportPicture
                ? 'Fotografieren Sie uns mit dem Antrag ein Foto von Ihrem Pass. Bitte gut lesbar.'
                : 'Falls notwendig bitte Ihre Aufenthaltserlaubis mitsenden.'}
            </Text>
          </StyledCard.Content>
        </StyledCard>
        <StyledWarningInformationCard>
          <Text variant="labelLarge" style={{ fontWeight: 'bold' }}>
            HINWEIS:
          </Text>
          <Text>
            Inorder to proceed with your application, the image needs to be
            clear
          </Text>
        </StyledWarningInformationCard>
      </View>
      {/* <Image
        style={{ width: '100%', height: '100%' }}
        source={{ uri: scannedImage }}
      /> */}
    </Layout>
  );
};
