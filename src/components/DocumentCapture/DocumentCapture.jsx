import React, { useEffect, useRef, useState } from 'react';

import { Camera } from 'expo-camera';
import { Text } from 'react-native-paper';
import { AppHeader } from 'components/general/AppHeader';
import { useNavigation } from '@react-navigation/native';
import { View } from 'react-native';
import { SaveDocument } from './SaveDocument';
import { CaptureDocument } from './CaptureDocument';

export const DocumentCaptureRaw = ({
  title,
  submitDocument,
  photo,
  setPhoto,
  fieldValue,
}) => {
  const navigation = useNavigation();
  const cameraReference = useRef(null);
  const [hasCameraPermission, setHasCameraPermission] = useState();

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
    return (
      <View>
        <AppHeader goBack={() => navigation.goBack()} title="Save Document" />
        <SaveDocument
          photo={photo}
          setPhoto={setPhoto}
          submitDocument={submitDocument}
          fieldValue={fieldValue}
        />
      </View>
    );
  }

  return (
    <View>
      <AppHeader
        navigation={navigation}
        goBack={() => navigation.goBack()}
        title={title}
      />
      <CaptureDocument cameraReference={cameraReference} takePic={takePic} />
    </View>
  );
};

export const DocumentCapture = React.memo(DocumentCaptureRaw);
