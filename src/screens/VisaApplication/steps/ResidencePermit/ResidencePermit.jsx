import React, { useEffect, useRef, useState } from 'react';
import { Text, View, Button } from 'react-native';
import { Camera } from 'expo-camera';
import { Formik } from 'formik';
import { Layout } from 'components/general/Layout/Layout';
import {
  StyledBodyText,
  StyledCamera,
  StyledImage,
  StyledSubHeadlineBold,
  StyledWarningInformationCard,
} from '../Passport/PassportCapture.styled';

export const ResidencePermit = ({ next, prev, data }) => {
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
    return <Text>Requesting permissions...</Text>;
  }
  if (!hasCameraPermission) {
    return (
      <Text>
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
      await setFieldValue('residencePermitImage', photo.uri);
      handleSubmit();
      setPhoto();
    };

    return (
      <Layout>
        <Formik initialValues={data} onSubmit={values => next(values)}>
          {({ handleSubmit, setFieldValue }) => (
            <>
              <StyledImage source={photo} />
              <Button
                title="Proceed"
                onPress={() => savePhoto(setFieldValue, handleSubmit)}
              />
              <Button title="Discard" onPress={() => setPhoto()} />
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
        <Button title="Take Pic" onPress={takePic} />
        {/* <Button title="Back" onPress={prev} /> */}
        <StyledWarningInformationCard>
          <StyledSubHeadlineBold>HINWEIS:</StyledSubHeadlineBold>
          <StyledBodyText>
            Inorder to proceed with your application, the image needs to be
            clear
          </StyledBodyText>
        </StyledWarningInformationCard>
      </View>
    </Layout>
  );
};
