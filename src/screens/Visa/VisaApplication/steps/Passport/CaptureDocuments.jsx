import React, { useEffect, useState } from 'react';
import { View, Image } from 'react-native';
import DocumentScanner from 'react-native-document-scanner-plugin';

import { Layout } from 'components/general/Layout/Layout';
// import { PrimaryButton, SecondaryButton } from 'components/general/Buttons';
import { Feather } from '@expo/vector-icons';
import {
  StyledBodyText,
  StyledCamera,
  StyledCameraButtonWrapper,
  StyledInformationCard,
  StyledSubHeadlineBold,
  StyledTouchableOpacity,
  StyledWarningInformationCard,
} from './CaptureDocuments.styled';

export const CaptureDocuments = ({ next, data, isPassportPicture = false }) => {
  // const cameraReference = useRef();
  // const [hasCameraPermission, setHasCameraPermission] = useState();
  // const [photo, setPhoto] = useState();

  // useEffect(() => {
  //   (async () => {
  //     const cameraPermission = await Camera.requestCameraPermissionsAsync();
  //     setHasCameraPermission(cameraPermission.status === 'granted');
  //   })();
  // }, []);

  // if (hasCameraPermission === undefined) {
  //   return <Text>Requesting permissions...</Text>;
  // }
  // if (!hasCameraPermission) {
  //   return (
  //     <Text>
  //       Permission for camera not granted. Please change this in settings.
  //     </Text>
  //   );
  // }

  // const takePic = async () => {
  //   const options = {
  //     quality: 1,
  //     base64: true,
  //     exif: false,
  //   };

  //   const newPhoto = await cameraReference.current.takePictureAsync(options);
  //   setPhoto(newPhoto);
  // };

  // if (photo) {
  //   const savePhoto = async (setFieldValue, handleSubmit) => {
  //     await setFieldValue(
  //       isPassportPicture ? 'passportImage' : 'residencePermitImage',
  //       photo.uri
  //     );
  //     handleSubmit();
  //     setPhoto();
  //   };

  //   return (
  //     <Layout>
  //       <Formik initialValues={data} onSubmit={values => next(values)}>
  //         {({ handleSubmit, setFieldValue }) => (
  //           <>
  //             <StyledImage source={photo} />

  //             <PrimaryButton
  //               onPress={() => savePhoto(setFieldValue, handleSubmit)}
  //               style={{ marginTop: 10, marginBottom: 10 }}
  //             >
  //               Proceed
  //             </PrimaryButton>
  //             <SecondaryButton onPress={() => setPhoto()}>
  //               Discard
  //             </SecondaryButton>
  //           </>
  //         )}
  //       </Formik>
  //     </Layout>
  //   );
  // }
  const [scannedImage, setScannedImage] = useState();

  const scanDocument = async () => {
    // start the document scanner
    const { scannedImages } = await DocumentScanner.scanDocument();

    // get back an array with scanned image file paths
    if (scannedImages.length > 0) {
      // set the img src, so we can view the first scanned image
      setScannedImage(scannedImages[0]);
    }
  };

  useEffect(() => {
    // call scanDocument on load
    scanDocument();
  }, []);

  return (
    <Layout>
      {/* <StyledCamera ref={cameraReference} flashMode="on" />
      <View>
        <StyledCameraButtonWrapper>
          <StyledTouchableOpacity onPress={takePic}>
            <Feather name="camera" size={24} color="white" />
          </StyledTouchableOpacity>
        </StyledCameraButtonWrapper>
        <StyledInformationCard>
          <StyledSubHeadlineBold>
            {isPassportPicture
              ? 'Reisepass und Foto (biometrisch) Fotografieren:'
              : 'Aufenthaltserlaubnis Fotografieren'}
          </StyledSubHeadlineBold>
          <StyledBodyText>
            {isPassportPicture
              ? 'Fotografieren Sie uns mit dem Antrag ein Foto von Ihrem Pass. Bitte gut lesbar.'
              : 'Falls notwendig bitte Ihre Aufenthaltserlaubis mitsenden.'}
          </StyledBodyText>
        </StyledInformationCard>
        <StyledWarningInformationCard>
          <StyledSubHeadlineBold>HINWEIS:</StyledSubHeadlineBold>
          <StyledBodyText>
            Inorder to proceed with your application, the image needs to be
            clear
          </StyledBodyText>
        </StyledWarningInformationCard>
      </View> */}
      <Image
        style={{ width: '100%', height: '100%' }}
        source={{ uri: scannedImage }}
      />
    </Layout>
  );
};
