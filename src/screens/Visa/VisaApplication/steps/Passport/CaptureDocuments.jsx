import React, {
  useCallback,
  useEffect,
  useMemo,
  useRef,
  useState,
} from 'react';
import { View, Button } from 'react-native';

import { Layout } from 'components/general/Layout/Layout';
import { Camera } from 'expo-camera';
import { Formik } from 'formik';
import { IconButton, Text } from 'react-native-paper';
import { AppHeader } from 'components/general/AppHeader';
import { useNavigation } from '@react-navigation/native';
import BottomSheet, { BottomSheetView } from '@gorhom/bottom-sheet';
import { SecondaryButton } from 'components/general/Buttons';
import {
  StyledCamera,
  StyledCameraButtonWrapper,
  StyledImage,
  StyledWarningInformationCard,
} from './CaptureDocuments.styled';

export const CaptureDocuments = ({ next, data, isPassportPicture = false }) => {
  const sheetReference = useRef(null);
  const snapPoints = useMemo(() => ['90%'], []);

  const handleSnapPress = useCallback(index => {
    sheetReference.current?.snapToIndex(index);
  }, []);
  const handleClosePress = useCallback(() => {
    sheetReference.current?.close();
  }, []);

  const navigation = useNavigation();
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
      <>
        <AppHeader
          navigation={navigation}
          goBack={() => navigation.goBack()}
          title="Documents"
        />
        <Layout style={{ flex: 1 }}>
          <Formik initialValues={data} onSubmit={values => next(values)}>
            {({ handleSubmit, setFieldValue }) => (
              <>
                <StyledImage source={photo} />

                <View
                  style={{
                    position: 'absolute',
                    bottom: 24,
                    width: 320,
                    alignSelf: 'center',
                  }}
                >
                  <StyledCameraButtonWrapper
                    style={{
                      justifyContent: 'space-between',
                      alignItems: 'center',
                      flexDirection: 'row',
                    }}
                  >
                    <View>
                      <IconButton
                        icon="restore"
                        containerColor="white"
                        iconColor="black"
                        size={24}
                        onPress={() => setPhoto()}
                      />
                      <Text
                        variant="labelSmall"
                        style={{ textAlign: 'center' }}
                      >
                        retake
                      </Text>
                    </View>
                    <View>
                      <IconButton
                        icon="arrow-right-thin"
                        containerColor="white"
                        iconColor="black"
                        size={24}
                        onPress={() => savePhoto(setFieldValue, handleSubmit)}
                      />
                      <Text variant="labelSmall">Continue</Text>
                    </View>
                  </StyledCameraButtonWrapper>
                </View>
              </>
            )}
          </Formik>
        </Layout>
      </>
    );
  }

  return (
    <>
      <AppHeader
        navigation={navigation}
        goBack={() => navigation.goBack()}
        title="Documents"
      />
      <Layout style={{ flex: 1 }}>
        <StyledCamera ref={cameraReference} flashMode="on" />
        <StyledWarningInformationCard>
          <Text variant="labelLarge" style={{ fontWeight: 'bold' }}>
            HINWEIS:
          </Text>
          <Text>
            Inorder to proceed with your application, the image needs to be
            clear
          </Text>
        </StyledWarningInformationCard>
        <View style={{ marginTop: 8, alignSelf: 'center' }}>
          <SecondaryButton
            style={{ width: 150 }}
            icon="animation"
            onPress={() => handleSnapPress(0)}
          >
            Guidelines
          </SecondaryButton>
        </View>
        <View
          style={{
            position: 'absolute',
            bottom: 8,
            width: 320,
            alignSelf: 'center',
          }}
        >
          <StyledCameraButtonWrapper
            style={{
              justifyContent: 'center',
              alignItems: 'center',
              flexDirection: 'row',
            }}
          >
            <IconButton
              mode="contained"
              icon="plus"
              containerColor="#00bf80"
              iconColor="white"
              size={48}
              onPress={takePic}
            />
          </StyledCameraButtonWrapper>
        </View>
        {/* <Image
        style={{ width: '100%', height: '100%' }}
        source={{ uri: scannedImage }}
      /> */}
      </Layout>
      <BottomSheet
        style={{
          shadowColor: '#000',
          shadowOffset: {
            width: 0,
            height: 3,
          },
          shadowOpacity: 0.29,
          shadowRadius: 4.65,

          elevation: 7,
        }}
        ref={sheetReference}
        snapPoints={snapPoints}
      >
        <BottomSheetView>
          <Layout>
            <View style={{ alignSelf: 'flex-end', padding: 16 }}>
              <Button title="Got it!" onPress={handleClosePress} />
            </View>
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
          </Layout>
        </BottomSheetView>
      </BottomSheet>
    </>
  );
};
