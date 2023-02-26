import React, { useEffect, useRef, useState } from 'react';
import { Text } from 'react-native-paper';
import { AppHeader } from 'components/general/AppHeader';
import { useNavigation } from '@react-navigation/native';
import { Camera } from 'expo-camera';
import { Linking } from 'react-native';
import { SaveDocument } from './SaveDocument';
import { CaptureDocument } from './CaptureDocument';

export const DocumentCapture = ({
  photo,
  setPhoto,
  title,
  handleSnapPress,
  submitDocument,
}) => {
  const navigation = useNavigation();

  const cameraReference = useRef(null);

  const [hasCameraPermission, setHasCameraPermission] = useState();

  // set Camera Permissions
  useEffect(() => {
    (async () => {
      const permission = await Camera.requestCameraPermissionsAsync();
      if (permission.status === 'denied') {
        await Linking.openSettings();
      }
      setHasCameraPermission(permission.status);
      console.log('hasCameraPermission', hasCameraPermission);
    })();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  if (hasCameraPermission === undefined) {
    return <Text variant="labelLarge">Requesting permissions...</Text>;
  }
  if (hasCameraPermission !== 'granted') {
    return (
      <Text variant="labelLarge">
        Permission for camera not granted. Please change this in settings.
      </Text>
    );
  }

  // console.log('device', device);
  // if (device === null) {
  //   return <Text variant="labelLarge"> Camera not available </Text>;
  // }

  // Caputure Image
  const takePic = async () => {
    const options = {
      quality: 1,
      base64: true,
      exif: false,
    };

    const newPhoto = await cameraReference.current.takePictureAsync(options);
    setPhoto(newPhoto);
  };

  // if image is taken render image preview
  if (photo) {
    return (
      <>
        <AppHeader
          navigation={navigation}
          goBack={() => navigation.goBack()}
          title={title}
        />
        <SaveDocument
          photo={photo}
          setPhoto={setPhoto}
          submitDocument={submitDocument}
        />
      </>
    );
  }

  return (
    <>
      <AppHeader
        navigation={navigation}
        goBack={() => navigation.goBack()}
        title={title}
      />
      <CaptureDocument
        cameraReference={cameraReference}
        handleSnapPress={handleSnapPress}
      />
    </>
  );
};
